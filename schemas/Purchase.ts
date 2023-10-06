const Purchase = {
  name: 'purchase',
  type: 'document',
  title: 'Purchase',
  fields: [
    {
      name: 'buyer',
      type: 'reference',
      title: 'Buyer',
      to: [{type: 'user'}]
    }
  ]
}

export default Purchase