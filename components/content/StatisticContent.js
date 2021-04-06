import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {PieChart} from 'react-native-chart-kit';
import {Dimensions} from 'react-native';
import {useSelector} from 'react-redux';

function StatisticContent() {
  //螢幕寬度
  const screenWidth = Dimensions.get('window').width;
  const chartConfig = {
    backgroundGradientFrom: '#1E2923',
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: '#08130D',
    backgroundGradientToOpacity: 0.5,
    color: () => 'rgb(26, 255, 146)',
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false, // optional
  };
  const store = useSelector(store => store.itemsList);
  //計算金額
  const filterCategory = itemCategory => {
    let sum = 0;
    let itemLength = store.filter(item => item.category === itemCategory);
    if (itemLength.length > 1) {
      sum = itemLength.reduce((a, b) => Number(a.price) + Number(b.price));
    } else if (itemLength.length === 1) {
      sum = Number(itemLength[0].price);
    }
    return sum;
  };
  const food = filterCategory('飲食');
  const gas = filterCategory('交通油錢');
  const daily = filterCategory('日常用品');
  const entertainment = filterCategory('娛樂');
  const home = filterCategory('居家');
  const learn = filterCategory('學習');
  const medical = filterCategory('醫療');
  const phone = filterCategory('電話網路');
  const water = filterCategory('水電瓦斯');
  const gym = filterCategory('運動健身');
  const clothes = filterCategory('治裝費');
  const data = [
    {id: 1, name: '飲食', total: food, color: '#0EAD69'},
    {id: 2, name: '交通油錢', total: gas, color: '#F7B296'},
    {id: 3, name: '日常用品', total: daily, color: '#F87D7F'},
    {id: 4, name: '娛樂', total: entertainment, color: '#CE9E5C'},
    {id: 5, name: '居家', total: home, color: '#819A7A'},
    {id: 6, name: '學習', total: learn, color: '#425225'},
    {id: 7, name: '醫療', total: medical, color: '#8B3D20'},
    {id: 8, name: '電話網路', total: phone, color: '#612A23'},
    {id: 9, name: '水電瓦斯', total: water, color: '#227C9D'},
    {id: 10, name: '運動健身', total: gym, color: '#17C3B2'},
    {id: 11, name: '治裝費', total: clothes, color: '#540D6E'},
  ];
  //依照消費金額排序
  const sortData = data.sort((a, b) => b.total - a.total);
  return (
    <View style={styles.container}>
      <PieChart
        data={data}
        width={screenWidth}
        height={300}
        accessor={'total'}
        chartConfig={chartConfig}
        backgroundColor={'transparent'}
        paddingLeft={'20'}
        center={[85, 10]}
        avoidFalseZero={true}
        hasLegend={false}
      />
      <View style={styles.itemsSum}>
        {sortData &&
          sortData.map(item => {
            return (
              <View
                key={item.id}
                style={{
                  width: '22%',
                  backgroundColor: item.color,
                  alignItems: 'center',
                  padding: 10,
                  margin: 3,
                }}>
                <Text style={styles.textStyle}>{item.name}</Text>
                <Text style={styles.textStyle}>${item.total}</Text>
              </View>
            );
          })}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemsSum: {
    width: '90%',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  textStyle: {
    color: '#fff',
    marginBottom: 5,
  },
});

export default StatisticContent;
