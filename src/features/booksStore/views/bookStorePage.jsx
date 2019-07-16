import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { withStyles } from '@material-ui/core/styles';
import { Grid, CircularProgress } from '@material-ui/core';
import BookCard from './bookCard';
import { bookStoreOperations } from '../redux';

class BookStorePage extends Component {
  async componentDidMount() {
    await this.props.getBooks();
  }

  render() {
    const { classes, books } = this.props;
    return (
      <Grid container className={classes.root}>
        <Grid item xs={12} className={classes.booksContainer}>
          <Grid container justify="center" spacing={24}>
            {books.length > 0 ? (
              books.map(book => (
                <Grid key={book.volumeInfo.title} item>
                  <BookCard book={book} />
                </Grid>
              ))
            ) : (
              <CircularProgress size={32} />
            )}
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

const mapDispatchToProps = {
  getBooks: bookStoreOperations.getBooks
};
const styles = {
  root: {
    flexGrow: 1,
    padding: '0 10%'
  },
  booksContainer: {
    paddingTop: '5%'
  }
};

export default compose(
  connect(
    null,
    mapDispatchToProps
  ),
  withStyles(styles)
)(BookStorePage);
