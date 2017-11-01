import React from 'react'
import ReactDOM from 'react-dom'
import { withRouter, Route, Switch } from 'react-router-dom'
import SharedPage from "./common/Shared";

import Home from './views/Home'
import About from './views/About'

const Routes = (<div>
  <Switch>
    <SharedPage>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="*" component={Home} />
    </SharedPage>
  </Switch>
</div>
)

export default Routes
