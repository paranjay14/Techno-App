/*
We need to tell the Assemble task about our structure, so let's open up our Gruntfile.js and make some changes.

*/
module.exports = function (grunt) {
  'use strict';

  grunt.initConfig({
    pkg: grunt.file.readJSON('./package.json'),

    connect: {
      dev: {
        options: {
          port: 8000,
          base: './www'
        }
      }
    },

    assemble: {
         options: {
           layout: 'compile_whatsnew.html',// The final build file?! .html extension
           layoutdir: './www/layouts/',
           partials: './www/layouts/partials/**/*.html'
         },
         posts: {
           files: [
           {
             cwd: './www/content/',
             dest: './www/',//files that are processed they will be placed here
             expand: true,
             src: ['**/*.html', '!_pages/**/*.html'] //do not take _pages folder. take everything else.
           }, 
           {
             cwd: './www/content/_pages/',
             dest: './www/',//files that are processed they will be placed here
             expand: true,
             src: '**/*.html'
           }
           ]
         }
       }

  });

  /* load every plugin in package.json */
  grunt.loadNpmTasks('grunt-assemble');
  grunt.loadNpmTasks('grunt-connect');

  /* grunt tasks */
  grunt.registerTask('default', ['assemble']);

};