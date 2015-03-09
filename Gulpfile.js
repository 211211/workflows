var gulp = require('gulp');
var gutil = require('gulp-util');
var coffee = require('gulp-coffee');
gulp.task('log', function(){
    gutil.log('Workflows are awesome');
});

var coffeeSource = ['components/coffee/*.coffee']
gulp.task('coffee', function(){
    gulp.src(coffeeSource)
        .pipe(coffee({ bare: true })
            .on('error', gutil.log))
        .pipe(gulp.dest('components/scripts'))
});