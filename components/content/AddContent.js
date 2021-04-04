import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {v4 as uuidv4} from 'uuid';
import {View, TextInput, StyleSheet, Text} from 'react-native';
import {useHistory} from 'react-router-native';
import {addItem} from '../../Redux/action';

function AddContent() {
  const [item, setItem] = useState();
  const [price, setPrice] = useState();

  const history = useHistory();
  const dispatch = useDispatch();

  const submit = category => {
    let data = {
      id: uuidv4(),
      item: item,
      category: category,
      price: price,
    };
    dispatch(addItem(data));
    history.push('/');
  };
  return (
    <View>
      <View>
        <View>
          <TextInput
            style={styles.input}
            placeholder="請輸入購買的商品"
            onChangeText={setItem}
          />
        </View>
        <View>
          <TextInput
            style={styles.input}
            placeholder="請輸入價錢"
            onChangeText={setPrice}
          />
        </View>
      </View>
      <View style={styles.categoryArea}>
        <View style={styles.category}>
          <Text style={styles.textStyle} onPress={() => submit('飲食')}>
            飲食
          </Text>
        </View>
        <View style={styles.category}>
          <Text style={styles.textStyle} onPress={() => submit('交通油錢')}>
            交通油錢
          </Text>
        </View>
        <View style={styles.category}>
          <Text style={styles.textStyle} onPress={() => submit('日常用品')}>
            日常用品
          </Text>
        </View>
        <View style={styles.category}>
          <Text style={styles.textStyle} onPress={() => submit('娛樂')}>
            娛樂
          </Text>
        </View>
        <View style={styles.category}>
          <Text style={styles.textStyle} onPress={() => submit('居家')}>
            居家
          </Text>
        </View>
        <View style={styles.category}>
          <Text style={styles.textStyle} onPress={() => submit('學習')}>
            學習
          </Text>
        </View>
        <View style={styles.category}>
          <Text style={styles.textStyle} onPress={() => submit('醫療')}>
            醫療
          </Text>
        </View>
        <View style={styles.category}>
          <Text style={styles.textStyle} onPress={() => submit('電話網路')}>
            電話網路
          </Text>
        </View>
        <View style={styles.category}>
          <Text style={styles.textStyle} onPress={() => submit('水電瓦斯')}>
            水電瓦斯
          </Text>
        </View>
        <View style={styles.category}>
          <Text style={styles.textStyle} onPress={() => submit('運動健身')}>
            運動健身
          </Text>
        </View>
        <View style={styles.category}>
          <Text style={styles.textStyle} onPress={() => submit('治裝費')}>
            治裝費
          </Text>
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
    width: '100%',
    textAlign: 'center',
    color: '#FFF9DC',
  },
});

export default AddContent;
