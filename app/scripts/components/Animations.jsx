import React from 'react';
import PropTypes from 'prop-types';

import { hideAlert } from 'actions';

import Transition from 'components/Transition';
import Alert from 'components/Alert';

export default class Animations extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
  };

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }
  
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }
  
  handleScroll = (event) => {
    console.log('the scroll things', event);
  }


  renderAnimations(position) {

    return items.map(d => (
      <Animation
        key={d.id}
        id={d.id}
        icon={d.icon}
        handleClickClose={this.handleClick}
        type={d.type}
      >
        {d.message}
      </Animation>
    ));
  }

  render() {
    return (
      <div key="SystemAlerts" className="app__system-alerts">
        <div className="app__system-alerts__top-left">
          <Transition classNames="transition-slide-right fade-enter">
            {this.renderAlerts('top-left')}
          </Transition>
        </div>
        <div className="app__system-alerts__top-right">
          <Transition classNames="transition-slide-left fade-enter">
            {this.renderAlerts('top-right')}
          </Transition>
        </div>
      </div>
    );
  }
}
