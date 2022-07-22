import axios from 'axios';

export async function getData(page, limit) {
  let res = await axios.get(
    `http://localhost:8000/products?_page=${page}&_limit=${limit}&_sort=price&_order=desc`
  );
  return res.data;
}

export async function addToUser(data) {
  let res = await axios({
    url: 'http://localhost:8000/user',
    method: 'POST',
    data: { ...data, cart:[]},
  });
}
