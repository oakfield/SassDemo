/// <binding BeforeBuild='sass' />
module.exports = function (grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		sass: {
			dist: {
				options: {
					style: 'expanded',
					sourcemap: "file"
				},
				files: {
					'App/app.css': 'App/app.scss'
				}
			}
		},
		watch: {
			files: ["App/app.scss"],
			tasks: ["sass"]
		}
	});

	grunt.loadNpmTasks('grunt-contrib-sass');

	grunt.registerTask('default', ['sass']);
};