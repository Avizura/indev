import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { fetchWorkers, fetchWorkersRanks } from "../../common/api/workers";
import { workerShape } from "../shapes";

import Header from "../../common/components/Header";
import WorkersList from "../components/WorkersList";

import '../../assets/styles.less';

class App extends React.PureComponent {
  static propTypes = {
    dispatch: PropTypes.func,
    editableWorker: workerShape,
    loading: PropTypes.bool,
    workers: PropTypes.arrayOf(workerShape),
    workersRanks: PropTypes.arrayOf(PropTypes.object)
  };

  componentDidMount() {
    this.props.dispatch(fetchWorkers);
    this.props.dispatch(fetchWorkersRanks);
  }

  render() {
    const { loading, workers, workersRanks, editableWorker, dispatch } = this.props;
    return (
      <main className="layout-page">
        <Header />
        {!loading &&
          <WorkersList
            workers={workers}
            workersRanks={workersRanks}
            editableWorker={editableWorker}
            dispatch={dispatch}
          />
        }
        {loading && <div className="spinner" />}
      </main>
    );
  }
}

function select(state) {
  const loading = state.ui.loading;
  const workers = state.workers.workers;
  const workersRanks = state.workers.workersRanks;
  const editableWorker = state.workers.editableWorker;

  return {
    loading,
    workers,
    workersRanks,
    editableWorker
  };
}

export default connect(select)(App);
