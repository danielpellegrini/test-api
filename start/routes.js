'use strict'

const { RouteGroup } = require('@adonisjs/framework/src/Route/Manager')

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

// Route.on('/').render('welcome')

Route.group(() => {

    Route.post('/login', 'AuthController.register') //post route for creating a new user and making a JWT token
    Route.get('/user/:id', 'AuthController.login').middleware(['auth:jwt'])//protected route to get  user details from database

}).prefix("api/v1/")

Route.get('/', 'TestController.index') //route for displaying app name and version








