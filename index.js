'use strict';

module.exports = function (app, prefix) {
  app.post(prefix, require('./lib/routes/create'));
  app.get(prefix, require('./lib/routes/read'));
  app.put(prefix, require('./lib/routes/update'));
  app.delete(prefix, require('./lib/routes/delete'));
};
