'use strict';

/**
 * restaurant router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::restaurant.restaurant', {
    // only: ["find", "findOne"],
    config: {
        findOne: {
            policies: [],
            middlewares: ["api::restaurant.is-owner"]
        },
        update: {
            policies: [],
            middlewares: ["api::restaurant.is-owner"]
        },
        delete: {
            policies: [],
            middlewares: ["api::restaurant.is-owner"]
        }
    }
});
