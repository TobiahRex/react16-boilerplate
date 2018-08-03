/* eslint-disable lines-between-class-members, react/prop-types */
import React, { Component } from 'react';
import {
  Form,
  FormGroup,
  ControlLabel,
  FormControl,
  Row
} from 'react-bootstrap';
import Button from '../CustomButton/CustomButton';

function FieldGroup({
  label,
  bsStyle,
  groupWidth,
  inputWidth,
  onSubmit,
  btnShape,
  ...props
}) {
  return (
    <Form inline>
      <FormGroup controlId="inline-form" className={groupWidth}>
        <ControlLabel>{label}</ControlLabel>
        {'   '}
        <FormControl {...props} />
      </FormGroup>
      {'  '}
      <Button
        type="button"
        bsStyle={bsStyle}
        fill={btnShape === 'fill'}
        round={btnShape === 'round'}
        simple={btnShape === 'simple'}
        block={btnShape === 'block'}
      >
        Save
      </Button>
    </Form>
  );
}

export class FormInline extends Component {
  render() {
    const { ncols, properties } = this.props;
    const row = [];
    for (let i = 0; i < ncols.length; i += 1) {
      row.push(
        <div key={i} className={ncols[i]}>
          <FieldGroup {...properties[i]} />
        </div>
      );
    }
    return <Row>{row}</Row>;
  }
}

export default FormInline;
