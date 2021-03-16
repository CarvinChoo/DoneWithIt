import React from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Swipeable from "react-native-gesture-handler/Swipeable";

import colors from "../../config/colors";
import AppText from "../AppText";
import { Colors } from "react-native/Libraries/NewAppScreen";

function ListItem({
  title,
  subTitle,
  image,
  IconComponent, //a real component
  onPress,
  renderRightActions,
  border = false, // default turns off border if not stated
  defaultimage = true,
  style,
}) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight
        underlayColor={colors.darkgrey} // changes the highlight color when pressed
        onPress={onPress}
      >
        <View style={[styles.container, style]}>
          {IconComponent}
          {image &&
            (defaultimage ? (
              <Image // Default Image using assets folder set in parent component calling this component
                style={[
                  styles.image,
                  border // boolean conditional styling
                    ? { borderWidth: 2, borderColor: colors.black }
                    : {},
                ]}
                source={image}
              />
            ) : (
              <Image // Image retrieved from firebase storage
                style={[
                  styles.image,
                  border // boolean conditional styling
                    ? { borderWidth: 2, borderColor: colors.black }
                    : {},
                ]}
                source={{ uri: image }}
              />
            ))}
          <View style={styles.detailsContainer}>
            <AppText style={styles.title} numberOfLines={1}>
              {title}
            </AppText>
            {subTitle && (
              <AppText style={styles.subTitle} numberOfLines={2}>
                {subTitle}
              </AppText>
            )}
          </View>
          <MaterialCommunityIcons
            color={colors.muted}
            name='chevron-right'
            size={25}
          />
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexDirection: "row",
    padding: 15,
    backgroundColor: colors.white,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    overflow: "hidden",
  },
  imageBorder: {
    borderWidth: 2,
    borderColor: colors.black,
  },
  detailsContainer: {
    flex: 1,
    marginLeft: 10,
    justifyContent: "center",
  },
  title: {
    fontWeight: "bold",
  },
  subTitle: {
    color: colors.muted,
  },
});
export default ListItem;
