module.exports = function(grunt) {
	grunt.initConfig({
		postcss: {
			options: {
				processors: [
					require('tailwindcss'),
					require('autoprefixer')
				]
			},
			build: {
				src: 'input.css',
				dest: 'grunted.css'
			}
		}
	});
	grunt.loadNpmTasks('grunt-postcss');
	grunt.registerTask('default',['postcss']);
};
