var through = require('through2');
var gutil = require('gulp-util');

var PluginError = gutil.PluginError;
var h5Ejs = require('h5-ejs');


function gulpH5Ejs(options) {
	this.options = options || {};
}

gulpH5Ejs.prototype.compile = function(){
	var self = this;

  	var stream = through.obj(function(file, enc, cb) {
        file.contents = new h5Ejs(file.contents.toString(),self.options);
        file.path = gutil.replaceExtension(file.path, '.html');
        this.push(file);
        return cb();
    });

    return stream;
}

gulpH5Ejs.prototype.replace = function(){
	var self = this;

  	var stream = through.obj(function(file, enc, cb) {

        file.contents = new Buffer(file.contents.toString().replace(/(<script async.*?<\/script>)(.*?)(<script>facade.*?<\/script>)/,"$2$1$3"));

        this.push(file);
        return cb();
    });

    return stream;
}

module.exports = gulpH5Ejs
