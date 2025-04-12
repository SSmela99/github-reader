import { Link } from 'react-router-dom';
import { Card, Grid, Typography } from '@mui/material';

interface RepositoriesProps {
    repos: Repository[];
}

const handleDescription = (description) => {
    if (!description) return 'Brak opisu';
    if (description.length > 50) {
        return description.slice(0, 50) + '...';
    }
    return description;
};

const Repositories = ({ repos }: RepositoriesProps) => {
    return (
        <Grid container spacing={2}>
            {repos.map((repo) => (
                <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={repo.id}>
                    <Link
                        to={`/repository/${repo.name}`}
                        style={{ textDecoration: 'none' }}
                    >
                        <Card
                            sx={{
                                p: 4,
                                background: (theme) => theme.palette.gray.light,
                                height: '100%',
                                transition: 'background-color 0.3s',
                                '&:hover': {
                                    background: (theme) =>
                                        theme.palette.gray.hover,
                                    boxShadow: 3,
                                },
                            }}
                        >
                            <Typography
                                sx={{
                                    color: (theme) =>
                                        theme.palette.primary.dark,
                                    fontWeight: 600,
                                }}
                            >
                                {repo.name}
                            </Typography>
                            <Typography
                                sx={{
                                    fontSize: '12px',
                                    fontStyle: 'italic',
                                    color: (theme) => theme.palette.gray.main,
                                }}
                            >
                                {handleDescription(repo.description)}
                            </Typography>
                        </Card>
                    </Link>
                </Grid>
            ))}
        </Grid>
    );
};

export default Repositories;

