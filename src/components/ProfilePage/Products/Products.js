import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 230,
  },
});

export default function Products(props) {
  const { name, description, category, price, id } = props;
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h5" component="h2">
        {name}
        </Typography>
        <Typography variant="h5" component="h2">
          {description}
        </Typography>
        <Typography variant="h5" component="h2">
          {category}
        </Typography>
        <Typography variant="h5" component="h2">
          {price}
        </Typography>
      </CardContent>
    </Card>
  );
}
