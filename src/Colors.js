import { makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import rgbToHex from './helper';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import IconButton from '@material-ui/core/IconButton';

const styles = makeStyles({
    textstyle: {
        color: "white",
    },
    root: {
        display: "flex",
        justifyContent: "space-between"
    },
})

export default function Colors({rgb, weight, index}) {

    const classes = styles();

    const bclr = rgb.join(',')

    const code = rgbToHex(...rgb);

    return (
        <div style={{backgroundColor: `rgb(${bclr})`,height: "150px"}}>
            <div className={classes.root}>
        <Typography className={index >= 10 ? classes.textstyle : null}>{weight}</Typography>
        <IconButton onClick={() => navigator.clipboard.writeText(code)}>
        <FileCopyIcon className={index >= 10 ? classes.textstyle : null} />
        </IconButton>
        </div>
        <Typography className={index >= 10 ? classes.textstyle : null}>{code}</Typography>
        </div>
    )
}