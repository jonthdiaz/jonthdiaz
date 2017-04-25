"use strict"

import rethinkdb from 'rethinkdb'
import db from './db'
import async from 'async'
import config from '../config'
import mcontact from '../schema/contact'

class contact {
  constructor(){
    this.tableName = 'contact';
  }
  getAll(callback){
    async.waterfall([
      db.connect,
      (connection, callback)=>{
        rethinkdb.table(this.tableName).filter({active:'on'}).orderBy('order').run(connection, (error, cursor)=>{
          connection.close()
          if(error) return callback(true, `Error fetching model ${this.tableName}`)
          cursor.toArray((error, result)=>{
            if(error) return callback(true, `error reading cursor  ${this.tableName}` )
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
          if(error) return callback(true, `Error getting register ${this.tableName} ${error.message}`)
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
        if(!id) return callback(true, `The register with id ${id} does not exists table ${this.tableName}`)
        let model = new mcontact(data);
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
        let model = new mcontact(data);
        let valid = model.valid()
        if(valid.success){
          rethinkdb.table(this.tableName).insert(model).run(connection, function(error, result){
            connection.close()
            if(error) return callback(true, `Error happens while adding new proyectos ${this.tableName}`)
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
        if(!id) return callback(true, `The register with id ${id} does not exists on table ${this.tableName}`)
        rethinkdb.table(this.tableName).get(id).delete().run(connection, (error, result)=>{
          connection.close()
          if(error) return callback(true, `Error happens while deleting record ${this.tableName}`)
          callback(null, result)
        })
      }
    ], (error, data)=>{
      callback(error === null ? false: true, data)
    })
  }
}

module.exports = contact
