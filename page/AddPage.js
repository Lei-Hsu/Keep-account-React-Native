import React from 'react';
import {View, StyleSheet} from 'react-native';

import AddContent from '../components/content/AddContent';
import GoBackFooter from '../components/footer/GoBackFooter';

function AddPage() {
  return (
    <>
      <View style={styles.content}>
        <AddContent />
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

export default AddPage;
