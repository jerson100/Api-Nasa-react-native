import React, {FC} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {PostImageType} from 'src/types/todayImage';
import PostImage from '../PostImage';

interface LastFiveDayImagesProps {
  postImages?: PostImageType[];
}

const LastFiveDayImages: FC<LastFiveDayImagesProps> = ({postImages}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Las 5 Days</Text>
      <ScrollView
        style={styles.content}
        contentContainerStyle={{
          rowGap: 10,
        }}>
        {postImages?.map((item: PostImageType) => (
          <PostImage key={item.title} {...item} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 18,
  },
  content: {
    paddingHorizontal: 24,
  },
});

export default LastFiveDayImages;
