import { StyleSheet } from "react-native";

import colors from "../colors";
import fonts from "../fonts";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingHorizontal: 10,
    paddingVertical: 25,
    borderRadius: 20,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.shape,
    marginVertical: 5,
  },

  title: {
    flex: 1,
    marginLeft: 10,
    fontFamily: fonts.heading,
    fontSize: 15,
    color: colors.heading,
  },

  details: {
    alignItems: "flex-end",
  },

  timeLabel: {
    fontSize: 14,
    fontFamily: fonts.text,
    color: colors.body_light,
  },

  time: {
    marginTop: 5,
    fontSize: 14,
    fontFamily: fonts.heading,
    color: colors.body_dark,
  },

  buttonRemove: {
    width: 100,
    height: 85,
    backgroundColor: colors.red,
    marginTop: 15,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    right: 20,
    paddingLeft: 15,
  },
});
