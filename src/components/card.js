import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import DeleteIcon from '@material-ui/icons/Delete';

const styles = {
  card: {
    marginTop: 10,
    minWidth: 200,
    maxWidth: 300,
  },
  actions: {
    display: 'flex',
  },
};

class TodoCard extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      color: 'default',
    };

    this.handleChangeColor = this.handleChangeColor.bind(this);
  }

  handleChangeColor() {
    console.log(this.state.color);
    if (this.state.color === 'default') {
      this.setState({color: 'secondary'})
    }
    if (this.state.color === 'secondary') {
      this.setState({color: 'default'})
    }
  }

  render() {
    const { classes, title, description, handleDelete, index } = this.props;
    return (
      <Card className={classes.card}>
        <CardContent>
          <Typography variant="headline" component="h2">
            {title}
          </Typography>
          <Typography component="p">
            {description}
          </Typography>
        </CardContent>
        <CardActions className={classes.actions} disableActionSpacing>
            <IconButton
              aria-label="Add to favorites"
              onClick={() => this.handleChangeColor()}
              color={this.state.color}
            >
              <FavoriteIcon />
            </IconButton>
            <IconButton
              aria-label="Delete"
              onClick={() => handleDelete(index)}
            >
              <DeleteIcon />
            </IconButton>
          </CardActions>
      </Card>
    );
  }
}

TodoCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TodoCard);
