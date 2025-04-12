import { useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Typography } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';

const Login = () => {
    const handleLogin = useCallback(() => {
        window.location.replace('http://localhost:4000/auth/github');
    }, []);

    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('github_token');
        if (token) {
            navigate('/repositories');
        }
    }, [navigate]);

    return (
        <Box
            sx={{
                background: (theme) => theme.palette.primary.dark,
                height: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Box>
                <Box
                    sx={{
                        color: (theme) => theme.palette.primary.light,
                        display: 'flex',
                        justifyContent: 'center',
                        alignContent: 'center',
                        mb: 2,
                    }}
                >
                    <GitHubIcon sx={{ mr: 1 }} />
                    <Typography>READER</Typography>
                </Box>
                <Button
                    variant="contained"
                    sx={{
                        background: (theme) => theme.palette.gray.light,
                        '&:hover': {
                            background: (theme) => theme.palette.gray.hover,
                        },
                        color: (theme) => theme.palette.primary.dark,
                        fontWeight: 600,
                    }}
                    onClick={handleLogin}
                >
                    Zaloguj się poprzez GitHub
                </Button>
            </Box>
        </Box>
    );
};

export default Login;

