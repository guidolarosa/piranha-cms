const Subscription = {
  name: 'subscription',
  type: 'document',
  title: 'Subscription',
  fields: [
    {
      name: 'startDate',
      type: 'date',
      title: 'Start Date',
    },
    {
      name: 'endDate',
      type: 'date',
      title: 'End Date'
    },
    {
      name: 'active',
      type: 'boolean',
      title: 'Active'
    }
  ],
}

export default Subscription
