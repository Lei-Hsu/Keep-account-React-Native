import React from 'react';
import {useSelector} from 'react-redux';
import {View, Text, StyleSheet} from 'react-native';

function SumMoney() {
  const state = useSelector(store => store.itemsList);
  const totalMoney = state
    .map(item => item.price)
    .reduce((a, b) => Number(a) + Number(b), 0);
  return (
    <View>
      <Text style={styles.sum}>${totalMoney}</Text>
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
