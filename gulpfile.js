var gulp = require("gulp");
var GulpH5Ejs = require("h5-ejs"); 
var gulpH5Ejs = new GulpH5Ejs();
gulp.task('test', function(cb) {
  gulp.src([ "handlebar" + "/**/*.html"])
  	.pipe(gulpH5Ejs.compile())
    .pipe(gulp.dest("html/"));
});

gulp.task('default', ["test"]);