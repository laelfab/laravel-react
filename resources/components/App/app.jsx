import React from 'react'

import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import AddContacts from './AddContacts';
import Contacts from './Contacts';
import ListeContacts from './ListeContacts';
import Nav from './Nav';


const App = () =>  {
    return(
        <Router>
            <>
                <Nav/>
                <Switch>
                    <Route path="/" exact component={Contacts} />
                    <Route path="/liste-des-contacts" exact component={ListeContacts} />
                    <Route path="/ajouter-un-contact" component={AddContacts}/>
                </Switch>
            </>
        </Router>
        )
}

export default App;


