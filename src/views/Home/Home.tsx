import {StyleSheet, View} from 'react-native';
import Header from 'components/common/Header';
import {useEffect, useState} from 'react';
import fetch from 'src/utils/fetch';
import {PostImageType} from 'src/types/todayImage';
import TodayImage from 'components/common/TodayImage';
import {format, sub} from 'date-fns';
import LastFiveDayImages from 'components/common/LastFiveDayImages';

const Home = () => {
  const [todayImage, setTodayImage] = useState<PostImageType | undefined>();
  const [fiveDaysImage, setFiveDaysImage] = useState<
    PostImageType[] | undefined
  >([]);
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    const get_today_image = async () => {
      const response = await fetch();
      return response as PostImageType;
    };

    const get_five_days_image = async () => {
      const date = new Date();
      const todayDate = format(date, 'yyyy-MM-dd');
      const fiveDaysAndUpdate = format(sub(date, {days: 5}), 'yyyy-MM-dd');
      const response = await fetch(
        `&start_date=${fiveDaysAndUpdate}&end_date=${todayDate}`,
      );
      return response as PostImageType[];
    };

    const get_all = async () => {
      try {
        setLoading(true);
        const [todayImage, five_days_image] = await Promise.all([
          get_today_image(),
          get_five_days_image(),
        ]);
        setTodayImage(todayImage);
        setFiveDaysImage(five_days_image);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    get_all();
  }, [fetch]);
  return (
    <View style={styles.container}>
      <Header />
      <TodayImage
        isLoading={loading}
        url={todayImage?.url}
        title={todayImage?.title}
        date={todayImage?.date}
        explanation={todayImage?.explanation}
      />
      <LastFiveDayImages postImages={fiveDaysImage} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    flex: 1,
    backgroundColor: 'rgba(7,26,93,255)',
  },
});

export default Home;
