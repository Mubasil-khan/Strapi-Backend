'use strict';

/**
 * user-cart router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::user-cart.user-cart');

// 'use strict';

// const defaultRoutes = require('custom-user-cart');

// module.exports = {
//   routes: [
//     ...defaultRoutes.routes,
//     // core routes will be injected automatically by Strapi
//   ],
// };
