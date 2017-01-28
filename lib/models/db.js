"use strict";

import rethinkdb from 'rethinkdb'
import async from 'async'
import services from './services.js'
import projects from './projects'
import config from '../config'

class db{
  setupDb(){
    let self = this;
    async.waterfall([
      callback =>{
        self.connectToRethinkDbServer((err, connection)=>{
          if(err){
            return callback(true, "Error in connection Rethinkdb")
          }
          callback(null, connection)
        })
      },
    (connection, callback)=>{
      rethinkdb.dbCreate(config.db_name).run(connection, (err, result)=>{
        if(err) console.log("Database already created")
        else console.log("Created new database")
        callback(null, connection)
      })
    },
    services.createTable,
    projects.createTable,
  ], (err, data)=>{
    console.log("connection done")
  })
  }

  connectToRethinkDbServer(callback){
    rethinkdb.connect({
      host: config.host,
      port: config.port,
      db: config.db_name
    }, (err, connection)=>{
      callback(err, connection)
    })
  }

  connectToDb(callback){
    rethinkdb.connect({
      host: config.host,
      port: config.port,
      db: config.db_name
    }, (err, connection)=>{
      callback(err, connection)
    })
  }
}

module.exports = db
