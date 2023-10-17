'use strict';

/**
 * census service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::census.census');
