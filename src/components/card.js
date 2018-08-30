import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    marginTop: 10,
    minWidth: 200,
    maxWidth: 300,
  },
};

function TodoCard(props) {
  const { classes, title, description } = props;

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
    </Card>
  );
}

TodoCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TodoCard);
