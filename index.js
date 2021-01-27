const express = require('express');
const settings = require('./server/settings/settings');
const crons = require('./server/crons/cron');
const dbCron = require('./server/services/db-cron');

// TODO: will add seeding & migration commands to package.json

var app = express();
app.set('port', process.env.PORT || 5000);


settings.port = process.env.PORT || settings.port;

var server = app.listen(settings.port, async (err)=> {
  if (!err){
      await dbCron.connect();
      await crons.start();
    console.log('listening on port ' + server.address().port);  
  } 
  else console.log(err);
});
