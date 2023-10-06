const Product = {
  name: 'product',
  type: 'document',
  title: 'Product',

  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
    },
    {
      name: 'creator',
      type: 'reference',
      title: 'Creator',
      to: [{type: 'creator'}]
    }
  ],
}

export default Product;