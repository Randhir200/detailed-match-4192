import axios from 'axios';

export async function getData(page,limit) {
  let res = await axios.get(`http://localhost:8000/products?_page=${page}&_limit=${limit}`);
  return res.data;
}
