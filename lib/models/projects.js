"use strict"

import rethinkdb from 'rethinkdb'
import db from './db'
import async from 'async'
import config from '../config'

class projects{
  fixture(callback){
    async.waterfall([
    db.connect,
    (connection, callback)=>{
      rethinkdb.table('projects').insert({
        "name": 'tutorya'
      }).run(connection, (err, result)=>{
        connection.close()
        if (err) return callback(true, "error happens while adding new polls")
        callback(null, result)
      })
    }
  ], (err,data)=>{
    callback(err === null ? false : true, data);
  })
  }

}

module.exports = projects
