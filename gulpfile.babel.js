'use strict';

import gulp from 'gulp';
import sass from 'gulp-sass';
import babel from 'babelify';
import watchify from 'watchify';
import browserify from 'browserify';
import source from 'vinyl-source-stream';
import rename from 'gulp-rename';
import glob from 'glob';
import es from 'event-stream';
const paths = {
  sass: ['./src/sass/**/**/*.sass', './www/sass/**/**/*.scss'],
  es6: './public/es6/**/**/*.js',
}

gulp.task('build', (done)=>{
  glob(paths.es6,(error, files)=>{
    if(error) done(error);
    var tasks = files.map((entry)=>{
      let bundle = browserify(entry, {debug:true});
      return bundle
        .transform(babel, {presets: ['es2015'], plugins:['syntax-async-functions', 'transform-regenerator']})
        .bundle()
        .on('error', (error)=>{ console.log(error); this.emit('end')})
        .pipe(source(`${entry.replace('./public/es6/', "")}`))
        .pipe(rename({
          extname: '.bundle.js'
        }))
        .pipe(gulp.dest('./public/js'));
    })
    es.merge(tasks).on('end', done);
  })
})
gulp.task('watch', function() {
  gulp.watch(paths.es6, ['build']);
});

// gulp.task('watch', ()=>{return compile(true);})

gulp.task('default', ['build'])
