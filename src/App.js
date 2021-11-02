import React from 'react';
import {
  Text,
  SafeAreaView,
  TextInput,
  FlatList,
  StyleSheet,
  View
} from 'react-native';
import styles from './components/Main/Main.style';
import productList from './productList.json';
import Card from './components/Card/Card';

function App() {
  const renderCard = ({item}) => <Card product={item} />;

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.mainTitle}>PATIKASTORE</Text>
      <TextInput style={styles.searchInput} placeholder="Search..."></TextInput>
      <View>
        <FlatList data={productList} renderItem={renderCard} numColumns={2} contentContainerStyle={{ paddingBottom: 120 }}/>
      </View>
    </SafeAreaView>
  );
}

export default App;
