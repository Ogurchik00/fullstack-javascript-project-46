#!/usr/bin/env node
const gendiff = require('commander')

gendiff
.description('Compares two configuration files and shows a difference.')
.version('0.1')
gendiff.parse(process.argv)
