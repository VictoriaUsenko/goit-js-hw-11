export function getPictures(searchStr) {
  const BASE_URL = 'https://pixabay.com/api/';
  const API_KEY = '43977888-797e6fb137e01a7a14a4faad2';

  const searchParams = new URLSearchParams({
    key: API_KEY,
    q: searchStr.replace(/\s+/g, '+'),
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  return fetch(`${BASE_URL}?${searchParams}`).then(response => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json();
  });
}
