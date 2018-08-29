import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import SaveIcon from '@material-ui/icons/Save';


const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
  iconSmall: {
    fontSize: 20,
  },
});

function IconLabelButton(props) {
  const { classes, type, disabled, variant, color, value, iconClassName, onClick } = props;
  return (
      <Button 
        variant={variant}
        color={color}
        className={classes.button}
        disabled={disabled}
        type={type}
        onClick={onClick}
      >
        {value}
        {iconClassName === 'delete' &&
          <DeleteIcon className={classNames(classes.rightIcon, classes.iconSmall)} />
        }
        {iconClassName === 'save' &&
          <SaveIcon className={classNames(classes.rightIcon, classes.iconSmall)} />
        }
      </Button>
  );
}

IconLabelButton.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(IconLabelButton);