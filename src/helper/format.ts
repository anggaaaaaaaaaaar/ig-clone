const numberFormat = (value = 0) =>
  new Intl.NumberFormat('id-ID', {
    currency: 'IDR',
  }).format(Number(value));

export default { numberFormat };
