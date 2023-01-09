import {
  agentConfigCentral,
  bleInboundStartOptionsCentral,
  bleOutboundStartOptionsCentral,
} from "./agentConfig"
import { initializeAgent } from "./initializeAgents"

export const centralAgent = async () => {
  const agent = initializeAgent(
    agentConfigCentral,
    bleInboundStartOptionsCentral,
    bleOutboundStartOptionsCentral
  )
  await agent.initialize()
  return agent
}
