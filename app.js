#!/usr/bin/env node

const http = require('http');

const { cfg } = require('./_config.js');

const mapText = Object.keys(cfg)
    .map(key => key+': '+cfg[key])
    .join(`\n`);

const serve = (ip, port) => {

  http.createServer( (req, res) => {
      res.writeHead(200, {'Content-type': 'text/plain'});
      res.write(app.contentBody);
      res.end();
    })
    .listen(port, ip);

  console.log('Serving from: http://'+cfg.APP_IP+':'+cfg.APP_PORT);
}

const app = {
  contentBody: `${mapText}\n\n${cfg.APP_NAME} is ready!`,
  serve
}

app.serve(cfg.APP_IP, cfg.APP_PORT);
