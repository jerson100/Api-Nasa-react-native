import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {FC} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {RootStackParamList} from 'src/types/router';
import {PostImageType} from 'src/types/todayImage';
import {useNavigation} from '@react-navigation/native';

type PostImageNavigationProps = NativeStackNavigationProp<
  RootStackParamList,
  'Detail'
>;

const PostImage: FC<Partial<PostImageType>> = ({
  title,
  date,
  url,
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
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.date}>{date}</Text>
      <View style={styles.buttonContainer}>
        <Button title="View" onPress={handlePress} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 3,
    borderColor: 'rgba(18, 39, 113, 255)',
    borderRadius: 20,
    padding: 16,
    gap: 8,
  },
  title: {
    color: '#ffff',
    fontWeight: 'bold',
    fontSize: 18,
  },
  date: {
    color: '#ffff',
    fontSize: 16,
  },
  buttonContainer: {
    alignItems: 'flex-end',
  },
});

export default PostImage;
