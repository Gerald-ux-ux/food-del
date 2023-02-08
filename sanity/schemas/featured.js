export default {
  name: 'featured',
  title: 'Featured Menu Category',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name of dish',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'short_description',
      title: 'Short description',
      type: 'string',
      validation: (Rule) => Rule.max(200),
    },
    {
      name: 'restautants',
      title: 'Restaurants',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'restuarant'}]}],
    },
  ],
}
