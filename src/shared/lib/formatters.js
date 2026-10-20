export const formatPrice = (value) => {
  if (value === null || value === undefined || value === '') {
    return '—';
  }

  return `${Number(value).toLocaleString('ru-RU')} ₽`;
};

export const getStock = (offer) => {
  if (offer.count !== null && offer.count !== undefined) {
    return offer.count;
  }

  if (offer.stock !== null && offer.stock !== undefined) {
    return offer.stock;
  }

  return offer.warehouses?.reduce(
    (total, warehouse) => total + (Number(warehouse.stock) || 0),
    0,
  ) ?? 0;
};
