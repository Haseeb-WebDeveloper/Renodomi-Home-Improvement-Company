import {defineType, defineField} from 'sanity'

export const infoBoxesBlock = defineType({
  name: 'infoBoxesBlock',
  title: 'Info Boxes Block',
  type: 'object',
  fields: [
    defineField({
      name: 'items',
      title: 'Info Boxes',
      type: 'array',
      of: [
        defineField({
          type: 'object',
          name: 'infoBox',
          title: 'Info Box',
          fields: [
            defineField({
              name: 'icon',
              title: 'Icon',
              type: 'image',
              options: {hotspot: true},
              description: 'Upload an icon (PNG/SVG). Placed above the text.',
            }),
            defineField({
              name: 'text',
              title: 'Text',
              type: 'string',
            }),
          ],
        }),
      ],
      validation: (Rule) => Rule.required().length(3).error('Exactly 3 info boxes are required'),
    }),
  ],
  preview: {
    select: {items: 'items'},
    prepare({items}) {
      return {
        title: `Info Boxes (${items?.length || 0} items)`,
      }
    },
  },
})


