import React from 'react';
import './App.css';
import Header from './Header';
import { Container, Badge } from 'react-bootstrap';
import PostsView from './PostsList';
import FullPost from './FullPost';
import {
  BrowserRouter as Router, Switch, Route,
} from "react-router-dom";
import { getItem } from './servizi/ServicesAPI';


class App extends React.Component {
  state = {
    items: [],
    isLoaded: false
  }


  componentDidMount() {
    getItem('https://jsonplaceholder.typicode.com/posts')
      .then(json => {
        this.setState(
          {
            items: json,
            isLoaded: true
          })
      }
      )
  }

  render() {
    if (!this.state.isLoaded) {
      return <div>
        <Badge pill variant="warning">
          Loading...
        </Badge>
      </div>
    }

    else {
      return (
        <Router>
          <Container className='bg-light'>
            <Header numPosts={this.state.items.length} />

            <Switch>

              <Route exact path='/'>
                <PostsView posts={this.state.items} />
              </Route>

              <Route
                path='/posts/:id'
                /* con funzione render passo parametro del dynamic id della componente Route tramite
                oggetto match e la props della lunghezza del vettore dei posts, renderizzando la componente FullPost*/
                render={({ match }) => (
                  <FullPost id={match.params.id} numPosts={this.state.items.length} />
                )
                }
              />

            </Switch>

          </Container>
        </Router>
      );
    }


  }
}

export default App;
