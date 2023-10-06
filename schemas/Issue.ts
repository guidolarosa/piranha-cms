const Issue = {
  name: 'issue',
  type: 'document',
  title: 'Issue',
  fields: [
    {
      name: 'number',
      type: 'number',
      title: 'Number'
    },
    {
      name: 'name',
      type: 'string',
      title: 'Name'
    },
    {
      name: 'date',
      type: 'date',
      title: 'Date',
      dateFormat: 'M Y'
    },
  ]
}

export default Issue;