import { Avatar, Box, List, ListItem, Typography } from '@mui/material';

interface IssuesProps {
    issues: {
        nodes: Issue[];
        totalCount: number;
    };
}

const Issues = ({ issues }: IssuesProps) => {
    if (!issues.nodes.length) {
        return (
            <Box sx={{ mt: { xs: 4, md: 8 } }}>
                <Typography variant="h6" sx={{ my: 1 }}>
                    Otwarte wątki z problemami:
                </Typography>
                <Typography sx={{ fontSize: '14px' }}>
                    Nie ma otwartych żadnych wątków
                </Typography>
            </Box>
        );
    }

    return (
        <Box sx={{ mt: { xs: 4, md: 8 } }}>
            <Typography variant="h6" sx={{ my: 1 }}>
                Otwarte wątki z problemami (Łącznie: {issues.totalCount}):
            </Typography>
            <List>
                {issues.nodes.map((issue, index) => (
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
                                fontWeight: 'bold',
                                color: (theme) => theme.palette.primary.light,
                                mb: 1,
                            }}
                        >
                            {issue.title}
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
                                src={issue.author.avatarUrl}
                                alt={issue.author.login}
                                sx={{ width: 24, height: 24, mr: 1 }}
                            />
                            <Typography component="span">
                                {issue.author.login}
                            </Typography>
                        </Box>

                        <Box
                            sx={{
                                color: (theme) => theme.palette.primary.light,
                            }}
                        >
                            <Typography
                                component="span"
                                sx={{ fontWeight: 'medium' }}
                            >
                                Opis:
                            </Typography>
                            <Typography sx={{ fontSize: '14px', mt: 1 }}>
                                {issue.body || 'Brak opisu'}
                            </Typography>
                        </Box>

                        <Box
                            sx={{
                                display: 'flex',
                                color: (theme) => theme.palette.primary.light,
                                gap: 1,
                                mt: 2,
                            }}
                        >
                            <Typography component="span">
                                Data utworzenia:
                            </Typography>
                            <Typography
                                component="span"
                                sx={{ fontSize: '14px' }}
                            >
                                {new Date(issue.createdAt).toLocaleDateString()}
                            </Typography>
                        </Box>
                    </ListItem>
                ))}
            </List>
        </Box>
    );
};

export default Issues;

