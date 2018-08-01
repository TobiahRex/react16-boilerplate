import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  CardHeader,
  CardActions,
  CardContent,
  Button,
  Typography
} from '@material-ui/core';

export default class muiCard extends PureComponent {
  static defaultProps = {
    thing: ''
  };
  static propTypes = {
    thing: PropTypes.string
  };
  render() {
    const { thing } = this.props;
    return (
      <Card>
        <CardHeader title="Card Template" subtitle="reusable component" />
        <CardContent>
          <Typography>Props: {thing || "'empty'"}</Typography>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Typography>
          <CardActions>
            <Button label="Button 1" primary />
            <Button label="Button 2" secondary />
          </CardActions>
        </CardContent>
      </Card>
    );
  }
}
