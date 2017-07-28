import React from 'react';
import PropTypes from "prop-types";
import CSSModules from 'react-css-modules';

import { workerShape } from "../../shapes";
import { updateWorker, deleteWorker } from '../../../common/actions/workers';

import WorkerForm from '../EditableWorkerForm';

import styles from "./editableWorker.less";

class EditableWorker extends React.PureComponent {
  static propTypes = {
    dispatch: PropTypes.func,
    worker: workerShape,
    workersRanks: PropTypes.arrayOf(PropTypes.object)
  }

  handleWorkerUpdate = (worker) => this.props.dispatch(updateWorker(worker));

  handleWorkerDelete = () => this.props.dispatch(deleteWorker(this.props.worker.id));

  render() {
    const { worker, workersRanks } = this.props;

    return (
      <div styleName="worker-card">
        <div styleName="worker-card--title">Редактирование</div>
        <WorkerForm
          worker={worker}
          workersRanks={workersRanks}
          onSubmit={this.handleWorkerUpdate}
          onWorkerDelete={this.handleWorkerDelete}
        />
      </div>
    );
  }
}

export default CSSModules(EditableWorker, styles);
