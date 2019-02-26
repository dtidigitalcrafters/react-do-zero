import React, { Component, PureComponent } from 'react';
import CrafterItem from './crafterItem';
import { withStyles } from '@material-ui/core/styles';
import { List, Paper } from '@material-ui/core/';

class CrafterList extends Component {

  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.crafters !== this.props.crafters;
  }
  
  renderCrafters = () => {
    const { crafters } = this.props;
    return crafters.map((crafter, index) => (
      <CrafterItem key={`${crafter.nome}-${index}`} crafter={crafter} />
    ));
  };
  
  render() {
    console.log('render list');
    const { classes } = this.props;
    return (
      <Paper style={{minWidth: 600,  marginTop: 50,}}>
        <List className={classes.root}>{this.renderCrafters()}</List>
      </Paper>
    );
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
