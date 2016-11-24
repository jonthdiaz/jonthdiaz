const thinky = require('thinky')();
const r = thinky.r;
import config from '../config'

export default class db {
  constructor(){
  }
  static create(connection, callback): any{
    r.dbList().contains(config.rethinkdb['db']).do(containsDb=>{
      return r.branch(containsDb, {created:0}, r.created(config.rethinkdb['db']));
    }).run(connection, err=>{
      callback(err, connection)
    })
  }
}
