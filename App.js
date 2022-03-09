import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import WebView from 'react-native-webview';

const urlTex="https://tiendaporinternet.com/lightbox/"


export default function App() {
  return (
      <WebView
        source={{uri:urlTex}}
        style={{ marginTop: 20 }}
        originWhitelist={['*']}
      />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
