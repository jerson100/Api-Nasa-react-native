import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from 'src/types/router';
import Header from 'components/common/Header';

const Detail = () => {
  //get params of navigation state
  const data =
    useRoute<NativeStackScreenProps<RootStackParamList, 'Detail'>['route']>();
  console.log(data.params);
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <Image source={{uri: data.params.url}} style={styles.image} />
        <Text style={styles.title}>{data.params.title}</Text>
        <Text style={styles.date}>{data.params.date}</Text>
        <ScrollView style={styles.explanationContainer}>
          <Text style={styles.explanationText}>{data.params.explanation}</Text>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    flex: 1,
    backgroundColor: 'rgba(7,26,93,255)',
  },
  content: {
    backgroundColor: '#2c449d',
    borderRadius: 32,
    marginVertical: 24,
    padding: 16,
    flex: 1,
  },
  image: {
    width: '100%',
    height: '50%',
    borderColor: '#FFF',
    borderRadius: 32,
    borderWidth: 2,
    marginBottom: 16,
  },
  title: {
    color: '#ffff',
    fontWeight: 'bold',
    fontSize: 22,
    marginBottom: 16,
  },
  date: {
    color: '#ffff',
    fontSize: 16,
  },
  explanationContainer: {
    marginVertical: 16,
    flex: 1,
  },
  explanationText: {
    color: '#ffff',
    fontSize: 16,
  },
});

export default Detail;
