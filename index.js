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
module.exports = gulpH5Ejs
