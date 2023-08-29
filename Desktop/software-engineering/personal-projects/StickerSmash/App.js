import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, View } from 'react-native';
import ImageViewer from './src/components/ImageViewer';

const PlaceholderImage = require('./assets/images/background-image.png');

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer PlaceholderImage={PlaceholderImage} />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#25292e',
    
  },
  imageContainer: {
    flex: 1,
    paddingTop: 58,
  }
})