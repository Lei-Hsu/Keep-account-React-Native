/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {NativeRouter, Route} from 'react-router-native';

import {StyleSheet, View} from 'react-native';
import SumMoney from './components/header/SumMoney';
import Home from './page/Home';
import AddPage from './page/AddPage';

const App = () => {
  return (
    <NativeRouter>
      <View style={styles.container}>
        <View style={styles.header}>
          <SumMoney />
        </View>
        <Route exact path="/" component={Home} />
        <Route path="/add" component={AddPage} />
      </View>
    </NativeRouter>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF9DC',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 100,
  },
  header: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#86B825',
  },
});

export default App;
