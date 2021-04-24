import React from 'react'
import {Navbar} from './components/Navbar/Navbar'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import {Home} from './components/pages/Home'
import {About} from './components/pages/About'
import {Profile} from './components/pages/Profile'
import {Alert} from './components/Alert'
import {AlertState} from './context/alert-context/alert-state'
import {GithubState} from './context/git-hub/git-hub-state'


function App() {
    return (
        <GithubState>
            <AlertState>
                <BrowserRouter>
                    <Navbar/>
                    <div className="container pt-4">
                        <Alert alert={{text: 'Test alert'}}/>
                        <Switch>
                            <Route path='/' exact component={Home}></Route>
                            <Route path='/about' component={About}></Route>
                            <Route path='/profile/:name' component={Profile}></Route>
                        </Switch>
                    </div>
                </BrowserRouter>
            </AlertState>
        </GithubState>
    )
}

export default App
