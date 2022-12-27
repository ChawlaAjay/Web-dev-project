import React,{useEffect} from "react";
import { Container,AppBar,Typography,Grow,Grid } from '@material-ui/core'
import { useDispatch } from "react-redux";

import {getPosts} from "./actions/posts"
import Posts from "./components/posts/posts";
import Form from "./components/Form/Form";
import useStyles from './styles'

import memories from './images/memories.png'
const App =()=>{
    const classes =useStyles();
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(getPosts())
    },[])

    return (
        <Container maxWidth='lg'>
            <AppBar className={classes.appBar} position="static" color="inherit">
                <Typography className={classes.heading} variant="h2" align="center">Instagram</Typography>
                <img className={classes.image} src={memories} alt="Instagram" height="60" />
            </AppBar>
            <Grow in>
                <container>
                    <Grid justifyContent="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Posts />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form />
                        </Grid>
                    </Grid>
                </container>
            </Grow>
        </Container>
        
    )
}

export default App;