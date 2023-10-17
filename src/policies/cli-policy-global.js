'use strict';

/**
 * `cli-policy-global` policy
 */

module.exports = (policyContext, config, { strapi }) => {
    // Add your own logic here.
    strapi.log.info('In cli-policy-global policy.');

    const canDoSomething = true;

    if (canDoSomething) {
      return true;
    }

    return false;
};
