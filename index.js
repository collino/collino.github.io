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
		convert     = require('metalsmith-convert');


Metalsmith(__dirname)
	.use(serve())
	.use(
		watch({
			paths: {
        		"${source}/**/*": "**/*"
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
			satellite: 'partials/satellite',
			projects: 'partials/projects'
		}
	}))
	.use(less({
		pattern: './src/styles/**/*.less'
	}))
	.use(convert({
    src: 'images/projects/**/*.png',
    target: 'jpg',
		remove: true
  }))
	.destination('./build')
	.build(function(err) {
		if (err) { throw err; }
	});
