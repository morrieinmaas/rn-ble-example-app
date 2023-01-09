import { StartOptions } from "@animo-id/react-native-ble-didcomm"
import {
  AutoAcceptCredential,
  AutoAcceptProof,
  ConsoleLogger,
  InitConfig,
  LogLevel,
} from "@aries-framework/core"

export const agentConfigCentral: InitConfig = {
  label: "wallet-demo-id5",
  walletConfig: {
    id: "wallet-demo-id5",
    key: "testkey0000000000000000000000005",
  },
  autoAcceptConnections: true,
  autoAcceptCredentials: AutoAcceptCredential.ContentApproved,
  autoAcceptProofs: AutoAcceptProof.ContentApproved,
  logger: new ConsoleLogger(LogLevel.trace),
}

export const bleInboundStartOptionsCentral: StartOptions = {
  serviceUUID: "d2f195b6-2e80-4ab0-be24-32ebe761352f",
  messagingUUID: "c3103ded-afd7-477c-b279-2ad264e20e74",
  indicationUUID: "e6e97879-780a-4c9b-b4e6-dcae3793a3e8",
}

export const bleOutboundStartOptionsCentral: StartOptions = {
  serviceUUID: "d2f195b6-2e80-4ab0-be24-32ebe761352f",
  messagingUUID: "c3103ded-afd7-477c-b279-2ad264e20e74",
  indicationUUID: "e6e97879-780a-4c9b-b4e6-dcae3793a3e8",
}

export const agentConfigPeripheral: InitConfig = {
  label: "wallet-demo-id4",
  walletConfig: {
    id: "wallet-demo-id4",
    key: "testkey0000000000000000000000004",
  },
  autoAcceptConnections: true,
  autoAcceptCredentials: AutoAcceptCredential.ContentApproved,
  autoAcceptProofs: AutoAcceptProof.ContentApproved,
  logger: new ConsoleLogger(LogLevel.trace),
}

export const bleInboundStartOptionsPeripheral: StartOptions = {
  serviceUUID: "d2f195b6-2e80-4ab0-be24-32ebe761352f",
  messagingUUID: "c3103ded-afd7-477c-b279-2ad264e20e74",
  indicationUUID: "e6e97879-780a-4c9b-b4e6-dcae3793a3e8",
}

export const bleOutboundStartOptionsPeripheral: StartOptions = {
  serviceUUID: "d2f195b6-2e80-4ab0-be24-32ebe761352f",
  messagingUUID: "c3103ded-afd7-477c-b279-2ad264e20e74",
  indicationUUID: "e6e97879-780a-4c9b-b4e6-dcae3793a3e8",
}
