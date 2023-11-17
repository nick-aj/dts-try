'use strict';

// const axios = require('axios');
// const stream = require('stream');
// const { Readable } = stream;

module.exports = {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/*{ strapi }*/) {},

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  async bootstrap({ strapi }) {

    // console.log('BOOTSTRAP!!')

    // // Download the picture
    // const file = await axios({
    //   method: "GET",
    //   url: "https://images.pexels.com/photos/941456/pexels-photo-941456.jpeg?cs=srgb&dl=pexels-henrik-pfitzenmaier-941456.jpg&fm=jpg&w=4422&h=2948&_gl=1*1pxdm9s*_ga*MTIyMDgwOTEyMy4xNjk3MTk5NDA4*_ga_8JE65Q40S6*MTY5NzE5OTQwOC4xLjEuMTY5NzE5OTQxMC4wLjAuMA..",
    //   responseType: "arraybuffer"
    // });

    // // Prepare it for upload
    // const config = strapi.config.get("plugin.upload");
    // const photo = {
    //   name: 'test_pic',
    // };
    // const entity = {
    //   name: `${photo.name}`,
    //   hash: `${photo.name}`,
    //   ext: ".jpg",
    //   mime: file.headers["content-type"],
    //   size: file.headers["content-length"],
    //   provider: config.provider,
    //   tmpWorkingDirectory: "./public/uploads",
    //   getStream: () => Readable.from(file.data),
    //   folderPath: "/",
    // };

    // // Upload it
    // await strapi.plugin("upload").service("upload").uploadImage(entity);
    // const media = await strapi.query("plugin::upload.file").create({ data: entity });
      
    // console.log("Done");
  },
};
