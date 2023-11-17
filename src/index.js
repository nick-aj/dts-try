'use strict';

const fetch = require('node-fetch');
const fs = require('fs');
const {file: { bytesToKbytes }} = require('@strapi/utils');
const stream = require('stream');
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

    // Download the file and transform it to a buffer
    // @ts-ignore
    const response = await fetch('https://via.placeholder.com/600/92c952');
    const arrayBuffer = await response.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // Write the buffer to a file and get the file
    fs.writeFileSync('./temp_file.png', buffer);

    const fileMeta = {
      name: "temp_img.png",
      mime: "image/png",
      ext: "png",
      type: "image/png",
      buffer: buffer,
      path: "./temp_file.png",
      size: Buffer.byteLength(buffer),
    };

    const uploadedFile = await strapi.plugin('upload').service('upload').upload({
      files: fileMeta,
      data: {}
    });
  },
};
