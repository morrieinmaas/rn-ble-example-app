import { centralAgent } from "./centralAgent"
import { peripheralAgent } from "./peripheralAgent"

export enum Role {
  Central = "central",
  Peripheral = "peripheral",
}

export const initializeAgentByRole = async (role: Role) => {
  if (role === Role.Central) {
    return await centralAgent()
  } else if (role === Role.Peripheral) {
    return await peripheralAgent()
  }
  // Edge case - should not happen
  throw new Error("Unknown error. Failed returning agent.")
}
