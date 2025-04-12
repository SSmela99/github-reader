import { useNavigate } from 'react-router-dom';
import { Box, Button, Typography } from '@mui/material';

const NotFound = () => {
    const navigate = useNavigate();

    const goHome = () => {
        navigate('/');
    };

    return (
        <Box
            sx={{
                height: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#111111',
                color: '#fff',
                flexDirection: 'column',
                textAlign: 'center',
            }}
        >
            <Typography variant="h3" sx={{ mb: 3 }}>
                404
            </Typography>
            <Typography variant="h5" sx={{ mb: 3 }}>
                Strona nie znaleziona
            </Typography>
            <Button
                variant="contained"
                sx={{
                    background: '#AEB7B3',
                    color: '#111111',
                    fontWeight: 'bold',
                }}
                onClick={goHome}
            >
                Wróć do strony głównej
            </Button>
        </Box>
    );
};

export default NotFound;

