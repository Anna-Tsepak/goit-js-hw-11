import axios from 'axios';
import Notiflix from 'notiflix';

export const itemPerPage = 40;

const API_KEY = '30123371-8b3daf4c73393ab79b744939e';
const searchParams = new URLSearchParams({
  key: API_KEY,
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: 'true',
  per_page: itemPerPage,
});

export const BASE_URL = `https://pixabay.com/api/?${searchParams}`;

export async function getPhoto(search, page) {
  try {
    if (!search.trim()) {
      Notiflix.Notify.failure('Please fill in the search field');
      return;
    }
    const response = await axios.get(`${BASE_URL}&page=${page}&q=${search}`);
    return response.data;
  } catch (error) {
    Notiflix.Notify.failure(error.message);
  }
}
