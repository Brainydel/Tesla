import React from "react";
import { View, Text, ImageBackground, Linking } from "react-native";
import StyledButton from "../StyledButton";
import styles from "./styles";

const CarItem = (props) => {
  const { name, tagline, image, taglineCTA } = props.car;
  return (
    <View style={styles.carContainer}>
      <ImageBackground source={image} style={styles.image} />
      <View style={styles.titles}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subtitle}>
          {tagline} {""}
          <Text style={styles.subtitleCTA}>{taglineCTA}</Text>
        </Text>

        <Text
          onPress={() => {
            Linking.openURL("https://instagram.com/dave_ultraa");
          }}
          style={[styles.subtitle, { fontSize: 8 }, { color: "blue" }]}
        >
          Contact @DAVE_ULTRAA for your App
        </Text>
      </View>
      <View style={styles.buttonsContainer}>
        <StyledButton
          type="primary"
          content={"Custom Order"}
          style={styles.custom}
        />
        <StyledButton type="Secondary" content={"Existing Inventory"} />
      </View>
    </View>
  );
};
export default CarItem;
