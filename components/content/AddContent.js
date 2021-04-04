import React from 'react';
import {View, TextInput, StyleSheet, Text} from 'react-native';

function AddContent() {
  return (
    <View>
      <View>
        <View>
          <TextInput style={styles.input} placeholder="請輸入購買的商品" />
        </View>
        <View>
          <TextInput style={styles.input} placeholder="請輸入價錢" />
        </View>
      </View>
      <View style={styles.categoryArea}>
        <View style={styles.category}>
          <Text style={styles.textStyle}>飲食</Text>
        </View>
        <View style={styles.category}>
          <Text style={styles.textStyle}>交通油錢</Text>
        </View>
        <View style={styles.category}>
          <Text style={styles.textStyle}>日常用品</Text>
        </View>
        <View style={styles.category}>
          <Text style={styles.textStyle}>娛樂</Text>
        </View>
        <View style={styles.category}>
          <Text style={styles.textStyle}>居家</Text>
        </View>
        <View style={styles.category}>
          <Text style={styles.textStyle}>學習</Text>
        </View>
        <View style={styles.category}>
          <Text style={styles.textStyle}>醫療</Text>
        </View>
        <View style={styles.category}>
          <Text style={styles.textStyle}>電話網路</Text>
        </View>
        <View style={styles.category}>
          <Text style={styles.textStyle}>水電瓦斯</Text>
        </View>
        <View style={styles.category}>
          <Text style={styles.textStyle}>運動健身</Text>
        </View>
        <View style={styles.category}>
          <Text style={styles.textStyle}>治裝費</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    width: 300,
    height: 50,
    marginTop: 30,
    backgroundColor: '#fff',
    textAlign: 'center',
  },
  categoryArea: {
    width: 300,
    marginTop: 40,
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  category: {
    width: '30%',
    height: 30,
    margin: 5,
    backgroundColor: '#86B825',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    color: '#FFF9DC',
  },
});

export default AddContent;
