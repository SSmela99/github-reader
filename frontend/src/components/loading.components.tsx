import { Box, CircularProgress, Typography } from '@mui/material';

const Loading = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                height: 'calc(100vh - 64px)',
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <CircularProgress />
                <Typography sx={{ mt: 2, fontSize: '14px', color: '#fff' }}>
                    Ładowanie
                </Typography>
            </Box>
        </Box>
    );
};

export default Loading;

