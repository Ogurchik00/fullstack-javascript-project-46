#!/usr/bin/env node
const gendiff = require('commander')

gendiff
.description('Compares two configuration files and shows a difference.')
.version('0.1')
.option('-f, --format <type>', 'output format')
.argument('<filepath1>')
.argument('<filepath2>')

gendiff.parse(process.argv)
