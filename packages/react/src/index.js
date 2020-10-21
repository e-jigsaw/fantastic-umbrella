import React from 'react'
import {render} from 'react-dom'

const App = () => <div>
  <h1>hi im rendered by react</h1>
  <vue-app></vue-app>
</div>

render(<App></App>, document.getElementById('app'))
