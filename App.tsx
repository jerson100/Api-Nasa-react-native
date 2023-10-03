/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import AppRouter from 'components/routes/AppRouter';
import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';

function App(): JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={'rgba(7,26,93,255)'}
      />
      <AppRouter />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(7,26,93,255)',
    flex: 1,
  },
});

export default App;
