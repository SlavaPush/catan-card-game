import React, {useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
// import bcrypt from "bcryptjs";
import axios from "axios";
import Box from "@material-ui/core/Box";
import setupsocket from '../../sockets/socket';

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

export default function SignIn({history}) {
    const classes = useStyles();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [validUser, setValidUser] = useState(null);

    const onSubmit = async (e) => {
        e.preventDefault();
        // const hashPass = await bcrypt.hash(password, 10);
        setupsocket('test');

        try{
            const response = await axios({
                method: 'post',
                url: '/auth/login',
                data: {
                    email,
                    password
                }
            });
            const {data: {message}} = response;
            if (message) {
                setValidUser(message);
                setEmail('');
                setPassword('');
            }
        }catch (e) {
            console.log('LOGIN ERROR', e)
        }

    };

    const onRegister = (e) => {
        e.preventDefault();
        history.push('/auth/register');
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
                        id="email"
                        label="E-mail"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Пароль"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {validUser ? <Box color="error.main">Неверный e-mail или пароль</Box> : null}
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        onClick={onSubmit}
                    >
                        Войти
                    </Button>
                    <Grid container>
                        <Grid item xs>
                            <Link href="/auth/register" variant="body2"
                            onClick={onRegister}>
                                {"Ещё нет аккаунта? Зарегестрируйтесь"}
                            </Link>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </Container>
    );
}
