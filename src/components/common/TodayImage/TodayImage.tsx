import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {FC} from 'react';
import {Button, Image, StyleSheet, Text, View} from 'react-native';
import {RootStackParamList} from 'src/types/router';
import {PostImageType} from 'src/types/todayImage';

type PostImageNavigationProps = NativeStackNavigationProp<
  RootStackParamList,
  'Detail'
>;

const TodayImage: FC<Partial<PostImageType> & {isLoading: boolean}> = ({
  url,
  title,
  date,
  explanation,
}) => {
  const {navigate} = useNavigation<PostImageNavigationProps>();
  const handlePress = () => {
    navigate('Detail', {
      url,
      title,
      date,
      explanation,
    });
  };
  return (
    <View style={[styles.container, styles.rounded]}>
      <Image
        source={{
          uri: url,
        }}
        style={[styles.image, styles.rounded]}
      />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.date}>{date}</Text>
      <View style={styles.buttonContainer}>
        <Button title="View" onPress={handlePress} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rounded: {
    borderRadius: 32,
  },
  container: {
    padding: 16,
    backgroundColor: '#2c449d',
    // width: '80%',
    gap: 12,
    marginHorizontal: 24,
    marginVertical: 16,
  },
  image: {
    width: '100%',
    height: 190,
    borderRadius: 100,
    objectFit: 'cover',
    borderWidth: 2,
    borderColor: 'white',
  },
  title: {
    color: 'white',
    textAlign: 'left',
    fontWeight: 'bold',
    fontSize: 20,
  },
  date: {
    color: 'white',
    textAlign: 'left',
    fontSize: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
});

export default TodayImage;
