export default {
    name: 'comment',
    title: 'Comment',
    type: 'document',
    fields: [
      {
        name: 'postedBy',
        title: 'PostedBy',
        type: 'reference', // Directly use the reference type
        to: [{type: 'user'}], // Reference the 'user' schema
      },
      {
        name: 'comment',
        title: 'Comment',
        type: 'string',
      },
    ],
  }
  