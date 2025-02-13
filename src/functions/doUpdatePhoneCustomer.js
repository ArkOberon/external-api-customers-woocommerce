/* eslint-disable no-undef */
import pkg from '@woocommerce/woocommerce-rest-api';
const WooCommerceRestApi = pkg.default;
import { V3 } from 'paseto';
import * as dotenv from 'dotenv';
dotenv.config();

export const doUpdatePhoneCustomer = async (id, phone) => {
  const api = new WooCommerceRestApi({
    url: process.env.URL_HOST,
    consumerKey: process.env.WOO_CONSUMER_KEY_DEV,
    consumerSecret: process.env.WOO_CONSUMER_SECRET_DEV,
    version: 'wc/v3',
  });

  const dataUser = {
    shipping: {
      phone: phone,
    },
  };

  api.put(`customers/${id}`, dataUser);

  // eslint-disable-next-line no-undef
  const secretKey = process.env.SECRET_KEY;
  // eslint-disable-next-line no-undef
  const url = process.env.DEV_URL;

  const payload = {
    success: 'success',
  };

  const token = await V3.sign(payload, secretKey, {
    audience: 'urn:hermenautas:client',
    issuer: url,
    expiresIn: '2 hours',
  });

  const data = {
    token,
  };

  return data;
};
