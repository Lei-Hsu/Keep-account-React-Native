import React from 'react';
import {FlatList, SafeAreaView} from 'react-native';
import {useSelector} from 'react-redux';
import HomeItemsList from './HomeItemsList';

function Content() {
  const state = useSelector(store => store.itemsList);
  return (
    <SafeAreaView>
      <FlatList
        data={state}
        renderItem={item => <HomeItemsList item={item.item} />}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

export default Content;
