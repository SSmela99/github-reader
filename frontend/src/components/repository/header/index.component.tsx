import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import ForkRightIcon from '@mui/icons-material/ForkRight';
import StarIcon from '@mui/icons-material/Star';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import RepositoryStatistic from './statistic.component';

interface RepositoryHeaderProps {
    repo: Repository;
}

const RepositoryHeader = ({ repo }: RepositoryHeaderProps) => {
    const stats = useMemo(() => {
        return [
            {
                label: 'Watch',
                count: repo.watchers.totalCount,
                icon: <RemoveRedEyeIcon sx={{ mb: 0.2 }} fontSize="small" />,
            },
            {
                label: 'Fork',
                count: repo.forkCount,
                icon: <ForkRightIcon sx={{ mb: 0.3 }} fontSize="small" />,
            },
            {
                label: 'Starred',
                count: repo.stargazerCount,
                icon: <StarIcon sx={{ mb: 0.3 }} fontSize="small" />,
            },
        ];
    }, [repo.forkCount, repo.stargazerCount, repo.watchers.totalCount]);

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: { xs: 'start', md: 'center' },
                flexDirection: { xs: 'column', md: 'row' },
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                    flexWrap: 'wrap',
                    mb: 1,
                }}
            >
                <Typography variant="h4" sx={{ py: 2 }}>
                    {repo.name}
                </Typography>
                <Box
                    sx={{
                        fontSize: '12px',
                        border: '1px solid #AEB7B3',
                        borderRadius: 1,
                        p: 0.5,
                    }}
                >
                    {repo.isPrivate ? 'Prywatne' : 'Publiczne'}
                </Box>
                <Link to={repo.url} target="_blank">
                    <OpenInNewIcon
                        sx={{
                            mt: 1,
                            color: (theme) => theme.palette.primary.light,
                        }}
                        fontSize="small"
                    />
                </Link>
            </Box>

            <Box
                sx={{
                    display: 'flex',
                    gap: 1,
                    mb: { xs: 2, md: 0 },
                    flexDirection: { xs: 'column', md: 'row' },
                }}
            >
                {stats.map((stat, index) => (
                    <RepositoryStatistic
                        key={index}
                        label={stat.label}
                        count={stat.count}
                        icon={stat.icon}
                    />
                ))}
            </Box>
        </Box>
    );
};

export default RepositoryHeader;

