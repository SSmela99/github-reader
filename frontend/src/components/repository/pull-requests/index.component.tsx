import { Avatar, Box, List, ListItem, Typography } from '@mui/material';

interface PullRequestsProps {
    pullRequests: {
        nodes: PullRequest[];
        totalCount: number;
    };
}

const PullRequests = ({ pullRequests }: PullRequestsProps) => {
    if (!pullRequests.nodes.length) {
        return (
            <Box sx={{ mt: { xs: 4, md: 8 } }}>
                <Typography variant="h6" sx={{ my: 1 }}>
                    Otwarte pull requesty:
                </Typography>
                <Typography sx={{ fontSize: '14px' }}>
                    Brak otwartych pull requestów
                </Typography>
            </Box>
        );
    }

    return (
        <Box sx={{ mt: { xs: 4, md: 8 } }}>
            <Typography variant="h6" sx={{ my: 1 }}>
                Otwarte pull requesty (Łącznie: {pullRequests.totalCount}):
            </Typography>
            <List>
                {pullRequests.nodes.map((pr, index) => (
                    <ListItem
                        key={index}
                        alignItems="flex-start"
                        sx={{
                            display: 'block',
                            borderBottom: '1px solid #fff',
                            mb: 2,
                        }}
                    >
                        <Typography
                            variant="subtitle1"
                            sx={{
                                textTransform: 'uppercase',
                                fontWeight: 'bold',
                                color: 'primary.main',
                                mb: 1,
                            }}
                            component="a"
                            href={pr.url}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {pr.title}
                        </Typography>

                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                color: (theme) => theme.palette.primary.light,
                                mb: 1,
                            }}
                        >
                            <Avatar
                                src={pr.author.avatarUrl}
                                alt={pr.author.login}
                                sx={{ width: 24, height: 24, mr: 1 }}
                            />
                            <Typography component="span">
                                {pr.author.login}
                            </Typography>
                        </Box>

                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: 1,
                                color: (theme) => theme.palette.primary.light,
                            }}
                        >
                            <Typography component="span">Status:</Typography>
                            <Typography
                                component="span"
                                sx={{ fontSize: '14px' }}
                            >
                                {pr.state}
                            </Typography>
                        </Box>

                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: 1,
                                color: (theme) => theme.palette.primary.light,
                                mt: 1,
                            }}
                        >
                            <Typography component="span">
                                Data utworzenia:
                            </Typography>
                            <Typography
                                component="span"
                                sx={{ fontSize: '14px' }}
                            >
                                {new Date(pr.createdAt).toLocaleDateString()}
                            </Typography>
                        </Box>
                    </ListItem>
                ))}
            </List>
        </Box>
    );
};

export default PullRequests;

