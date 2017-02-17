import React from 'react'
import ReactDOM from 'react-dom'

require('./assets/sass/styles.scss')


import MyComponent from './app/components/MyComponent'

ReactDOM.render(<MyComponent/>, document.getElementById('app'))