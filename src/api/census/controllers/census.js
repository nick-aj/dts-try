'use strict';

/**
 * census controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::census.census');
