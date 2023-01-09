import {
  agentConfigPeripheral,
  bleInboundStartOptionsPeripheral,
  bleOutboundStartOptionsPeripheral,
} from "./agentConfig"
import { initializeAgent } from "./initializeAgents"

export const peripheralAgent = async () => {
  const agent = initializeAgent(
    agentConfigPeripheral,
    bleInboundStartOptionsPeripheral,
    bleOutboundStartOptionsPeripheral
  )
  await agent.initialize()
  return agent
}
