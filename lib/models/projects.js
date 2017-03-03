"use strict"

import rethinkdb from 'rethinkdb'
import db from './db'
import async from 'async'
import config from '../config'

class projects {
  getAllProjects(callback){
    async.waterfall([
      db.connect,
      (connection, callback)=>{
        rethinkdb.table('projects').run(connection, (error, cursor)=>{
          connection.close()
          if(error) return callback(true, 'Error fetching proyects')
          cursor.toArray((error, result)=>{
            if(error) return callback(true, "error reading cursor")
            callback(null, result)
          })
        })
      }
    ], (error, data)=>{
      callback(error === null ? false : true, data);
    })
  }
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
