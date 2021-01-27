import {
  Platform,
  StatusBar,
  StyleSheet,
} from "react-native";
import Colors from "../../configs/Colors";

const SharedStyle = StyleSheet.create({
  textWhite: {
    color: Colors.white,
  },
  textOrange: {
    color: Colors.orange,
  },
  borderBGBlack: {
    padding: 10,
    backgroundColor: Colors.black,
    borderRadius: 10,
    alignItems: 'center',
  },
})

export default SharedStyle