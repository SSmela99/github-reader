import { Box, Button, Typography } from '@mui/material';

interface ErrorProps {
    message: string;
    btnMessage: string;
    href: string;
}

const Error = ({ message, btnMessage, href }: ErrorProps) => {
    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                height: 'calc(100vh - 64px)',
                color: (theme) => theme.palette.primary.light,
                gap: 2,
            }}
        >
            <Typography sx={{ textAlign: 'center' }}>{message}</Typography>

            <Button variant="contained" href={href}>
                {btnMessage}
            </Button>
        </Box>
    );
};

export default Error;

