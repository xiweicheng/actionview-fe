import React, { PropTypes, Component } from 'react';
import { reduxForm } from 'redux-form';
import { Modal, Button, ControlLabel, FormControl, FormGroup, HelpBlock } from 'react-bootstrap';
import _ from 'lodash';
import { notify } from 'react-notify-toast';

const $ = require('$');
const img = require('../../assets/images/loading.gif');

const validate = (values) => {
  const errors = {};
  if (!values.title) {
    errors.title = '必填';
  }
  return errors;
};

@reduxForm({
  form: 'copy_issue',
  fields: [ 'id', 'title' ],
  validate
})
export default class CopyModal extends Component {
  constructor(props) {
    super(props);
    this.state = { ecode: 0, initilizedFlag: false };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  static propTypes = {
    i18n: PropTypes.object.isRequired,
    submitting: PropTypes.bool,
    invalid: PropTypes.bool,
    values: PropTypes.object,
    fields: PropTypes.object,
    handleSubmit: PropTypes.func.isRequired,
    close: PropTypes.func.isRequired,
    data: PropTypes.object.isRequired,
    initializeForm: PropTypes.func.isRequired,
    copy: PropTypes.func.isRequired
  }

  componentWillMount() {
    const { initializeForm, data } = this.props;
    const copyData = _.clone(data);
    _.extend(copyData, { title: '复制 - ' + data.title });
    initializeForm(copyData);
  }

  async handleSubmit() {
    const { values, copy, close } = this.props;
    const ecode = await copy(_.mapKeys(values, function (value, key) { return key == 'id' ? 'source_id' : key }));
    if (ecode === 0) {
      this.setState({ ecode: 0 });
      close();
      notify.show('复制完成。', 'success', 2000);
    } else {
      this.setState({ ecode: ecode });
    }
  }

  handleEntry() {
    $('input[name=title]').select();
  }

  handleCancel() {
    const { close, submitting } = this.props;
    if (submitting) {
      return;
    }
    this.setState({ ecode: 0 });
    close();
  }

  render() {
    const { i18n: { errMsg }, fields: { id, title }, handleSubmit, invalid, submitting, data } = this.props;

    return (
      <Modal { ...this.props } onHide={ this.handleCancel } onEntered={ this.handleEntry } backdrop='static' aria-labelledby='contained-modal-title-sm'>
        <Modal.Header closeButton style={ { background: '#f0f0f0', height: '50px' } }>
          <Modal.Title id='contained-modal-title-la'>{ '复制问题 - ' + data.no }</Modal.Title>
        </Modal.Header>
        <form onSubmit={ handleSubmit(this.handleSubmit) } onKeyDown={ (e) => { if (e.keyCode == 13) { e.preventDefault(); } } }>
        <Modal.Body>
          <FormControl type='hidden' { ...id }/>
          <FormGroup controlId='formControlsText' validationState={ title.touched && title.error ? 'error' : '' }>
            <ControlLabel><span className='txt-impt'>*</span>主题</ControlLabel>
            <FormControl disabled={ submitting } type='text' { ...title } placeholder='主题'/>
            { name.touched && name.error && <HelpBlock style={ { float: 'right' } }>{ name.error }</HelpBlock> }
          </FormGroup>
        </Modal.Body>
        <Modal.Footer>
          <span className='ralign'>{ this.state.ecode !== 0 && !submitting && errMsg[this.state.ecode] }</span>
          <img src={ img } className={ submitting ? 'loading' : 'hide' }/>
          <Button disabled={ submitting || invalid } type='submit'>确定</Button>
          <Button bsStyle='link' disabled={ submitting } onClick={ this.handleCancel }>取消</Button>
        </Modal.Footer>
        </form>
      </Modal>
    );
  }
}
