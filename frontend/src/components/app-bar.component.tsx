import { useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AppBar, Toolbar, Typography, Container, Button } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';

const ApplicationBar = () => {
    const navigate = useNavigate();

    const logout = useCallback(() => {
        localStorage.removeItem('github_token');
        toast.success('Wylogowano poprawnie.');
        return navigate('/');
    }, [navigate]);

    return (
        <AppBar
            position="static"
            sx={{ background: (theme) => theme.palette.primary.dark }}
        >
            <Container maxWidth="xl">
                <Toolbar
                    disableGutters
                    sx={{ justifyContent: 'space-between' }}
                >
                    <Link
                        to={'/repositories'}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            color: '#F8F7FF',
                            textDecoration: 'none',
                            width: 'fit-content',
                        }}
                    >
                        <GitHubIcon sx={{ mr: 1 }} />
                        <Typography
                            variant="h5"
                            sx={{
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                color: (theme) => theme.palette.primary.light,
                                textDecoration: 'none',
                            }}
                        >
                            READER
                        </Typography>
                    </Link>
                    <Button
                        onClick={logout}
                        variant="contained"
                        sx={{
                            color: (theme) => theme.palette.primary.dark,
                            fontWeight: 'bold',
                            background: (theme) => theme.palette.gray.light,
                            '&:hover': {
                                background: (theme) => theme.palette.gray.hover,
                            },
                        }}
                    >
                        Wyloguj
                    </Button>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default ApplicationBar;

