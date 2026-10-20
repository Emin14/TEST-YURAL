import { API_CONFIG } from '../config/api';
import { getApiErrorMessage } from './errors';

const createRequestUrl = (params) => {
  const url = new URL(API_CONFIG.baseUrl);
  const query = { key: API_CONFIG.key, ...params };

  Object.entries(query).forEach(([name, value]) => {
    if (value !== undefined && value !== '') {
      url.searchParams.set(name, value);
    }
  });

  return url;
};

const request = async (params) => {
  let response;
  let payload;

  try {
    response = await fetch(createRequestUrl(params));
    payload = await response.json();
  } catch {
    throw new Error('Не удалось связаться с сервисом. Проверьте интернет-соединение.');
  }

  if (!response.ok || payload?.error) {
    throw new Error(getApiErrorMessage(payload?.error, response.status));
  }

  return payload;
};

const asList = (value) => (Array.isArray(value) ? value : value ? [value] : []);

export const catalogApi = {
  async findBrands(number) {
    const payload = await request({ number });
    const goods = asList(payload?.goods || payload);

    return [
      ...new Map(
        goods
          .filter((item) => item.brand)
          .map((item) => [item.brand, item]),
      ).values(),
    ];
  },

  async findOffers(number, brand) {
    const payload = await request({ number, brand, analogues: 'on' });
    return asList(payload?.goods || payload);
  },
};
