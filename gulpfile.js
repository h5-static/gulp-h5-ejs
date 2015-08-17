var gulp = require("gulp");
var GulpH5Ejs = require("./index.js"); 
var gulpH5Ejs = new GulpH5Ejs({
	combo:true
});
gulp.task('test', function(cb) {
  gulp.src([ "handlebar" + "/**/*.html"])
  	.pipe(gulpH5Ejs.compile())
    .pipe(gulp.dest("html/"));
});

gulp.task('default', ["test"]);