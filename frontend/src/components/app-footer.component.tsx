import { Link } from 'react-router-dom';
import { Typography, Container, Box } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';

const ApplicationFooter = () => {
    return (
        <Box sx={{ background: (theme) => theme.palette.primary.dark }}>
            <Container maxWidth="xl" sx={{ p: 2 }}>
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: { xs: 'start', sm: 'center' },
                        justifyContent: 'space-between',
                        flexDirection: { xs: 'column', sm: 'row' },
                        gap: 1,
                    }}
                >
                    <Link
                        to={'/repositories'}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            color: (theme) => theme.palette.primary.light,
                            textDecoration: 'none',
                            width: 'fit-content',
                            gap: 2,
                        }}
                    >
                        <GitHubIcon
                            sx={{
                                color: (theme) => theme.palette.primary.light,
                            }}
                        />
                        <Typography
                            variant="h5"
                            sx={{
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                color: '#fff',
                                ml: 1,
                                textDecoration: 'none',
                            }}
                        >
                            READER
                        </Typography>
                    </Link>
                    <Link to={'https://github.com/SSmela99'} target="_blank">
                        <Box
                            sx={{
                                color: '#fff',
                                display: 'flex',
                                alignItems: 'center',
                            }}
                        >
                            <GitHubIcon sx={{ mr: 1 }} />
                            <Typography sx={{ textDecoration: '' }}>
                                Sebastian Smela
                            </Typography>
                        </Box>
                    </Link>
                </Box>
            </Container>
        </Box>
    );
};

export default ApplicationFooter;

