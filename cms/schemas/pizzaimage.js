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
            name: 'madefor',
            title: 'Made For',
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
            of: [
                {
                    type: 'reference',
                    to: [{ type: 'ingredients' }]
                }
            ],
        },
        {
            name: 'event',
            title: 'Event',
            type: 'reference',
            to: [{ type: 'event' }]
        },
    ],
}
