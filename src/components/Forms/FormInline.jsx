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
  inputData,
  onChange,
  onSubmit,
  label,
  type,
  groupWidth,
  inputWidth,
  buttons,
  ...props
}) {
  return (
    <Form inline onSubmit={onSubmit}>
      <FormGroup controlId="inline-form" className={groupWidth}>
        <ControlLabel>{label}</ControlLabel>
        {'   '}
        <FormControl
          type={type}
          {...props}
          value={inputData}
          onChange={onChange}
        />
      </FormGroup>
      {'  '}
      <React.Fragment>
        {buttons.map((prop, key) => {
          return (
            <React.Fragment key={prop.type + key}>
              <Button
                type={prop.type}
                bsStyle={prop.bsStyle}
                fill={prop.btnShape === 'fill'}
                round={prop.btnShape === 'round'}
                simple={prop.btnShape === 'simple'}
                block={prop.btnShape === 'block'}
                {...prop}
              >
                {prop.title}
              </Button>
              {'    '}
            </React.Fragment>
          );
        })}
      </React.Fragment>
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
