import { StyleSheet } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

import colors from "../colors";
import fonts from "../fonts";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    marginTop: getStatusBarHeight(),
  },

  image: {
    width: 70,
    height: 70,
    borderRadius: 40,
  },

  greeting: {
    fontSize: 30,
    color: colors.heading,
    fontFamily: fonts.text,
  },

  userName: {
    fontSize: 30,
    fontFamily: fonts.heading,
    color: colors.heading,
    lineHeight: 38,
  },
});
