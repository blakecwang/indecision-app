import React from 'react'
import ReactDOM from 'react-dom'
import validator from 'validator'
import add from './utils.js'

console.log('app.js is running')

//console.log(add(1,2))
//console.log(validator.isEmail('foo@bar.com'))

const template = <p>testing</p>

ReactDOM.render(template, document.getElementById('app'))
