'use strict';

const gulp = require('gulp');
const eslint = require('gulp-eslint');
var exec = require('child_process').exec;





gulp.task('lint', () => {
  let src = gulp.src(['src/**/*.js','gulpfile.js'])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
  return src;
});




gulp.task('watch', () => {
  gulp.watch('src/*', ['lite-server','lint']);

});

gulp.task('lite-server', (cb) => {
  exec('npm run dev', (err, stdout, stderr) => {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
});
