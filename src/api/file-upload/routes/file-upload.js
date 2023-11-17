module.exports = {
  routes: [
    {
     method: 'GET',
     path: '/file-upload',
     handler: 'file-upload.exampleAction',
     config: {
       policies: [],
       middlewares: [],
     },
    },
  ],
};
