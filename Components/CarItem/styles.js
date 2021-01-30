import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  carContainer: {
    width: "100%",
    height: Dimensions.get("window").height,
  },
  titles: {
    marginTop: "30%",
    alignItems: "center",
  },

  title: {
    fontSize: 40,
    fontWeight: "500",
  },

  subtitle: {
    fontSize: 16,
    color: "#5c5e62",
  },
  subtitleCTA: {
    textDecorationLine: "underline",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    position: "absolute",
  },
  buttonsContainer: {
    width: "100%",
    position: "absolute",
    bottom: 50,
  },
  custom: {
    color: "white",
  },
});
export default styles;
