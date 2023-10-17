'use strict';

/**
 * restaurant controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::restaurant.restaurant', ({ strapi }) => ({
    // Method 1: New Custom Action
    // async exampleAction(ctx) {
    //     try {
    //         ctx.body = 'ok';
    //     } catch (err) {
    //         ctx.body = err;
    //     }
    // },

    // Method 2: Wrapping Existing Core Action
    async find(ctx) {
        // Custom Logic
        ctx.query = { ...ctx.query, local: "en" };

        // Core Action
        const { data, meta } = await super.find(ctx);

        // More Custom Logic
        meta.date = Date.now();

        // Finish
        return { data, meta, test: "Testing." };
    }

    // Method 3: Replacing a Core Action with proper sanitization
    // TBD
}));
