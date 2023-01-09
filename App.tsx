import { StatusBar } from "expo-status-bar"
import { useEffect, useState } from "react"
import { Button, Platform, StyleSheet, Text, View } from "react-native"
import { requestPermissions } from "./helpers/requestPermissionsAndroid"
import {
  Central,
  DEFAULT_DIDCOMM_INDICATE_CHARACTERISTIC_UUID,
  DEFAULT_DIDCOMM_MESSAGE_CHARACTERISTIC_UUID,
  DEFAULT_DIDCOMM_SERVICE_UUID,
  Peripheral,
} from "@animo-id/react-native-ble-didcomm"
import { Spacer } from "./components"
import { Role, initializeAgentByRole } from "./agent/initializeAgentsByRole"
import { Agent } from "@aries-framework/core"

const startOptions = {
  serviceUUID: DEFAULT_DIDCOMM_SERVICE_UUID,
  messagingUUID: DEFAULT_DIDCOMM_MESSAGE_CHARACTERISTIC_UUID,
  indicationUUID: DEFAULT_DIDCOMM_INDICATE_CHARACTERISTIC_UUID,
}
enum Task {
  Scanning = "scanning",
  Advertising = "advertising",
}

export default function App() {
  const isAndroid = Platform.OS === "android"
  const [hasPermissions, setHasPermissions] = useState<boolean | undefined>()
  const [role, setRole] = useState<Role | undefined>()
  const isCentral = role === Role.Central
  const isPeripheral = role === Role.Peripheral
  const [agent, setAgent] = useState<Agent | undefined>()
  const [task, setTask] = useState<undefined | Task>()

  const central = new Central()
  const peripheral = new Peripheral()

  useEffect(() => {
    if (role) {
      void initializeAgentByRole(role)
        .then((ag) => {
          if (!ag.isInitialized) {
            console.log("Failed to initialize agent.")
            throw new Error("Agent not initialized.")
          }
          setAgent(ag)
          console.log(`Agent with role: ${role}`)
        })
        .catch((e) => {
          console.log(`Failed to initialize ${role} agent.`)
          console.log(e)
        })
    }
  }, [role])

  if (isAndroid && !hasPermissions) {
    return (
      <View style={styles.container}>
        <Button
          title="Request Permissions"
          onPress={async () => {
            await requestPermissions()
            setHasPermissions(true)
          }}
        ></Button>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <Text>BLE (Bluetooth Low Energy) demo app</Text>
      <Spacer />
      {!role && (
        <>
          <Button
            title="Start: Central"
            onPress={async () => {
              await central.start(startOptions)
              setRole(Role.Central)
            }}
          />
          <Spacer />
          <Button
            title="Start: Peripheral"
            onPress={async () => {
              await peripheral.start(startOptions)
              setRole(Role.Peripheral)
            }}
          />
          <Spacer />
        </>
      )}
      {isCentral && (
        <>
          <Button
            title="Scan"
            disabled={task === Task.Scanning}
            onPress={async () => {
              await central.scan()
              setTask(Task.Scanning)
              console.log("Scanning...")
            }}
          />
        </>
      )}
      {isPeripheral && (
        <>
          <Button
            title="Advertise"
            disabled={task === Task.Advertising}
            onPress={async () => {
              await peripheral.advertise()
              setTask(Task.Advertising)
              console.log("Advertising...")
            }}
          />
        </>
      )}
      <View style={{ position: "absolute", bottom: 33 }}>
        <Button
          title="Reset"
          onPress={async () => {
            if (agent) {
              await agent.shutdown()
            }
            console.log(`Resetting agent: ${role}`)
            setRole(undefined)
            setTask(undefined)
            setAgent(undefined)
          }}
        />
      </View>
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
})
