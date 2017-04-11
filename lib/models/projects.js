"use strict"

import rethinkdb from 'rethinkdb'
import db from './db'
import async from 'async'
import config from '../config'
import mproyects from '../schema/proyects'

class projects {
  getAllProjects(callback){
    async.waterfall([
      db.connect,
      (connection, callback)=>{
        rethinkdb.table('projects').filter({active:'on'}).run(connection, (error, cursor)=>{
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
  create(data, callback){
    async.waterfall([
      db.connect,
      (connection, callback)=>{
        let model = new mproyects(data);
        let valid = model.valid()
        if(valid.success){
          rethinkdb.table('projects').insert(model).run(connection, function(error, result){
            connection.close()
            if(error) return callback(true, 'Error happens while adding new proyectos')
            callback(null, result)
          })
        }else callback(true, valid.errors)


      }
    ], (error, data)=>{
      callback(error === null ? false: true, data);
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
