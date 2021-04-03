import React, {useState} from 'react';
import {View, Text, FlatList, SafeAreaView} from 'react-native';
import ItemsList from './ItemsList';

function Content() {
  const DATA = [
    {
      id: 1,
      category: '飲食',
      item: '漢堡',
      price: 100,
    },
    {
      id: 2,
      category: '飲食',
      item: '可樂',
      price: 50,
    },
    {
      id: 3,
      category: '飲食',
      item: '薯條',
      price: 120,
    },
  ];
  return (
    <SafeAreaView>
      <FlatList
        data={DATA}
        renderItem={item => <ItemsList item={item.item} />}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

export default Content;
