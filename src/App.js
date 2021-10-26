import React from 'react';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Values from 'values.js';
import { useState } from 'react';
import Colors from './Colors';
import { red } from '@material-ui/core/colors';

const styles = makeStyles({
    formstyle: {
        display: "flex",
        alignItems: "center",
        marginTop: 30,
        marginLeft: 20,
        marginBottom: 20
    },
    inputstyle: {
        marginLeft: 20,
    },
    colorstyle: {
    }
})

export default function App() {

    const classes = styles();

    const[color,setColor] = useState();

    const[lists,setLists] = useState(new Values('#f15025').all(10));

    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            let item = new Values(color).all(10);
            setLists(item);
        } catch (error) {
            alert("invalid input");
        }
    }

    return (
        <div>
            <div className={classes.formstyle}>
                <Typography variant="h5">Color Generator</Typography>
                <form onSubmit={handleSubmit}>
                    <TextField id="color" name="color" label="color" size="small" variant="outlined" className={classes.inputstyle} value={color} onChange={(e) => setColor(e.target.value)}/>
                    <Button variant="contained" type="submit" color="primary">Submit</Button>
                </form>
            </div>
            <Grid container>
                {lists.map((list,index) => {
                    return  <Grid item md={2}>
                        <Colors key={index} {...list} index={index} />
                        </Grid>
                })}
                </Grid>
        </div>
    )
}