'use strict';

const axios = require('axios');
const fs = require('fs');
const {file: { bytesToKbytes }} = require('@strapi/utils');
const stream = require('stream');
const { Readable } = stream;
const URL = require('url');

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

    console.log('BOOTSTRAP!!')

    // // Download the file and transform it to a buffer
    // // @ts-ignore
    // const response = await fetch('https://via.placeholder.com/600/92c952');
    // const arrayBuffer = await response.arrayBuffer();
    // const buffer = Buffer.from(arrayBuffer);

    // // Write the buffer to a file and get the file
    // fs.writeFileSync('./temp_file.png', buffer);

    // const config = strapi.config.get("plugin.upload");
    // const fileMeta = {
    //   name: "temp_img.png",
    //   mime: "image/png",
    //   ext: "png",
    //   type: "image/png",
    //   buffer: buffer,
    //   path: "./temp_file.png",
    //   size: Buffer.byteLength(buffer),
    //   provider: config.provider
    // };

    // const uploadedFile = await strapi.plugin('upload').service('upload').uploadImage({
    //   files: fileMeta,
    //   data: {}
    // });

    const config = strapi.config.get("plugin.upload");
    const file = await axios({
      method: "GET",
      url: "https://images.pexels.com/photos/941456/pexels-photo-941456.jpeg?cs=srgb&dl=pexels-henrik-pfitzenmaier-941456.jpg&fm=jpg&w=4422&h=2948&_gl=1*1pxdm9s*_ga*MTIyMDgwOTEyMy4xNjk3MTk5NDA4*_ga_8JE65Q40S6*MTY5NzE5OTQwOC4xLjEuMTY5NzE5OTQxMC4wLjAuMA..",
      responseType: "arraybuffer"
    })

    const photo = {
      name: 'mouth',
    };
    const entity = {
      name: `${photo.name}`,
      hash: `${photo.name}`,
      ext: ".jpg",
      mime: file.headers["content-type"],
      size: file.headers["content-length"],
      provider: config.provider,
      tmpWorkingDirectory: "./public/uploads",
      getStream: () => Readable.from(file.data),
      folderPath: "/",
    };
    await strapi.plugin("upload").service("upload").uploadImage(entity);
    const media = await strapi
      .query("plugin::upload.file")
      .create({ data: entity });
      
    console.log("Done");
  },
};
