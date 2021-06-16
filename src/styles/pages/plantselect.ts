import { StyleSheet } from "react-native";

import colors from "../colors";
import fonts from "../fonts";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },

  header: {
    paddingHorizontal: 30,
  },

  title: {
    fontSize: 15,
    color: colors.heading,
    fontFamily: fonts.heading,
    lineHeight: 18,
    marginTop: 15,
  },

  subtitle: {
    fontFamily: fonts.text,
    fontSize: 15,
    lineHeight: 18,
    marginTop: 15,
  },

  environmentList: {
    height: 40,
    justifyContent: "center",
    paddingBottom: 5,
    marginLeft: 32,
    marginVertical: 32,
    paddingRight: 32,
  },

  plants: {
    flex: 1,
    paddingHorizontal: 32,
    justifyContent: "center",
  },
});
