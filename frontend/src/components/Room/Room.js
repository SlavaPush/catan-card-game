import React, {useState} from 'react';
import  {useDispatch} from 'react-redux';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {playerName,gameId,allCardRandomUpdate,giveCards} from '../../Redux/actions'
import axios from 'axios'

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default function Room({history}) {
    const classes = useStyles();
    const [player_1, setPlayer_1] = useState('');
    const [player_2, setPlayer_2] = useState('');
    const dispatch = useDispatch()

    const onSubmit = async (e) => {
        e.preventDefault();
        dispatch(playerName('player1', player_1))
        dispatch(playerName('player2',player_2))
        let roomId = await axios('/createRoom')
        dispatch(gameId(roomId.data.id))
        dispatch(allCardRandomUpdate())
        dispatch(giveCards(5, "cards", 'player1'))
        dispatch(giveCards(5, "cards", 'player2'))
        dispatch(giveCards(5, "marketCards"))
        history.push(`/game/${roomId.data.id}/player1`);
    };




    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Войти
                </Typography>
                <div className={classes.form}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="player_1"
                        label="Игрок 1"
                        name="player_1"
                        autoComplete="email"
                        autoFocus
                        onChange={(e) => {setPlayer_1(e.target.value)}}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="player_2"
                        label="Игрок 2"
                        type="text"
                        id="player_2"
                        autoComplete="current-password"
                        onChange={(e) => {setPlayer_2(e.target.value)}}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        onClick={onSubmit}
                    >
                        Начать игру
                    </Button>
                </div>
            </div>
        </Container>
    );
}

