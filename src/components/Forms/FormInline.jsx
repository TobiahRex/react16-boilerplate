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
  groupWidth,
  inputWidth,
  onSubmit,
  buttons,
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
      <React.Fragment>
        {buttons.map(({ type, title, btnShape, bsStyle }, key) => {
          return (
            <span key={type + key}>
              <Button
                type={type}
                bsStyle={bsStyle}
                fill={btnShape === 'fill'}
                round={btnShape === 'round'}
                simple={btnShape === 'simple'}
                block={btnShape === 'block'}
              >
                {title}
              </Button>
              {'    '}
            </span>
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
