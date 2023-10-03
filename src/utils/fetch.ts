import {API_URL, API_KEY} from 'src/config/keys';

export default async (urlParams?: string) => {
  try {
    const response = await fetch(
      `${API_URL}?api_key=${API_KEY}${urlParams?.length ? urlParams : ''}`,
    );
    const data = await response.json();
    return Promise.resolve(data);
  } catch (err) {
    return Promise.reject(err);
  }
};
