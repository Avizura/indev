import React from "react";
import PropTypes from "prop-types";
import { FormattedDate } from 'react-intl';
import CSSModules from 'react-css-modules';
import Button from '../../../common/components/Button';

import { editWorker } from "../../../common/actions/workers";
import { workerShape } from "../../shapes";

import styles from "./worker.less";

class Worker extends React.PureComponent {
  static propTypes = {
    dispatch: PropTypes.func,
    worker: workerShape,
    workerRank: PropTypes.string
  };

  handleWorkerEdit = (worker) => () => {
    this.props.dispatch(editWorker(worker));
    scroll(0, 0);
  };

  render() {
    const { worker, workerRank } = this.props;
    return (
      <div styleName="worker-container">
        <div styleName="worker">
          <div styleName="worker--image" style={{ backgroundImage: `url(${worker.image})` }} />
          <div styleName="worker--info">
            <div styleName="worker--name">
              {worker.first_name} {worker.last_name}
            </div>
            <div styleName="worker--birthdate">
              <FormattedDate value={worker.birth_date} day="numeric" month="long" year="numeric" />
            </div>
            <div styleName="worker--rank">{workerRank}</div>
            <Button
              color="primary"
              style={{ marginTop: 'auto', marginLeft: 'auto', width: '160px' }}
              onClick={this.handleWorkerEdit(worker)}
            >
            Редактировать
          </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default CSSModules(Worker, styles);
