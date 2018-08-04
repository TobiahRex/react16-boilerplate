/* eslint-disable react/prefer-stateless-function, react/jsx-wrap-multilines, lines-between-class-members */

import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Row, Col, Table } from 'react-bootstrap';
import Card from '../../components/Card/Card'; // eslint-disable-line

const { arrayOf, string } = PropTypes;

class CrudTable extends React.Component {
  static propTypes = {
    list: arrayOf(string)
  };

  static defaultProps = {
    list: ['thing1', 'thing2']
  };

  render() {
    // const { list } = this.props;
    const list = ['list1', 'list2'];
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
                    <tbody>
                      {list.map((data, key) => {
                        return (
                          <tr key={data + key}>
                            <td>{data}</td>
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
