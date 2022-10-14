import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles({
    container:{
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        // marginTop: '10%'
    },
    data:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    number:{
        fontSize: '2.5vw',
        color: "#6CCACB",
    },
    main_number:{
        fontSize: '4vw'
    },
    time:{
        fontSize: '1.5vw'
    },
    title:{
        fontSize: '2vw',
        color: "#6CCACB"
    }
});

const Data = () => {

    const classes = useStyles();
    return (
        <div className={classes.container}>
            <div className={classes.data}>
                <Typography className={classes.number}>0.25%</Typography>
                <Typography className={classes.time}>5 Min</Typography>
            </div>

            <div className={classes.data}>
                <Typography className={classes.number}>0.234%</Typography>
                <Typography className={classes.time}>1 Hour</Typography>
            </div>

            <div className={classes.data}>
                <Typography className={classes.title}>Best Price to Trade</Typography>
                <Typography className={classes.main_number}>&#8377; 45,33,859</Typography>
                <Typography className={classes.time}>Average BTC/INR net price including commission</Typography>
            </div>

            <div className={classes.data}>
                <Typography className={classes.number}>4.28%</Typography>
                <Typography className={classes.time}>1 Day</Typography>
            </div>

            <div className={classes.data}>
                <Typography className={classes.number}>8.89%</Typography>
                <Typography className={classes.time}>7 Day</Typography>
            </div>
        </div>
    )
}

export default Data;