import { Permission, PermissionsAndroid } from "react-native"

export const requiredPermissionsAndroid: Permission[] = [
  "android.permission.ACCESS_FINE_LOCATION",
  "android.permission.BLUETOOTH_CONNECT",
  "android.permission.BLUETOOTH_SCAN",
  "android.permission.BLUETOOTH_ADVERTISE",
  "android.permission.ACCESS_COARSE_LOCATION",
]

export const requestPermissions = async () => {
  const permissions = await PermissionsAndroid.requestMultiple(
    requiredPermissionsAndroid
  )
  console.log("Permissions: ", permissions)
}
