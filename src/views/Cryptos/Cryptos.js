/* eslint-disable */

import React from 'react';
import { Grid, Row, Col, Table } from 'react-bootstrap';
import { cryptosTdArray, cryptosThArray } from './variables';

class Cryptos extends React.Component {
  render() {
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={12}>
              <Card
                title="Cryptos"
                category="A few Binance Coins"
                ccTableFullWidth
                ccTableResponsive
                content={
                  <Table striped hover>
                    <thead>
                      <tr>
                        {thArray.map((prop, key) => {
                          return <th key={key}>{prop}</th>;
                        })}
                      </tr>
                    </thead>
                    <tbody>
                      {trArray.map(({
                        _id,
                        symbol,
                        last: price,
                        volume,
                        priceChangePercent,
                        exchange,
                      }, key) => {
                        return (
                          <tr key={_id}>
                            <td>{symbol}</td>
                            <td>{price}</td>
                            <td>{volume}</td>
                            <td>{priceChangePercent}</td>
                            <td>{exchange}</td>
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

_id: '5b5fe92c5e9bc216451b828e',
symbol: 'ETH-BTC',
timeStamp: '2018-07-31T04:55:37.031Z',
volume: 108437.39,
baseVolume: 6098.48898869,
open: 0.056781,
high: 0.056942,
low: 0.055308,
prevDay: 0.05678,
bid: 0.055555,
ask: 0.055564,
last: '0.05552700',
exchange: 'binance',
priceChange: '-0.00122600',
priceChangePercent: '-2.159',
weightedAvgPrice: '0.05623972',
__v: 0
