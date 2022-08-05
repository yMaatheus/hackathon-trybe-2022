import axios from 'axios';

const URL_PRODUCTS = 'https://wine-back-test.herokuapp.com/products';
const URL_PLANS = 'https://wine-club-proxy.herokuapp.com/modalities';

export const getProducts = async () => {
  const { data } = await axios.get(URL_PRODUCTS);

  return data;
};

export const getPlans = async () => {
  const {
    data: [data],
  } = await axios.get(URL_PLANS);

  delete data.banner;
  delete data.product;

  return data;
};
