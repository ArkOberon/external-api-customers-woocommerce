/* eslint-disable no-undef */
import pkg from '@woocommerce/woocommerce-rest-api';
const WooCommerceRestApi = pkg.default;
/* import { V3 } from 'paseto'; */
import * as dotenv from 'dotenv';
dotenv.config();

export const doGetCustomer = async (id) => {
  const api = new WooCommerceRestApi({
    url: process.env.URL_HOST,
    consumerKey: process.env.WOO_CONSUMER_KEY_DEV,
    consumerSecret: process.env.WOO_CONSUMER_SECRET_DEV,
    version: 'wc/v3',
  });

  const response = await api.get(`customers/${id}`);

  const data = {
    email: response.data.email,
    username: response.data.username,
    first_name_f: response.data.billing.first_name,
    last_name_f: response.data.billing.last_name,
    company_f: response.data.billing.company,
    address_1_f: response.data.billing.address_1,
    /* address_2_f: response.data.billing.addres_2, */
    city_f: response.data.billing.city,
    postcode_f: response.data.billing.city,
    country_f: response.data.billing.country,
    state_f: response.data.billing.state,
    phone_f: response.data.billing.phone,
    first_name_e: response.data.shipping.first_name,
    last_name_e: response.data.shipping.last_name,
    company_e: response.data.shipping.company,
    address_1_e: response.data.shipping.address_1,
    /* address_2_e: response.data.shipping.addres_2, */
    city_e: response.data.shipping.city,
    postcode_e: response.data.shipping.postcode,
    country_e: response.data.shipping.country,
    state_e: response.data.shipping.state,
    phone_e: response.data.shipping.phone,
  };

  return data;
};
