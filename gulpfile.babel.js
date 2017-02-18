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
import webpack from 'webpack-stream'
import named from 'vinyl-named'
import exec from 'gulp-exec'
import ts from 'gulp-typescript'
import sourcemaps from 'gulp-sourcemaps'

let ts_project = ts.createProject('tsconfig.client.json')
const paths = {
  sass_all: ['./content/sass/**/**/*.sass',
         './content/sass/*.sass' ,
         './content/sass/**/**/*.scss'],
 sass: ['./content/sass/**/**/*.sass',
        './content/sass/*.sass'],
  es6: './content/js/**/**/*.js',
  ts: './content/ts/main.ts'
}

gulp.task(('build_ts'),()=>{
  gulp.src(paths.ts)
    .pipe(named())
    .pipe(webpack(require('./webpack.config.js')))
    .pipe(gulp.dest('./public/bundle/'))

})

let getJSWatcher = (bundler, entry) => {
  return function() {
    gutil.log('Begin build for', entry);
    return bundler.bundle()
      .on('error', (error) =>{
          gutil.log(error.toString())
       })
      .pipe(source(`${entry.replace('./content/js/', "")}`))
      .pipe(rename({
        extname: '.bundle.js'
      }))
      .pipe(gulp.dest('./public/bundles'))
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
  return gulp.src(paths.sass)
    .pipe(sourcemaps.init())
    .pipe(sass())
    .on('error', sass.logError)
    .pipe(rename({ extname: '.min.css' }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./public/css/'))
    // .on('end', done);
});
gulp.task('sass_all', (done)=> {
  gulp.src(paths.sass_all)
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
gulp.task('dev', ['sass'],function() {
  gulp.watch(paths.sass, ['sass']);
});

// gulp.task('watch', ()=>{return compile(true);})

gulp.task('default', ['watch'])
