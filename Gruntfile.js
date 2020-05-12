/*global module:false*/

module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		build: {
			eqdkppath: '/Users/simonwallmann/Sites/eqdkp'
		},
		shell: {
			themerollerconvert: {
				command: 'php -f src/less-jquibuilder/perform_themeroller_convert.php',
				options: {
					stdout: true
				}
			},
			locales: {
				command: 'php -f src/build_jqcorelocales/downloader.php',
				options: {
					stdout: true
				}
			}
		},
		concat: {
			options: {
				sourceMap :false
			},
			js: {
				src: [
					'src/js/*.js',
					'!src/js/*test.js'
				  ],
				dest: 'temp/core-temp.js'
			},
			jsfull: {
				src: 'src/js/*.js',
				dest: 'dist/core.js'
			},
			css: {
				src: 'src/css/*.css',
				dest: 'dist/core.css'
			}
		},
		uglify: {
			options: {
				sourceMap : false,
				banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
						'<%= grunt.template.today("yyyy-mm-dd") %>\n' +
						'<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
						'* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' + "\n" +
						' Licensed <%= pkg.license %> */\n'
			},
			js: {
				src: ['<%= concat.js.dest %>'],
				dest: 'dist/core.min.js'
			}
		},
		cssmin: {
			options: {
				processImport: false,
				restructuring: false,
				advanced: false,
				keepSpecialComments: 0
			},
			target: {
				files: {
					'dist/core.min.css': ['dist/core.css']
				}
			}
		},
		copy: {
			dist: {
				files: [
					{expand: true, cwd: 'dist/', src: ["core.js", "core.min.js", "core.css", "core.min.css"], dest: "<%= build.eqdkppath %>/libraries/jquery/core/"},
					{expand: true, cwd: 'src/plugins/migrate/', src: 'jquery-migrate.js', dest: "<%= build.eqdkppath %>/libraries/jquery/core/"},
					{expand: true, cwd: 'src/locales/de', src: ["lang_jquery.js"], dest: "<%= build.eqdkppath %>/language/german/"},
					{expand: true, cwd: 'src/plugins/fullcalendar/', src: ['fullcalendar.min.js', 'locale-all.js'], dest: '<%= build.eqdkppath %>/libraries/jquery/js/fullcalendar/'},
					{expand: true, cwd: 'src/plugins/monthpicker/', src: ['MonthPicker.min.js', 'MonthPicker.min.css'], dest: '<%= build.eqdkppath %>/libraries/jquery/js/monthpicker/'},
					{expand: true, cwd: 'src/plugins/circles/', src: ['jquery.circles.min.js'], dest: '<%= build.eqdkppath %>/libraries/jquery/js/circles/'},
					{expand: true, cwd: 'src/plugins/jqplot/', src: ['jjqplot.canvasAxisTickRenderer.min.js','jqplot.canvasTextRenderer.min.js','jqplot.categoryAxisRenderer.min.js','jqplot.dateAxisRenderer.min.js','jqplot.highlighter.min.js','jqplot.mobile.min.js','jqplot.pieRenderer.min.js','jquery.jqplot.min.js','jquery.jqplot.css'], dest: '<%= build.eqdkppath %>/libraries/jquery/js/jqplot/'},
					{expand: true, cwd: 'src/plugins/fullcalendar/', src: ['fullcalendar.print.min.css'], dest: '<%= build.eqdkppath %>/templates/'},
					{expand: true, cwd: 'src/plugins/fullcalendar/', src: ['fullcalendar.min.css'], dest: '<%= build.eqdkppath %>/templates/base_template/'},
					{expand: true, cwd: 'src/plugins/superfish/', src: ['superfish.min.js'], dest: '<%= build.eqdkppath %>/libraries/jquery/js/superfish/'},
					{expand: true, cwd: 'src/plugins/leaflet/', src: ['leaflet.js', 'leaflet.css', 'images/layers-2x.png', 'images/layers.png', 'images/marker-icon-2x.png', 'images/marker-icon.png', 'images/marker-shadow.png'], dest: '<%= build.eqdkppath %>/libraries/jquery/js/leaflet/'},
				]
			},
		}
	});

	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-shell');

	// build all files & copy to eqdkp folder
	//grunt.registerTask('default', ['concat', 'uglify', 'cssmin', 'copy:dist']);
	grunt.registerTask('default', ['concat', 'uglify', 'copy:dist']);
	grunt.registerTask('buildUItemplate', ['shell:themerollerconvert']);
	grunt.registerTask('buildLocales', ['shell:locales']);
	grunt.registerTask('test', ['concat', 'uglify', 'cssmin']);
};
