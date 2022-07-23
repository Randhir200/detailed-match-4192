import axios from 'axios';

export async function getData(page, limit) {
  let res = await axios.get(
    `http://localhost:8000/products?_page=${page}&_limit=${limit}`
  );
  return res.data;
}

export async function postCartData(data) {
  axios({
    url: 'http://localhost:8000/cart',
    method: 'POST',
    data,
  });
}
export async function patchCartData(data, id) {
  axios({
    url: `http://localhost:8000/cart/${id}`,
    method: 'PATCH',
    data: { qwt: data },
  });
}
export async function getCartData() {
  let res = await axios({
    url: 'http://localhost:8000/cart',
    method: 'GET',
  });
  return res.data;
}
export async function postUsersData(data) {
  axios({
    url: 'http://localhost:8000/users',
    method: 'POST',
    data,
  });
}
export async function getUsersData() {
  let res = await axios({
    url: 'http://localhost:8000/users',
  });
  return res.data;
}
export async function postSigninData(data) {
  axios({
    url: 'http://localhost:8000/signinData',
    method: 'POST',
    data,
  });
}
