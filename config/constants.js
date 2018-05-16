module.exports = {
  SECRET_KEY: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9',
  DB_USER: 'db_user_icq',
  DB_PASSWORD: '6n1qnwj6',
  DB_COLLECTION: 'heroku_6n1qnwj6',
  DB_SERVER_URL: function() {
    return 'mongodb://' + this.DB_USER + ':' + this.DB_PASSWORD + '@ds119150.mlab.com:19150/' + this.DB_COLLECTION
  }
}