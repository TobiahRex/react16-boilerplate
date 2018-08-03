/* eslint-disable react/prefer-stateless-function, react/jsx-wrap-multilines, lines-between-class-members */

import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Row, Col, Table } from 'react-bootstrap';
import Card from '../../components/Card/Card'; // eslint-disable-line

const { arrayOf, str } = PropTypes;

class CrudTable extends React.Component {
  static propTypes = {
    list: arrayOf(str)
  };

  static defaultProps = {
    list: []
  };

  render() {
    const { list } = this.props;
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={12}>
              <Card
                title="Data"
                category="List of data"
                ccTableFullWidth
                ccTableResponsive
                content={
                  <Table striped hover>
                    <thead>
                      <tr>Data</tr>
                    </thead>
                    <tbody>
                      {list.map((data, key) => {
                        return <tr key={data + key}>{data}</tr>;
                      })}
                    </tbody>
                  </Table>
                }
              />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default CrudTable;
