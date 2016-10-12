'use strict'

const Lucid = use('Lucid')

class User extends Lucid {

  apiTokens () {
    return this.hasMany('App/Model/Token')
  }
  apiTokens () {
    return this.hasMany('App/Model/Recipe')
  }

}

module.exports = User
