var Metalsmith = require('metalsmith');
	collections = require('metalsmith-collections');
	markdown    = require('metalsmith-markdown');
	templates   = require('metalsmith-templates');
	serve       = require('metalsmith-serve');
	watch       = require('metalsmith-watch');


Metalsmith(__dirname)
	.use(serve())
	.use(watch())
	.use(markdown())
	.use(collections({
		projects: {
			sortBy: 'date',
    		reverse: true
        }
	}))
	.use(templates({
		engine: 'handlebars',
		directory: 'templates',
		partials: {
			header: 'partials/header',
			footer: 'partials/footer'
		}
	}))
	.destination('./build')
	.build(function(err) {
		if (err) { throw err; }
	});
