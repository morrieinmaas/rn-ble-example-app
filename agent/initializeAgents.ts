import { agentDependencies } from "@aries-framework/react-native"
import { Agent, InitConfig } from "@aries-framework/core"
import {
  BleInboundTransport,
  BleOutboundTransport,
} from "@aries-framework/ble-transport"
import { StartOptions } from "@animo-id/react-native-ble-didcomm"

export const initializeAgent = (
  config: InitConfig,
  inboundOptions: StartOptions,
  outboundOptions: StartOptions
) => {
  const agent = new Agent(config, agentDependencies)
  const bleInbound = new BleInboundTransport(inboundOptions)
  agent.registerInboundTransport(bleInbound)
  const bleOutbound = new BleOutboundTransport(outboundOptions)
  agent.registerOutboundTransport(bleOutbound)
  return agent
}
