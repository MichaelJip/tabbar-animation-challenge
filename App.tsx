import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Tabbar from './src/components/Tabbar';
import StaticTabbar from './src/components/StaticTabbar';

export default function App() {
  return (
    <View style={styles.container}>
      <Tabbar />
      {/* <StaticTabbar /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#93C8E7',
    justifyContent: 'flex-end',
  },
});
