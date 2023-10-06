import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

import {countryStateListPlugin} from 'sanity-plugin-country-state-select';
import {codeInput} from '@sanity/code-input'

export default defineConfig({
  name: 'default',
  title: 'piranha-cms',

  projectId: 'h24ih56w',
  dataset: 'production',

  plugins: [deskTool(), visionTool(), countryStateListPlugin(), codeInput()],

  schema: {
    types: schemaTypes,
  },
})
