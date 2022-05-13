const DEV = (process.argv[2] !== 'dev' || process.argv[2] === undefined) ? false : true

var ormconfig = {
   "name": "default",
   "type": "postgres",
   "url": process.env.DATABASE_URL,
   "migrationsRun": true,
   "synchronize": true,
   "logging": false,
   "entities": [
      `${(DEV) ? "src/core/**/*.entity.ts" : "build/core/**/*.entity.js"}`
   ],
   "migrations": [
      `${(DEV) ? "src/database/migration/**/*.ts" : "build/database/migration/**/*.js"}`
   ],
   "subscribers": [
      `${(DEV) ? "src/database/subscriber/**/*.ts" : "build/database/subscriber/**/*.js"}`
   ],
   "cli": {
      "migrationsDir": "src/database/migrations"
   },
   "ssl": true,
   "extra": { "ssl": { "rejectUnauthorized": false } }
}

module.exports = ormconfig