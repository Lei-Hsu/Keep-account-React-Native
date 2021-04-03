/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet, View} from 'react-native';
import SumMoney from './components/header/SumMoney';
import FooterArea from './components/footer/FooterArea';
import Content from './components/content/Content';

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <SumMoney />
      </View>
      <View style={styles.content}>
        <Content />
      </View>
      <View style={styles.footer}>
        <FooterArea />
      </View>
    </View>
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
  content: {
    flex: 4,
  },
  footer: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
