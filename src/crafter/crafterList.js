import React, { Component, PureComponent } from 'react';
import CrafterItem from './crafterItem';
import { withStyles } from '@material-ui/core/styles';
import { List } from '@material-ui/core/';

class CrafterList extends Component {
  renderCrafters = () => {
    const {crafters} = this.props;
    return crafters.map((crafter, index) => <CrafterItem key={`${crafter.nome}-${index}`} crafter={crafter} />);
  };
  render() {
    const { classes } = this.props;
    return <List className={classes.root}>{this.renderCrafters()}</List>;
  }
}
const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  }
});

export default withStyles(styles)(CrafterList);
