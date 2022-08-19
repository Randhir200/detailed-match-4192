import axios from 'axios';

// ratings_gte=4&ratings_lte=5&_sort=price&_order=asc

export async function getData(filter='ratings_gte=4&ratings_lte=5',sort='_sort=price&_order=asc') {
  let res = await axios.get(
    `https://dot-n-key-server.herokuapp.com/products?${filter}&${sort}`
  );
  return res.data;
}

export async function postCartData(data) {
  axios({
    url: 'https://dot-n-key-server.herokuapp.com/cart',
    method: 'POST',
    data,
  });
}
export async function patchCartData(data, id) {
  axios({
    url: `https://dot-n-key-server.herokuapp.com/cart/${id}`,
    method: 'PATCH',
    data,
  });
}
export async function getCartData() {
  let res = await axios({
    url: 'https://dot-n-key-server.herokuapp.com/cart',
    method: 'GET',
  });
  return res.data;
}

export async function deleteCartData(id){
  let res = await axios({
    url: `https://dot-n-key-server.herokuapp.com/cart/${id}`,
    method: 'DELETE',
  });
}
export async function postUsersData(data) {
  axios({
    url: 'https://dot-n-key-server.herokuapp.com/users',
    method: 'POST',
    data,
  });
}
export async function getUsersData() {
  let res = await axios({
    url: 'https://dot-n-key-server.herokuapp.com/users',
  });
  return res.data;
}
export async function postSigninData(data) {
  axios({
    url: 'https://dot-n-key-server.herokuapp.com/signinData',
    method: 'POST',
    data,
  });
}
