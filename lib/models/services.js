"use strict"

import rethinkdb from 'rethinkdb'
import db from './db'
import async from 'async'
import config from '../config'


class services{
  static createTable(connection, callback){
    rethinkdb.db(config.db_name).tableCreate('services').run(
      connection, (err, result)=>{
      if(err) console.log("tabla services already created")
      else console.log("created new table services")
      callback(null, connection)
    })
  }
}

module.exports = services
