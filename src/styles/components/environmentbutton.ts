import { StyleSheet } from "react-native";

import colors from "../colors";
import fonts from "../fonts";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.shape,
    width: 76,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
    marginHorizontal: 5,
  },

  containerActive: {
    backgroundColor: colors.green_light,
  },

  text: {
    color: colors.heading,
    fontFamily: fonts.text,
    fontSize: 12,
  },

  textActive: {
    fontFamily: fonts.heading,
    color: colors.green_dark,
  },
});
