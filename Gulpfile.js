/**
 * Created by maiquel on 14/09/16.
 */

(function () {
	"use strict";

	var gulp = require('gulp'); 									//chama biblioteca do gulp
	var jshint = require('gulp-jshint');							//chama plugin jshint
	var clean = require('gulp-clean');								//chama plugin gulp-clean
	var concat = require('gulp-concat');							//chama plugin gulp-concat
	var uglify = require('gulp-uglify');

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

	gulp.task('uglify', ['clean'], function () {					//o clean deve rodar antes do uglify
		return gulp.src(['js/**/*.js'])
			.pipe(uglify())
			.pipe(concat('all.min.js'))								//concatena todos os jss em um único chamado all.min.js
			.pipe(gulp.dest('dist/js'));							//grava tudo na pasta dist
	});


	//task principal que agrupa outras subtasks (entre [])
	gulp.task('default', ['jshint', 'uglify']);

}());