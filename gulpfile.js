const {watch, src, dest} = require('gulp');
var concat = require('gulp-concat');

const allScripts = () => 
    src('./src/js/*js')
    .pipe(concat('alljs.js'))
    .pipe(dest('build/js'));

    exports.allScripts = allScripts;
