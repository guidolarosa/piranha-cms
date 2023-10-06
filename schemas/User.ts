import {countries} from './../src/countries/countries'
import {Rule, defineField} from 'sanity'

const User = {
  name: 'user',
  type: 'document',
  title: 'User',

  fields: [
    {
      name: 'username',
      type: 'slug',
      title: 'Username',
      
    },
    {
      title: 'Image',
      name: 'image',
      type: 'image',
    },
    {
      name: 'name',
      type: 'slug',
      title: 'Name',
    },
    {
      name: 'lastName',
      type: 'slug',
      title: 'Last Name',
    },
    {
      name: 'birthDate',
      type: 'date',
      title: 'Birth Date',
    },
    {
      name: 'email',
      type: 'string',
      title: 'E-mail',
      validation: (Rule: Rule) => Rule.required().email(),
    },
    {
      title: 'Country',
      name: 'country',
      type: 'string',
      initialValue: 'ar',
      options: {
        list: countries
      },
    },
    {
      title: 'State / Province',
      name: 'state',
      type: 'string',
      hidden: ({document} : any) => !document?.country
    },
    {
      title: 'Address',
      name: 'address',
      type: 'string',
    },
    {
      title: 'Postal/Zip Code',
      name: 'postalCode',
      type: 'string'
    },
    {
      title: 'Phone',
      name: 'phone',
      type: 'string',
    },
    {
      title: 'Preferred Delivery Type',
      name: 'preferredDeliveryType',
      type: 'string',
      initialValue: 'mail',
      options: {
        list: [
          {"title": "Pick Up", "value": "pickup"},
          {"title": "Mail", "value": "mail"},
        ]
      }
    },
    {
      title: 'Subscription',
      name: 'subscription',
      type: 'reference',
      to: [{type: 'subscription'}]
    },
    {
      title: 'Verified',
      name: 'verified',
      type: 'boolean',
      initialValue: false
    },
  ],
}

export default User
