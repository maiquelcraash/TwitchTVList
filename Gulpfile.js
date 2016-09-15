/**
 * Created by maiquel on 14/09/16.
 */

(function () {
	"use strict";

	var gulp = require('gulp'); 									//chama biblioteca do gulp
	var jshint = require('gulp-jshint');							//chama plugin jshint
	var clean = require('gulp-clean');								//chama plugin gulp-clean
	var concat = require('gulp-concat');							//chama plugin gulp-concat
	var uglify = require('gulp-uglify');							//chama plugin uglify
	var es = require('event-stream');								//chama plugin event-stream
	var oes = require('ordered-merge-stream');						//chama plugin ordered-merge-stream que mantém a ordem das stream
	var htmlmin = require('gulp-htmlmin');							//chama plugin htmlmin
	var cleanCSS = require('gulp-clean-css');						//chama plugin gulp-clean-css
	var rename = require('gulp-rename');							//chama plugin gulp-rename
	var runSequence = require('run-sequence');						//chama plugin run-sequence

	//task que faz a limpeza da pasta dist. CUIDADO para não apagar coisas que não quer
	//plugin em https://www.npmjs.com/package/gulp-clean
	gulp.task('clean', function () {
		return gulp.src('dist/')
			.pipe(clean());
	});

	//task que verifica a qualidade do código
	//plugin em https://www.npmjs.com/package/gulp-jshint/
	//o return indica que essa task não precisa ser executada de forma síncrona. O gulp retorna as instruções e vai pra outra task, permitindo que esta, rode em paralelo
	gulp.task('jshint', function () {
		return gulp.src('js/**/*.js')								//define como source, todos os JSs dentro da pasta "js" e de suas subpastas
			.pipe(jshint())											//concatena a funcão do jshint ao "stream de dados" em memória, gerado pelo src
			.pipe(jshint.reporter('default'));						//define o reporter default do jshint. No site deles tem várias opções
	});

	//task que faz o JS ficar ilegível
	gulp.task('uglify', function () {								//o clean deve rodar antes do uglify
		return oes([												//junta os dois grupos de source num só
			gulp.src(['lib/angular/angular.min.js', 'lib/angular-route/angular-route.min.js']),
			gulp.src(['js/**/*.js']).pipe(uglify({ mangle: false }))					//esse aqui precisa minificar e uglificar, as libs n precisa. O uglify tem um par
		])
			.pipe(concat('all.min.js'))								//concatena todos os jss em um único chamado all.min.js
			.pipe(gulp.dest('dist/js'));							//grava tudo na pasta dist
	});

	//minifica o html
	gulp.task('htmlmin', function () {
		return gulp.src(['view/*.html'])
			.pipe(htmlmin({collapseWhitespace: true}))				//minifica o html (ver documentação do plugin para ver opções de parâmetros
			.pipe(gulp.dest('dist/view'));
	});

	//minifica o css
	gulp.task('cssmin', function () {
		return es.merge([
			gulp.src(['lib/bootstrap/dist/css/bootstrap.min.css']),	//não precisa minificar
			gulp.src(['css/*.css']).pipe(cleanCSS())				//precisa minificar
		])
			.pipe(concat('styles.min.css'))							//concatena tudo em um styles.min.css
			.pipe(gulp.dest('dist/css'));
	});

	gulp.task('copy', function () {
		gulp.src(['index-prod.html'])
			.pipe(rename('index.html'))								//renomeia o html de produção
			.pipe(gulp.dest('dist/'));
	});


	//task principal que agrupa outras subtasks (entre [])
	//o run sequence permite agrupar e ordenar as tasks, além de poder utilizar um callback a ser executado após o término
	gulp.task('default', function (callback) {
		return runSequence('clean', ['jshint', 'uglify', 'htmlmin', 'cssmin', 'copy'], callback);
	});

}());