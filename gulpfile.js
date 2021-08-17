const {src,dest,watch} = require ("gulp")
var sass = require('gulp-sass')(require('sass'));
sass.compiler=require("dart-sass");


function css() {
    return src('./scss/app.scss')
      .pipe(sass({outputStyle:"expanded"}))
      .pipe(dest('./build/css'));
  };
  
  function watchFile(){
      watch("./scss/**/*.scss", css);
  };

  exports.css = css;
  exports.watchFile = watchFile;
  