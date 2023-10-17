'use strict';

/**
 * `isOwner` middleware
 */

module.exports = (config, { strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {

    // Setup
    const user = ctx.state.user;
    const entryId = ctx.params.id ? ctx.params.id : undefined;
    let entry = {};

    // If either no user is found, cannot be assesed whether or not it is the content's author
    if (!user) {
      return ctx.unauthorized("No user found, only the author of this content may perform this operation.")
    }

    // Fetch the entry if an entryId was provided
    if (entryId) {
      entry = await strapi.entityService.findOne(
        "api::restaurant.restaurant",
        entryId,
        { populate: "*" }
      );
    }
    
    // Check that the user id is the same as the id from the content's author
    if (entryId && user.id !== entry.usr.id) {
      return ctx.unauthorized("Unauthorized action, only the author of this content may perform this operation.")
    } else {
      return next();
    }
  };
};
