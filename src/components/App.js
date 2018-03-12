import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { injectGlobal, ThemeProvider } from 'styled-components'

import { HomePage } from 'components'

// https://github.com/diegohaz/arc/wiki/Styling
import theme from './themes/default'

import FontBoldWeb from './assets/fonts/Graphik-Bold-Web.woff';
import FontRegularWeb from './assets/fonts/Graphik-Regular-Web.woff';
import FontEgypWeb from './assets/fonts/GuardianEgyp-Light-It-Web.woff';
import FontEgypLtWeb from './assets/fonts/GuardianEgyp-Light-Web.woff';

injectGlobal`
  @font-face {
    font-family: 'Graphik-Bold-Web';
    src: url('${FontBoldWeb}') format('woff');
  }
  @font-face {
    font-family: 'Graphik-Regular-Web';
    src: url('${FontRegularWeb}') format('woff');
  }
  @font-face {
    font-family: 'GuardianEgyp-Light-It-Web';
    src: url('${FontEgypWeb}') format('woff');
  }
  @font-face {
    font-family: 'GuardianEgyp-Light-Web';
    src: url('${FontEgypLtWeb}') format('woff');
  }
`


injectGlobal`
  body {
    margin: 0;
  }
`

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Switch>
        <Route path="/" component={HomePage} exact />
      </Switch>
    </ThemeProvider>
  )
}

export default App
