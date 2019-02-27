import React, { Component } from 'react';
import CrafterItem from './crafterItem';
import { withStyles } from '@material-ui/core/styles';
import { List, Paper, Divider } from '@material-ui/core/';

class CrafterList extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.crafters !== this.props.crafters;
  }

  renderCrafters = () => {
    const { crafters } = this.props;
    return crafters.map((crafter, index) => (
      <React.Fragment>
        <CrafterItem key={`${crafter.nome}-${index}`} crafter={crafter} />
        {index !== crafters.length - 1 ? <Divider /> : null}
      </React.Fragment>
    ));
  };

  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.containerList}>
        <List>{this.renderCrafters()}</List>
      </Paper>
    );
  }
}
const styles = theme => ({
  containerList: {
    marginTop: 20
  }
});

export default withStyles(styles)(CrafterList);
