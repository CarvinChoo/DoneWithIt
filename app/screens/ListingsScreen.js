import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet } from "react-native";

import Card from "../components/Card";

import routes from "../navigation/routes";
import Screen from "../components/Screen";
import colors from "../config/colors";

import AppText from "../components/AppText";
import AppButton from "../components/AppButton";
import AppActivityIndicator from "../components/AppActivityIndicator";

function ListingsScreen({ navigation }) {
  // since this is a Stack.Screen, it has access to {navigation} prop

  // const {
  //   data: listings, // alias for data
  //   error,
  //   loading,
  //   request: loadListings, // alias for request function
  // } = useApi(listingsApi.getListings);

  // useEffect(() => {
  //   loadListings(); // function to call listings
  // }, []); // only call for listings once

  const listings = [
    {
      id: 1,
      title: "Red jacket for sale",
      price: 100,
      image: require("../assets/jacket.jpg"),
    },
    {
      id: 2,
      title: "Couch in gret condition",
      price: 1000,
      image: require("../assets/couch.jpg"),
    },
  ];
  return (
    <Screen style={styles.screen}>
      {/* {error && ( // if error is detected
        <>
          <AppText>Couldn't retrieve the listings.</AppText>
          <AppButton
            title='Retry'
            onPress={loadListings} // button to reload listing request again
            color='cyan'
          />
        </>
      )}
      <AppActivityIndicator // loading animation component
        visible={loading} // {loading} is a boolean state
      /> */}
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()} // unqiue key is alway expected to be a string
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={"$" + item.price}
            // imageUrl={item.images[0].url} // due to listing having a array of images now, this will pick the 1st image's url
            image={item.image}
            onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)} //passing current {item} into ListingDetailsScreen
            //*routes.js is where you change the screen name
            // thumbnailUrl={item.images[0].thumbnailUrl} // sets thumbnail for progressive loading ( blur effect on image)
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 10,

    backgroundColor: colors.whitegrey,
  },
});

export default ListingsScreen;
