import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function SumMoney() {
  return (
    <View>
      <Text style={styles.sum}>$</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  sum: {
    fontSize: 30,
    color: '#FFF9DC',
  },
});

export default SumMoney;
