"use strict"

import rethinkdb from 'rethinkdb'
import db from './db'
import async from 'async'
import config from '../config'


class tables{
  createTableServices(connection, callback){
    rethinkdb.db(config.db_name).tableCreate('services').run(
      connection, (err, result)=>{
      if(err) console.log("tabla services already created")
      else console.log("created new table services")
      callback(null, connection)
    })
  }
  createTableProjects(connection, callback){
    rethinkdb.db(config.db_name).tableCreate('projects').run(
      connection, (err, result)=>{
      if(err) console.log("tabla projects already created")
      else console.log("created new table projects")
      callback(null, connection)
    })
  }
  createTableUser(connection, callback){
    rethinkdb.db(config.db_name).tableCreate('users').run(
      connection, (err, result)=>{
      if(err) console.log("tabla users already created")
      else console.log("created new table users")
      callback(null, connection)
    })
  }
  createTableProfile(connection, callback){
    rethinkdb.db(config.db_name).tableCreate('profile').run(
      connection, (err, result)=>{
      if(err) console.log("tabla profile already created")
      else console.log("created new table profile")
      callback(null, connection)
    })
  }
}

module.exports = tables
