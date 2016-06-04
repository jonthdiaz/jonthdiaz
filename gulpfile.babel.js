'use strict';

import gulp from 'gulp';
import sass from 'gulp-sass';
import babel from 'babelify';
import watchify from 'watchify';
import browserify from 'browserify';
import source from 'vinyl-source-stream';
import rename from 'gulp-rename';

const dirs = {
  src: 'src',
  dest: 'build'
}
let compile = watch =>{
  var bundle = browserify('./src/index.js', { debug: true});
  if(watch){
    bundle.watchify(bundle);
    bundle.on('update', ()=>{
      console.log("==> bundle ......")
      rebundle();
      console.log("==> end bundle")
    })
  }
  let rebundle = () =>{
    bundle
      .transform(babel, {presets: ['es2015'], plugins:['syntax-async-functions', 'transform-regenerator']})
      .bundle()
      .on('error', (error)=>{ console.log(error); this.emit('end')})
      .pipe(source('index.js'))
      .pipe(rename('app.js'))
      .pipe(gulp.dest('public'))
  }
  rebundle()
}

gulp.task('build', ()=>{
  return compile();
})
gulp.task('watch', ()=>{return compile(true);})

gulp.task('default', ['build'])
