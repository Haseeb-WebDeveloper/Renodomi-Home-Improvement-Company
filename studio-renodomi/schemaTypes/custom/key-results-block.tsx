import {defineType, defineField} from 'sanity'

export const keyResultsBlock = defineType({
  name: 'keyResultsBlock',
  title: 'Key Results',
  type: 'object',
  fields: [
    defineField({
      name: 'items',
      title: 'Bullet Points',
      type: 'array',
      of: [{type: 'string'}],
      validation: (Rule) => Rule.required().min(1),
    }),
  ],
  preview: {
    select: {items: 'items'},
    prepare({items}) {
      const count = (items || []).length || 0
      return {title: `Key Results (${count})`}
    },
  },
})


