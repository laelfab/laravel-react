import React from 'react'

import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import AddContacts from './AddContacts';
import Contacts from './Contacts';
import Nav from './Nav';


const App = () =>  {
    return(
        <Router>
            <>
                <Nav/>
                <Switch>
                    <Route path="/" exact component={Contacts} />
                    <Route path="/ajouter-un-contact" exact component={AddContacts} />
                </Switch>
            </>
        </Router>
        )
}
    


export default App;


