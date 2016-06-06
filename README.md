# README #

### What is this repository for? ###
Kickplate - Build process starter kit

Lightweight modular Gulp build process. This build process is specific to my needs, but is modular enough for us to quickly customize it to new languages and processes.

----------

## Install ##
1. Pull down the Repo
2. Install [npm](https://nodejs.org/download/) -- if you are using nvm, you only need to run `nvm use`, there is a nvmrc file.
3. Fetch node modules `npm install`
4. Install gulp `npm install gulp`

## Gulp Commands ##
* `gulp` runs phases: build, compile, inject
* `gulp dev` runs phases: build, compile, inject, serve
* `gulp prod` runs phases: build, compile, compress, inject, test

_see phase descriptions in the docs section_

----------

# Docs #

#### Phases: ####
Gulp tasks are grouped out into phases and run using `run-sequence`.  Tasks in each phase can run in parallel.

1. **build**
    * `dist` and `tmp` directories are deleted.
    * Copies all files that do not need compiled to the `tmp` directory.  

2. **compile**
    * Compiles and copies all files that need compiled to the `tmp` directory.  
    * Concatenates same of type files into one file

3. **compress**
    * Compresses images (this can take a while, so is only used in gulp prod)  

4. **inject**
    * At this point all the files should be ready in the `tmp` directory
    * Files are concatenated and copied to dist directory.
    * `tmp` directory is deleted.

5. **test**
    * TODO

6. **serve**
    * Uses `browser-sync` to serve up the site.

#### To Do: ####
* Typescript support
* Add file structure automation for, SMACCS, Angular, Tests (similar to NG Poly... but using our formats) 
* Unit Testing - Jasmine (Karma as the test runner)
* End to End Testing - Jasmine / Protractor

#### Source Management: ####
* Project maintained by: [Tim Giegel](tgiegel@celerity.com)
* Project is also hosted on Celerity's Bitbucket Account
