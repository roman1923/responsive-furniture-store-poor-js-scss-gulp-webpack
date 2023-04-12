
//     .pipe(plumber())

import gulp from 'gulp';

function json() {
    return gulp.src('./json/')  
    .pipe(gulp.dest('./dist/'));
}

export { json };