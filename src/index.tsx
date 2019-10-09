import React from 'react'
import ReactDOM from 'react-dom'
import App from 'components/App'
import I18nService from 'services/I18nService'

import 'normalize.css'

I18nService.init()

ReactDOM.render(<App />, document.getElementById('root'))
