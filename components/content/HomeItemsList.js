import React from 'react';
import {useDispatch} from 'react-redux';
import {deleteItem} from '../../Redux/action';

import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

function ItemsList({item}) {
  const dispatch = useDispatch();
  return (
    <TouchableOpacity>
      <View style={styles.itemStyle}>
        <Text style={styles.textStyle}>{item.category}</Text>
        <Text style={styles.textStyle}>{item.item}</Text>
        <View style={styles.deleteArea}>
          <Text style={styles.textStyle}>{item.price}</Text>
          <Text
            style={styles.deleteStyle}
            onPress={() => dispatch(deleteItem(item.id))}>
            X
          </Text>
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
    borderBottomWidth: 1.5,
    borderBottomColor: '#86B825',
  },
  textStyle: {
    width: '33%',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
  deleteArea: {
    flexDirection: 'row',
  },
  deleteStyle: {
    width: '30%',
    color: 'red',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default ItemsList;
