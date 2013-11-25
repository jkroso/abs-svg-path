
require('chai').should()
var parse = require('parse-svg-path')
var cases = require('./cases')
var abs = require('..')

describe('abs', function(){
	Object.keys(cases).forEach(function(key){
		var code = cases[key].reduce(function(str, obj){
			return str 
				+ 'var from = parse("' + obj.from + '")\n'
				+ 'var to = parse("' + obj.to + '")\n'
				+ (obj.debug ? 'debugger\n' : '')
				+ 'abs(from).should.eql(to)\n'
		}, '(function(){\n') + '})'
		it(key, eval(code))
	})
})
