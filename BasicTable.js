import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


const styles = theme => ({
  root: {
    display: 'flex',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'hide',
  },
  table: {
    minWidth: 340,
  },
  tableCell: {
    paddingRight: 4,
    paddingLeft: 5,
    textAlign: 'center',
    fontSize: '2vw',
    cellPadding: '10px'
  },
  image_div:{
    width: '95%',
    height:'auto',
    margin: 'auto'
  },
  image:{
    width: '100%',
    height: '100%',
    objectFit: 'contain'
  }
});

let id = 0;
function createData(name, calories, fat, carbs, protein,burger) {
  id += 1;
  return { id, name, calories, fat, carbs, protein,burger };
}

const data = [
  createData(1, 'WazirX',' ₹ 49,09,134', '₹ 48,96,118 / ₹ 49,09,134', '8.62 %','▲ ₹ 3,89,585'),
  createData(2, 'BitBns', '₹ 48,96,372', '₹ 48,89,420 / ₹ 48,96,372', '8.34 %','▲ ₹ 3,76,824'),
  createData(3, 'Giotus', '₹ 49,00,000', '₹ 49,00,000 / ₹ 49,01,500', '8.42 %','▲ ₹ 3,80,451'),
  createData(4, 'Colodax', '₹ 25,83,138', '₹ 25,75,167 / ₹ 26,08,984', '-42.85 %','▼ ₹ 19,36,410'),
  createData(5, 'ZebPay', '₹ 49,30,000', '₹ 49,30,000 / ₹ 49,20,000', '9.08 %','▲ ₹ 4,10,451'),
  createData(6, 'CoinDCX', '₹ 48,98,646', '₹ 48,90,000 / ₹ 48,90,200', '8.39 %','▲ ₹ 3,79,097'),
];

function SimpleTable(props) {
  const { classes } = props;

  return (
    <>
    <div className={classes.image_div}>
      <img src={`https://hodlinfo.com/static/media/cryptonews.54869ee3.png`}
            alt="Banner"
            className={classes.image}
        />
    </div>

    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell className={classes.tableCell}>#</TableCell>
            <TableCell numeric className={classes.tableCell}>Platform</TableCell>
            <TableCell numeric className={classes.tableCell}>Last Traded Price</TableCell>
            <TableCell numeric className={classes.tableCell}>Buy / Sell Price</TableCell>
            <TableCell numeric className={classes.tableCell}>Difference</TableCell>
            <TableCell numeric className={classes.tableCell}>Savings</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(n => {
            return (
              <TableRow key={n.id}>
                <TableCell component="th" scope="row" className={classes.TableCell}>
                  {n.name}
                </TableCell>
                <TableCell numeric className={classes.tableCell}>{n.calories}</TableCell>
                <TableCell numeric className={classes.tableCell}>{n.fat}</TableCell>
                <TableCell numeric className={classes.tableCell}>{n.carbs}</TableCell>
                <TableCell numeric className={classes.tableCell}>{n.protein}</TableCell>
                <TableCell numeric className={classes.tableCell}>{n.burger}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
    <div className={classes.image_div}>
      <img src={`https://hodlinfo.com/static/media/BannerFTXNews.d0cd974b.png`}
            alt="Banner"
            className={classes.image}
        />
    </div>
    </>
  );
}

SimpleTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTable);