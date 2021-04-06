import React from 'react';
import {Link} from 'react-router-native';
import {View, Text, StyleSheet} from 'react-native';

function FooterArea() {
  return (
    <View style={styles.footerArea}>
      <View style={styles.add}>
        <Link style={styles.linkStyle} to="/add">
          <Text style={styles.text}>新增</Text>
        </Link>
      </View>
      <View style={styles.statistic}>
        <Link style={styles.linkStyle} to="/statistic">
          <Text style={styles.text}>統計圖表</Text>
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
    width: '50%',
    height: '60%',
    backgroundColor: '#86B825',
    justifyContent: 'center',
    alignItems: 'center',
  },
  statistic: {
    width: '50%',
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

export default FooterArea;
