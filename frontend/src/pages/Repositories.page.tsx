import { useMemo } from 'react';
import { useQuery } from '@apollo/client';
import { Box, Typography } from '@mui/material';
import { GET_REPOS } from '../utils/api';
import Loading from '../components/loading.components';
import Repositories from '../components/repositories/index.component';
import withLayout from '../components/hoc/layout.component';
import Error from '../components/error.component';

const RepositoriesPage = () => {
    const { data, loading, error } = useQuery(GET_REPOS);

    const repos = useMemo(
        () => data?.viewer?.repositories.nodes,
        [data?.viewer?.repositories.nodes],
        [],
    );

    if (loading) return <Loading />;
    if (error) {
        return (
            <Error
                message={error.message}
                btnMessage="Spróbuj ponownie"
                href="/repositories"
            />
        );
    }

    return (
        <Box sx={{ color: (theme) => theme.palette.primary.light }}>
            <Typography variant="h4" sx={{ py: 2 }}>
                Lista repozytoriów
            </Typography>
            <Repositories repos={repos} />
        </Box>
    );
};

RepositoriesPage.displayName = 'RepositoriesPage';

const RepositoriesPageWithLayout = withLayout(RepositoriesPage);
export default RepositoriesPageWithLayout;

