import {PostImageType} from './todayImage';

export type RootStackParamList = {
  Home: undefined;
  Detail: Partial<PostImageType>;
};
