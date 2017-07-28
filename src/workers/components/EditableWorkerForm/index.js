import React from "react";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CSSModules from 'react-css-modules';
import { Field, reduxForm, propTypes } from "redux-form";
import TextField from "material-ui/TextField";
import SelectField from "material-ui/SelectField";
import MenuItem from "material-ui/MenuItem";
import RenderDatePicker from "../../../common/components/DatePicker";
import Button from "../../../common/components/Button";
import { workerShape } from '../../shapes';

import styles from "./workerForm.less";

const renderTextField = ({
  input, label, meta: { touched, error }, ...custom
}) => (
  <TextField
    floatingLabelText={label}
    floatingLabelFixed
    fullWidth
    errorText={touched && error}
    style={{ height: '50px', fontSize: '14px' }}
    errorStyle={{ position: 'absolute', top: '22px', right: '0px' }}
    inputStyle={{ marginTop: '0px' }}
    textareaStyle={{
      height: '120px',
      overflowY: scroll,
      margin: '20px 0px'

    }}
    floatingLabelStyle={{ top: '20px' }}
    {...input}
    {...custom}
  />
);

const renderSelectField = ({
  input, label, meta: { touched, error }, children, ...custom
}) => (
  <SelectField
    floatingLabelText={label}
    floatingLabelFixed
    fullWidth
    errorText={touched && error}
    style={{ height: '50px' }}
    errorStyle={{ position: 'absolute', top: '22px', right: '0px' }}
    inputStyle={{ marginTop: '0px', top: '0px' }}
    hintStyle={{ top: '20px' }}
    listStyle={{ border: '2px solid #2196f3', paddingTop: '0px', paddingBottom: '0px' }}
    floatingLabelStyle={{ top: '20px' }}
    menuItemStyle={{ padding: '0px' }}
    menuStyle={{ top: '30px' }}
    iconStyle={{ top: '-30px' }}
    labelStyle={{ top: '-30px' }}
    selectedMenuItemStyle={{ color: '#ffffff', background: '#2196f3' }}
    {...input}
    onChange={(event, index, value) => input.onChange(value)}
    {...custom}
  >
    {children}
  </SelectField>
);

const WorkerForm = (props) => {
  const {
      worker,
      workersRanks,
      handleSubmit,
      onWorkerDelete
    } = props;
  const selectFieldOptions = workersRanks.map((obj) =>
    <MenuItem key={obj.id} value={obj.name} primaryText={obj.name} />
  );

  return (
    <form styleName="worker-form" onSubmit={handleSubmit}>
      <div styleName="worker-form--subcontainer">
        <div
          styleName="worker-form--image"
          style={{ backgroundImage: `url(${worker.image})` }}
        />
        <div styleName="worker-form--fields">
          <Field name="last_name" component={renderTextField} label="Фамилия" />
          <Field name="first_name" component={renderTextField} label="Имя" />
          <Field name="birth_date" component={RenderDatePicker} label="Дата рождения" />
          <Field name="rank" component={renderSelectField} label="Звание">
            {selectFieldOptions}
          </Field>
        </div>
      </div>
      <Field
        name="description"
        multiLine
        fullWidth
        underlineShow={false}
        component={renderTextField}
        label="Характеристика"
        style={{
          border: '1px solid #bbb',
          boxSizing: 'border-box',
          padding: '10px',
          maxHeight: '172px',
          overflow: 'hidden',
          marginBottom: '20px'
        }}
        floatingLabelStyle={{ top: '30px' }}
      />
      <div styleName="worker-form--controls">
        <Button type="submit" color="primary">Сохранить</Button>
        <Button color="default" onClick={onWorkerDelete}>Удалить</Button>
      </div>
    </form>
  );
};

WorkerForm.propTypes = {
  onWorkerDelete: PropTypes.func.isRequired,
  worker: workerShape,
  workersRanks: PropTypes.arrayOf(PropTypes.object),
  ...propTypes
};

const validate = (values) => {
  const errors = {};
  const requiredFields = ["first_name", "last_name", "birth_date", "rank"];
  requiredFields.forEach((field) => {
    if (!values[field]) {
      errors[field] = "Поле не заполнено";
    }
  });

  return errors;
};

let StyledWorkerForm = CSSModules(WorkerForm, styles);

StyledWorkerForm = reduxForm({
  form: "WorkerForm",
  enableReinitialize: true,
  validate
})(StyledWorkerForm);

StyledWorkerForm = connect(
  (state) => ({
    initialValues: state.workers.editableWorker
  })
)(StyledWorkerForm);

export default StyledWorkerForm;
