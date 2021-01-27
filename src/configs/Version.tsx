import { Platform } from "react-native";

export default {
  name: Platform.OS === 'android' ? '2.0' : '1.6',
  build: 0,
}