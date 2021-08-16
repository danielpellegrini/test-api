'use strict'

const pjson = require('../../../package.json'); //getting package.json from root folder

class TestController {
  index() {
        return JSON.stringify(
            {
                name: pjson.name, 
                version: pjson.version
            }, 
            null, 
            '\t'
        ); 
    }
}

module.exports = TestController

