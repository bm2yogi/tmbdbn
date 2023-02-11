import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.hero_text}>COMING SOON</Text>
      <Text style={styles.hero_subtext}>get ready for some fun</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  hero_text: {
    color: '#aaa',
    fontSize: '5em'
  },
  hero_subtext: {
    color: '#aaa',
    fontSize: '1em'
  }
});
