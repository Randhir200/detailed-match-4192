import axios from 'axios';

export async function getData() {
  let res = await axios.get('http://localhost:8000/products');
  return res.data;
}
