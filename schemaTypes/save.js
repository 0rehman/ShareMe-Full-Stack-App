export default {
    name: 'save',
    title: 'Save',
    type: 'document',
    fields: [
      {
        name: 'postedBy',
        title: 'PostedBy',
        type: 'reference', // Directly use the reference type
        to: [{type: 'user'}], // Reference the 'user' schema
      },
      {
        name: 'userId',
        title: 'UserId',
        type: 'string',
      },
    ],
  }
  