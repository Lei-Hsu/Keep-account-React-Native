import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

function ItemsList({item}) {
  return (
    <TouchableOpacity>
      <View style={styles.itemStyle}>
        <Text style={styles.textStyle}>{item.category}</Text>
        <Text style={styles.textStyle}>{item.item}</Text>
        <View style={styles.deleteArea}>
          <Text style={styles.textStyle}>{item.price}</Text>
          <Text style={styles.deleteStyle}>X</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  itemStyle: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: '#333',
    marginTop: 15,
    paddingBottom: 10,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderColor: '#ff00ff',
  },
  textStyle: {
    width: '33%',
    textAlign: 'center',
    fontSize: 16,
  },
  deleteArea: {
    flexDirection: 'row',
  },
  deleteStyle: {
    width: '30%',
    color: 'red',
    fontSize: 14,
  },
});

export default ItemsList;
