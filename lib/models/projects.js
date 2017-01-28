"use strict"

import rethinkdb from 'rethinkdb'
import db from './db'
import async from 'async'
import config from '../config'


class projects{
  static createTable(connection, callback){
    rethinkdb.db(config.db_name).tableCreate('projects').run(
      connection, (err, result)=>{
      connection.close()
      if(err) console.log("tabla projects already created")
      else console.log("created new table projects")
      callback(null, connection)
    })
  }
}

module.exports = projects
