import React from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';

import { workerShape } from '../../shapes';

import Worker from '../Worker';
import EditableWorker from '../EditableWorker';
import ControlPanel from '../ControlPanel';

import styles from './workerslist.less';

class WorkersList extends React.PureComponent {
  static propTypes = {
    dispatch: PropTypes.func,
    editableWorker: workerShape,
    workers: PropTypes.arrayOf(workerShape),
    workersRanks: PropTypes.arrayOf(PropTypes.object)
  };

  renderWorkers() {
    const { workers, workersRanks, editableWorker, dispatch } = this.props;

    return workers.reduce((filteredWorkers, worker) => {
      const workerRank = workersRanks[worker.post] && workersRanks[worker.post].name;
      if (worker.id !== editableWorker.id) {
        filteredWorkers.push(<Worker key={worker.id} worker={worker} workerRank={workerRank} dispatch={dispatch} />);
      }

      return filteredWorkers;
    }, []);
  }

  render() {
    const { editableWorker, workersRanks, dispatch } = this.props;

    return (
      <div>
        {editableWorker.id && <EditableWorker worker={editableWorker} workersRanks={workersRanks} dispatch={dispatch} />}
        <div styleName="workers">
          <ControlPanel dispatch={this.props.dispatch} />
          {this.renderWorkers()}
        </div>
      </div>
    );
  }

}

export default CSSModules(WorkersList, styles);
