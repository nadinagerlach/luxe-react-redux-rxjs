import React from 'react';
import Router from 'react-router-dom/MemoryRouter';
import { renderToString } from 'react-dom/server';
import RoutePublic from 'modules/RoutePublic';

describe('modules/RoutePublic', () => {
  it('should render the Login component for unauthenticated access', () => {
    const render = renderToString(
      <Router initialEntries={['/underage']}>
        <RoutePublic
          exact
          path="/underage"
          component={() => (<div>LOGIN</div>)}
          isAuthenticated={false}
        />
      </Router>
    );

    expect(render).toMatchSnapshot();
  });

  it('should redirect to /verified for authenticated access', () => {
    const render = renderToString(
      <Router initialEntries={['/underage']}>
        <RoutePublic
          exact
          path="/underage"
          component={() => (<div>LOGIN</div>)}
          isAuthenticated={true}
        />
      </Router>
    );

    expect(render).toMatchSnapshot();
  });
});
