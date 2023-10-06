const Creator = {
  name: 'creator',
  type: 'document',
  title: 'Creator',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name'
    },
    {
      name: 'instagram',
      type: 'string',
      title: 'Instagram'
    },
    {
      name: 'bio',
      type: 'array',
      title: 'Bio',
      of: [{type: 'block'}]
    },
  ]
}

export default Creator;