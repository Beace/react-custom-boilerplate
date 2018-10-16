import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { Input, Button } from 'antd';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';

import { makeSelectCurrentUser } from 'containers/App/selectors';
import { makeSelectArticle } from './selectors';
import { setTodos } from './actions';

import reducer from './reducer';
import saga from './saga';

class HomePage extends React.PureComponent {
  state = {
    value: '',
    todos: [
      {
        todo: 'Learn typescript',
        done: true,
      },
      {
        todo: 'Try immer',
        done: false,
      },
    ],
  };

  updateTodos = () => {
    this.props.setTodos({
      todo: 'Learn typescript',
      done: true,
    });
  };

  render() {
    const { article } = this.props;
    console.log(this.props, this.state.todos);
    return (
      <article>
        <Helmet>
          <title>Home Page</title>
          <meta
            name="description"
            content="A React.js Boilerplate application homepage"
          />
        </Helmet>
        <div>
          <Input onChange={this.onChange} value={this.state.value} />
        </div>
        <Button onClick={this.updateTodos} type="primary">
          update todos
        </Button>
      </article>
    );
  }
}

HomePage.propTypes = {
  article: PropTypes.object,
  setTodos: PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    setTodos: todos => dispatch(setTodos(todos)),
  };
}

const mapStateToProps = createStructuredSelector({
  todos: makeSelectArticle(),
  currentUser: makeSelectCurrentUser(),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'home', reducer });
const withSaga = injectSaga({ key: 'home', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(HomePage);
