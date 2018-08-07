/* eslint-disable react/prefer-stateless-function, react/jsx-wrap-multilines, lines-between-class-members */

import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Row, Col, Table } from 'react-bootstrap';
import Card from '../../components/Card/Card'; // eslint-disable-line

const { arrayOf, any } = PropTypes;

class CrudTable extends React.Component {
  static propTypes = {
    list: arrayOf(any)
  };

  static defaultProps = {
    list: []
  };

  render() {
    const list = [
      { _id: '12312123123123', name: 'Somethign 1' },
      { _id: '098234234234234', name: 'Something 2' }
    ];
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
                  <Table striped>
                    <tbody>
                      {list.map(data => {
                        return (
                          <tr key={data._id}>
                            <td>{data.name}</td>
                          </tr>
                        );
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
