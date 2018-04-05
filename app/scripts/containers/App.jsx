import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import Helmet from 'react-helmet';
import cx from 'classnames';
import history from 'modules/history';
import RoutePublic from 'modules/RoutePublic';
import RoutePrivate from 'modules/RoutePrivate';
import { TransitionGroup, CSSTransition } from 'react-transition-group';


import config from 'config';
import { showAlert } from 'actions';

import { InstantSearch, ClearAll, Highlight, MenuSelect, SearchBox } from 'react-instantsearch/dom';
import { connectSearchBox, connectInfiniteHits, connectStateResults } from 'react-instantsearch/connectors';

import ClientEntry from 'routes/ClientEntry';
import Home from 'routes/Home';
import OurStory from 'routes/OurStory';
import FindYourBlend from 'routes/FindYourBlend';
import Instagram from 'routes/Instagram';
import Private from 'routes/Private';
import Login from 'routes/Login';
import NotFound from 'routes/NotFound';

import Header from 'components/Header';
import Footer from 'components/Footer';
import SystemAlerts from 'components/SystemAlerts';

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      refresh: true,
    };
    this.refresh = this.refresh.bind(this);
    this.onSearchStateChange = this.onSearchStateChange.bind(this);
  }

  refresh() {
    this.setState(prevState => ({
      refresh: !prevState.refresh,
    }));
  }

  onSearchStateChange() {
    this.setState({ refresh: false });
  }
  
  static propTypes = {
    app: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired,
  };

  componentWillReceiveProps(nextProps) {
    const { dispatch, user } = this.props;
    const { user: nextUser } = nextProps;

    /* istanbul ignore else */
    if (!user.isAuthenticated && nextUser.isAuthenticated) {
      dispatch(showAlert('Thanks! Verfied 21 and older', { type: 'primary', icon: 'i-flash' }));
    }
  }

  render() {
    const { app, dispatch, user } = this.props;

    return (
        <ConnectedRouter history={history}>
              <InstantSearch
        appId="Y87VXIZ6O6"
        apiKey="4e122be87ef7df0766bd1d4feab604bc"
        indexName="jmtobacco"
        refresh={this.state.refresh}
        onSearchStateChange={this.state.onSearchStateChange}
      >
          <div
            className={cx('app', {
              'app--private': user.isAuthenticated,
            })}
          >
            <Helmet
              defer={false}
              htmlAttributes={{ lang: 'pt-br' }}
              encodeSpecialCharacters={true}
              defaultTitle={config.title}
              titleTemplate={`%s | ${config.name}`}
              titleAttributes={{ itemprop: 'name', lang: 'pt-br' }}
            />
            <Route
              render={({ location }) => (
                <Header />
              )}
            />
            <main className="app__main page-wrap">
              <TransitionGroup>
                <CSSTransition
                  timeout={300}
                  classNames="fade"
                  key={location.key}
                >
                  <Switch location={location}>
                    <Route exact path="/">
                      <ClientEntry dispatch={dispatch} user={user} />
                    </Route>
                    <RoutePrivate
                      exact path="/home"
                      component={Home}
                      isAuthenticated={user.isAuthenticated}
                      exact
                      search={this.onSearchStateChange} refresh={this.refresh}
                    />
                    <RoutePrivate
                      exact path="/our-story"
                      component={OurStory}
                      isAuthenticated={user.isAuthenticated}
                      exact
                    />
                    <RoutePrivate
                      exact path="/our-cigars"
                      component={OurStory}
                      isAuthenticated={user.isAuthenticated}
                      exact
                    />
                    <RoutePrivate
                      exact path="/find-your-blend"
                      component={FindYourBlend}
                      isAuthenticated={user.isAuthenticated}
                      exact
                      search={this.onSearchStateChange} refresh={this.refresh}
                    />
                    <RoutePrivate
                      exact path="/instagram"
                      component={Instagram}
                      isAuthenticated={user.isAuthenticated}
                      exact
                    />
                    <RoutePublic
                      component={Login}
                      isAuthenticated={user.isAuthenticated}
                      path="/underage"
                      exact
                    />
                    <RoutePrivate
                      component={Private}
                      isAuthenticated={user.isAuthenticated}
                      path="/verified"
                      exact
                    />
                    <Route component={NotFound} />
                  </Switch>
                </CSSTransition>
              </TransitionGroup>
            </main>
            <Footer />
            <SystemAlerts alerts={app.alerts} dispatch={dispatch} />
          </div>
          </InstantSearch>
        </ConnectedRouter>
    );
  }
}

/* istanbul ignore next */
function mapStateToProps(state) {
  return {
    app: state.app,
    user: state.user,
  };
}

export default connect(mapStateToProps)(App);
