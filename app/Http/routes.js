'use strict'

const Route = use('Route')

// Route.on('/').render('welcome')
//Route.on('/').render('main')
/*Route.get('/', function * (request, response) {
    yield res.sendView('main');
});*/
Route.get('/', 'RecipeController.index')
