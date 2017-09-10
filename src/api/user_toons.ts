

// import {readFileSync} from 'fs';
// readFileSync('./user_toons.json')

const json = require('./users_toons.json')

export function getGuildUsers(guild:string): Promise<any>{

  return Promise.resolve(json);
}
