'use strict';
const tunesJSON = require('./tunes.json');
const Koa = require('koa');
const app = new Koa();

app.use(ctx => {
  ctx.body = tunesJSON
});

app.listen(3002);
