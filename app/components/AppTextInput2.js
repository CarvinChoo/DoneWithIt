import React from "react";
import { Platform, StyleSheet, Text, TextInput, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";
import defaultStyles from "../config/styles";

function AppTextInput2({
  icon,
  width = "100%",
  color,
  containerstyle,
  trailingText = "",
  ...otherProps
}) {
  //"...otherProps" copies all other properties given in the argument that isn't specified before
  // Text box Bar with conditional icon and dynamic text rendering
  return (
    <View
      style={[
        styles.container,
        { width: width, backgroundColor: color ? color : colors.whitegrey },
        containerstyle,
      ]}
    >
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={25}
          color={colors.muted}
          style={styles.icon}
        />
      )}
      <TextInput
        placeholderTextColor={colors.muted}
        style={[defaultStyles.text, { width: "100%" }]}
        {...otherProps} // spread all other properties given in argument into this component
      />
      <Text style={defaultStyles.text}>{trailingText}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 25,
    flexDirection: "row",
    padding: 15,
    marginVertical: 10,
    alignItems: "center",
  },
  icon: {
    marginRight: 5,
  },
});

export default AppTextInput2;
