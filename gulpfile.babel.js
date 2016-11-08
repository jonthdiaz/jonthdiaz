'use strict';

import gulp from 'gulp'
import sass from 'gulp-sass'
import babel from 'babelify'
import watchify from 'watchify'
import browserify from 'browserify'
import source from 'vinyl-source-stream'
import rename from 'gulp-rename'
import glob from 'glob'
import es from 'event-stream'
import gutil from 'gulp-util'


const paths = {
  sass: ['./content/sass/**/**/*.sass',
         './content/sass/*.sass' ,
         './content/sass/**/**/*.scss'],
  es6: './content/es6/**/**/*.js',
}



let getJSWatcher = (bundler, entry) => {
  return function() {
    gutil.log('Begin build for', entry);
    return bundler.bundle()
      .on('error', (error) =>{
          gutil.log(error.toString())
       })
      .pipe(source(`${entry.replace('./content/es6/', "")}`))
      .pipe(rename({
        extname: '.bundle.js'
      }))
      .pipe(gulp.dest('./public/js'))
  }
}

gulp.task('build', (done)=>{
  glob(paths.es6,(error, files)=>{
    var tasks = files.map((entry)=>{
      let bundler = watchify(
        browserify(entry, {debug:true, cache: {}, packageCache: {}, compact:true})).transform(babel)

        let watchfn = getJSWatcher(bundler, entry)
        bundler.on('update', watchfn)
        bundler.on('time',  (time)=> {
          console.log(`End Bundling time ${time}`)
        })
        return watchfn()
    })
    es.merge(tasks);
  })
})

gulp.task('sass', (done)=> {
  gulp.src(paths.sass)
    .pipe(sass())
    .on('error', sass.logError)
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest('./public/css/'))
    .on('end', done);
});
gulp.task('watch', function() {
  gulp.watch(paths.es6, ['build']);
  gulp.watch(paths.sass, ['sass']);
});
gulp.task('wes6', function() {
  gulp.watch(paths.es6, ['build']);
});
gulp.task('wsass', function() {
  gulp.watch(paths.sass, ['sass']);
});

// gulp.task('watch', ()=>{return compile(true);})

gulp.task('default', ['watch'])
