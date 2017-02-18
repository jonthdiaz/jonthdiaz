"use strict";

import rethinkdb from 'rethinkdb'
import async from 'async'
import tables from './tables'
import config from '../config'


let _tables = new tables()

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
    _tables.createTableServices,
    _tables.createTableProjects,
    _tables.createTableUser,
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
  static connect(callback){
    rethinkdb.connect({
      host: config.host,
      port: config.port,
      db: config.db_name
    }, (err, connection)=>{
      if(err) return callback(true,"Error connecting to database")
      callback(null,connection)
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
