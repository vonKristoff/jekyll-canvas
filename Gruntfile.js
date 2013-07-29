module.exports = function(grunt) {

	// load modules for use
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-requirejs');
	grunt.loadNpmTasks('grunt-textfile');


	grunt.initConfig({
		pkg     : grunt.file.readJSON('package.json'),
		uglify: {
     		files: {
        		src: 'distribution/<%= pkg.name %>.js',
        		dest: '../../Blog/dev/src/resources/js/static/<%= pkg.name %>.min.js'
      		}
    	},
		watch: {
			js:{
				files: ['js/*.js'],
				options:{ livereload: true }
			}
		},
		copy: {
			post:{
				files: [{
					expand: true,
					cwd: 'distribution/',
		    		src: '*.md',
		    		dest: '../../Blog/dev/src/_posts/static/',
		    		filter: 'isFile'
		    	}]	
			}
		},
		requirejs: {
			app: {
				options: {
					findNestedDependencies: true,
					mainConfigFile: 'js/main.js',
					name          : 'main',
					out           : 'distribution/<%= pkg.name %>.js',
					optimize      : 'none'
				}
			}
		},
		textfile: {
			setup: {
			  	options: {
			  		dest: 'distribution/',
			    	template: 'template.tpl',
			    	urlFormat: 'DATE-SLUG<%= pkg.name %>.md'
			  	}
			},
			main: {
				options: {
					dest: 'js',
					template: 'main.tpl',
					urlFormat: 'main.js'
				}
			},
			app: {
				options: {
					dest: 'js',
					template: 'app.tpl',
					urlFormat: 'app.js'
				}
			}
		}
	});
	grunt.registerTask('default', ['watch']);
	grunt.registerTask('init', ['textfile']);
	grunt.registerTask('build', ['requirejs','uglify','copy']);

}