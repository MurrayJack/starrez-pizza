export default {
    name: 'images',
    title: 'Images',
    type: 'document',
    fields: [
        {
            name: 'description',
            title: 'Description',
            type: 'string'
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image'
        },
        {
            name: 'ingredients',
            title: 'Ingredients',
            type: 'array',
            of: [{type: 'string'}],
            options: {
                list: [
                  {title: 'Mushrooms', value: 'mushrooms'},
                  {title: 'Red Peppers', value: 'redpeppers'},
                  {title: 'Green Peppers', value: 'greenpepers'},
                  {title: 'Shaved Ham', value: 'shavedham'},
                  {title: 'Basil', value: 'basil'},
                  {title: 'Ricotta', value: 'ricotta'},
                  {title: 'Tomato', value: 'tomato'},
                ]
              }
        },
    ],
}
