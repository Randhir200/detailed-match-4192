import axios from 'axios';

// ratings_gte=4&ratings_lte=5&_sort=price&_order=asc

export async function getData(filter='ratings_gte=4&ratings_lte=5',sort='_sort=price&_order=asc') {
  let res = await axios.get(
    `http://localhost:8000/products?${filter}&${sort}`
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
    data,
  });
}
export async function getCartData() {
  let res = await axios({
    url: 'http://localhost:8000/cart',
    method: 'GET',
  });
  return res.data;
}

export async function deleteCartData(id){
  let res = await axios({
    url: `http://localhost:8000/cart/${id}`,
    method: 'DELETE',
  });
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
