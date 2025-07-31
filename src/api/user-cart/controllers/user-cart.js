'use strict';

/**
 * user-cart controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::user-cart.user-cart');


// 'use strict';

// const { createCoreController } = require('@strapi/strapi').factories;

// module.exports = createCoreController('api::user-cart.user-cart', ({ strapi }) => ({
//   async deleteByUid(ctx) {
//     const { uid } = ctx.params;

//     const result = await strapi.entityService.findMany('api::user-cart.user-cart', {
//       filters: { UId: uid },
//     });

//     if (!result || result.length === 0) {
//       return ctx.notFound(`No cart item found with UId ${uid}`);
//     }

//     const itemId = result[0].id;

//     await strapi.entityService.delete('api::user-cart.user-cart', itemId);

//     return { success: true, message: `Deleted item with UId ${uid}` };
//   },
// }));
