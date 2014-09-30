'use strict';

module.exports = function (app, prefix) {
  app.post(prefix + '/:model',       require('./lib/routes/create'));
  app.get(prefix + '/:model/:id?',   require('./lib/routes/read'));
  app.put(prefix + '/:model/:id',    require('./lib/routes/update'));
  app.delete(prefix + '/:model/:id', require('./lib/routes/delete'));
};
