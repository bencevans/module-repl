#!/usr/bin/env node
const repl = require('repl')
const path = require('path')

function camelCaseDirName (workingPath) {
  let workingPathSplit = workingPath.split(path.sep)
  let moduleName = workingPathSplit[workingPathSplit.length - 1]

  if (moduleName.indexOf('.')) {
    moduleName = moduleName.split('.')[0]
  }

  return moduleName.replace(/-([a-z])/g, function (g) {
    return g[1].toUpperCase()
  })
}

const modulePath = path.resolve(process.cwd(), process.argv[2] || '')
const modulePathResolves = require.resolve(modulePath)
const moduleName = camelCaseDirName(modulePath)

console.log('Imorting `' + modulePathResolves + '` as `' + moduleName + '` ...')

repl.start().context[moduleName] = require(modulePath)
