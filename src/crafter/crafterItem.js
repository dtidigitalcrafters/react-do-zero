import React, { Component } from 'react';
import {
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  Typography,
  ListItemText
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const CrafterItem = (props) => {
  const { classes, crafter } = props;
  return (
    <ListItem alignItems="flex-start">
      <ListItemAvatar>
        <Avatar alt="Remy Sharp" src={crafter.urlAvatar} />
      </ListItemAvatar>
      <ListItemText
        primary={crafter.nome}
        secondary={
          <React.Fragment>
            <Typography
              component="span"
              className={classes.inline}
              color="textPrimary"
            >
              {crafter.email}
            </Typography>
            {" — I'll be in your neighborhood doing errands this…"}
          </React.Fragment>
        }
      />
    </ListItem>
  );
};

const styles = theme => ({
  inline: {
    display: 'inline'
  }
});
export default  withStyles(styles)(CrafterItem);
