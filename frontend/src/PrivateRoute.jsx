import React from 'react'
import {Route,Redirect} from 'react-router-dom'
import {isAuthenticated} from './Auth'

async function asyncCall() {
    return await isAuthenticated();
  }

class PrivateRoute extends React.Component {
    state = {
      loading: true,
      isAuthenticated: false,
    }
    componentDidMount() {
      asyncCall().then((isAuthenticated) => {
        this.setState({
          loading: false,
          isAuthenticated,
        });
      });
    }
    render() {
      const { component: Component, ...rest } = this.props;
      if (this.state.loading) {
        return <div>LOADING</div>;
      } else {
        return (
          <Route {...rest} render={props => (
            <div>
              {!this.state.isAuthenticated && <Redirect to={{ pathname: '/login', state: { from: this.props.location } }} />}
              <Component {...this.props} />
            </div>
            )}
          />
        )
      }
    }
  }

  export default PrivateRoute