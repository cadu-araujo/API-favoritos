const fs = require('fs')
const path = require('path')
const jsonServer = require('json-server')


const tmpDb = '/tmp/db.json'
if (!fs.existsSync(tmpDb)) {
  fs.copyFileSync(path.join(__dirname, 'db.json'), tmpDb)
}

const server = jsonServer.create()
const router = jsonServer.router(tmpDb)

server.use(jsonServer.defaults()) // já libera CORS
server.use(router)

module.exports = server