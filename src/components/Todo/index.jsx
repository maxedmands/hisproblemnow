import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';

import CallToAction from '../CallToAction';
import PhoneNumber from '../PhoneNumber';

import styles from './styles.css';

const Todo = ({ completed, target, callToAction }) => (
  <li styleName={completed ? 'todo-completed' : 'todo'}>
    <PhoneNumber value={target} actionId={callToAction.uid} />
    <div styleName={completed ? 'todo-completed-summary' : 'todo-summary'}>
      {callToAction.data['call-to-action.title'].value[0].text}
    </div>
    {!completed &&
      <CallToAction {...callToAction.data}
                    uid={callToAction.uid}
                    key={callToAction.uid}
                    inTodo={true} />
    }
  </li>
)


Todo.propTypes = {
  completed: PropTypes.bool.isRequired,
  callToAction: PropTypes.object.isRequired,
  target: PropTypes.object.isRequired,
}

export default CSSModules(Todo, styles);
