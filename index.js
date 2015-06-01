var Metalsmith  = require('metalsmith');
	metadata    = require('metalsmith-metadata');
	collections = require('metalsmith-collections');
	permalinks  = require('metalsmith-permalinks');
	markdown    = require('metalsmith-markdown');
	templates   = require('metalsmith-templates');
	less        = require('metalsmith-less');
	serve       = require('metalsmith-serve');
	watch       = require('metalsmith-watch');
	drafts      = require('metalsmith-drafts');


Metalsmith(__dirname)
	.use(serve())
	.use(
		watch({
			paths: {
        		"${source}/**/*": true,
        		"templates/**/*": "**/*.md"
      		},
      		livereload: true
    	})
    )
	.use(markdown())
	.use(collections({
		projects: {
			pattern: 'projects/*.md',
			sortBy: 'date',
    		reverse: true
        }
	}))
	.use(permalinks())
	.use(drafts())
	.use(templates({
		engine: 'handlebars',
		directory: 'templates',
		partials: {
			header: 'partials/header',
			footer: 'partials/footer',
			nav: 'partials/nav',
			satellite: 'partials/satellite',
			projects: 'partials/projects',
			about: 'partials/about'
		}
	}))
	.use(less({
		pattern: './src/styles/**/*.less'
	}))
	.destination('./build')
	.build(function(err) {
		if (err) { throw err; }
	});
