import React from 'react';
import {View, StyleSheet} from 'react-native';
import GoBackFooter from '../components/footer/GoBackFooter';
import StatisticContent from '../components/content/StatisticContent';

function Statistic() {
  return (
    <>
      <View style={styles.content}>
        <StatisticContent />
      </View>
      <View style={styles.footer}>
        <GoBackFooter />
      </View>
    </>
  );
}
const styles = StyleSheet.create({
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
export default Statistic;
