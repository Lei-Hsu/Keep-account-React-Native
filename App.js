/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>Header</Text>
      </View>
      <View style={styles.content}>
        <Text>content</Text>
      </View>
      <View style={styles.footer}>
        <View style={{width: '50%', backgroundColor: '#86B825'}}>
          <Text>新增</Text>
        </View>
        <View style={{width: '50%', backgroundColor: '#E6534B'}}>
          <Text>查看統計</Text>
        </View>
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
