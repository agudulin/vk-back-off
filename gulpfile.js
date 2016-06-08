const gulp = require('gulp');
const zip = require('gulp-zip');

gulp.task('default', () => {
	return gulp.src([
			'_locales/**',
			'images/**',
			'background.js',
			'manifest.json'
		], {
			base: '.'
		})
		.pipe(zip('vk-back-off.zip'))
		.pipe(gulp.dest('.'))
		.pipe(zip('vk-back-off.nex'))
		.pipe(gulp.dest('.'));
});
