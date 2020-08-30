module.exports = function(grunt) {
	grunt.initConfig({
		uglify: {
			build: {
				src: 'gruntme.css',
				dest: 'gruntme.css.out'
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.registerTask('default',['uglify']);
};
