import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Link} from 'react-router-native';

function AddFooter() {
  return (
    <View style={styles.footerArea}>
      <View style={styles.add}>
        <Link style={styles.linkStyle} to="/">
          <Text style={styles.text}>返回</Text>
        </Link>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  footerArea: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  add: {
    width: '100%',
    height: '60%',
    backgroundColor: '#E6534B',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#FFF9DC',
    fontSize: 20,
  },
  linkStyle: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default AddFooter;
