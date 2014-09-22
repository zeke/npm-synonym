#!/usr/bin/env node
var moby = require("moby")
var args = process.argv.slice(2)

if (args.length != 3) {
  return console.log("Usage: npm-synonym word word word")
}

console.log(moby.search(args[0]).filter(function(word){ return word.match(/^n/i)}))
console.log(moby.search(args[1]).filter(function(word){ return word.match(/^p/i)}))
console.log(moby.search(args[2]).filter(function(word){ return word.match(/^m/i)}))
