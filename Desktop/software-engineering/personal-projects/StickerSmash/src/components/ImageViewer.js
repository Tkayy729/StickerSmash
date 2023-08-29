import React from "react";
import { StyleSheet, Image } from 'react-native';

const ImageViewer = ({PlaceholderImage}) => {
  return <Image source={PlaceholderImage} style={styles.image} />;
};

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});

export default ImageViewer;
