import React from 'react';
import {View, StyleSheet} from 'react-native';
import HomeFooterArea from '../components/footer/HomeFooterArea';
import HomeContent from '../components/content/HomeContent';

function Home() {
  return (
    <>
      <View style={styles.content}>
        <HomeContent />
      </View>
      <View style={styles.footer}>
        <HomeFooterArea />
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

export default Home;
