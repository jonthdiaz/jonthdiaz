"use strict"

import rethinkdb from 'rethinkdb'
import db from './db'
import async from 'async'
import config from '../config'
import mproyects from '../schema/proyects'

class projects {
  constructor(){
    this.tableName = 'projects';
  }
  getAllProjects(callback){
    async.waterfall([
      db.connect,
      (connection, callback)=>{
        rethinkdb.table(this.tableName).filter({active:'on'}).orderBy('order').run(connection, (error, cursor)=>{
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
  getById(id, callback){
    async.waterfall([
      db.connect,
      (connection, callback)=>{
        rethinkdb.table(this.tableName).get(id).run(connection, (error, result)=>{
          if(error) return callback(true, `Error getting register ${error.message}`)
          callback(null, result)
        })
      }
    ], (error,data)=>{
      callback(error === null ? false : true, data)
    })
  }
  update(id, data, callback){
    async.waterfall([
      db.connect,
      (connection, callback)=>{
        if(!id) return callback(true, `The register with id ${id} does not exists`)

        let model = new mproyects(data);
        let valid = model.valid()
        if (valid.success){
          rethinkdb.table(this.tableName).get(id).update(model).run(connection,
            (error, result)=>{
              if(error) return callback(true, `Error updating register ${error.message}`)
              callback(null, result)
            })
        }else callback(true, valid.errors)
      }
    ], (error,data)=>{
      callback(error === null ? false : true, data)
    })
  }
  create(data, callback){
    async.waterfall([
      db.connect,
      (connection, callback)=>{
        let model = new mproyects(data);
        let valid = model.valid()
        if(valid.success){
          rethinkdb.table(this.tableName).insert(model).run(connection, function(error, result){
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
  delete(id, callback){
    async.waterfall([
      db.connect,
      (connection, callback)=>{
        if(!id) return callback(true, `The register with id ${id} does not exists`)
        rethinkdb.table(this.tableName).get(id).delete().run(connection, (error, result)=>{
          connection.close()
          if(error) return callback(true, 'Error happens while deleting record')
          callback(null, result)
        })
      }
    ], (error, data)=>{
      callback(error === null ? false: true, data)
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
