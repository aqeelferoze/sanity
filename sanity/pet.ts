// sanity/pet.ts
export default {
    name: 'pet',
    type: 'document',
    title: 'Pet',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Name'
        },
        {
            name: 'Age',
            type: 'number',
            title: 'Age of the animal'
        },
        {
            name: 'pictre',
            type: 'image',
            title: 'Upload Picture of Animal'
        },
        {
            name: 'Purchase_Date',
            type: 'date',
            title: 'Date of Purchase'
        },
                {
            name: 'Animal_Type',
            title: 'Type',
            type: 'string',
             // Use your custom input component here
            options: {
              list: [
                { title: 'Herbi', value: 'Hebivorous' },
                { title: 'Carni', value: 'carnivorous' },
                // Add more options as needed
              ],
            },
          },
    ]
}