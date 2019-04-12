Idempotent NPM Installs   
====================

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/install-me-maybe.svg)](https://npmjs.org/package/install-me-maybe)
[![Downloads/week](https://img.shields.io/npm/dw/install-me-maybe.svg)](https://npmjs.org/package/install-me-maybe)
[![License](https://img.shields.io/npm/l/install-me-maybe.svg)](https://github.com/rlancer/npm-install-me-maybe/blob/master/package.json)

**Works with Yarn or NPM!** 

Designed for CI / CD systems. Run `install-me-maybe` as many times as you'd like, it will only run `npm install` or `yarn` when the lock file changed. 

## How it works

Creates a hash of your package-lock.json or yarn.lock and writes that hash to a file called .installmemaybe

On the next call to install-me-maybe the contents of the hash file are compared with the new hash, only then will an install be triggered.

Installs your NPM modules only if they are out of date, designed for CI / CD systems 


