import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { Box, Typography } from '@mui/material';
import { GET_REPO } from '@/utils/api';
import RepositoryHeader from '../components/repository/header/index.component';
import Issues from '../components/repository/issues/index.component';
import PullRequests from '../components/repository/pull-requests/index.component';
import Commits from '../components/repository/commits/index.component';
import Loading from '../components/loading.components';
import withLayout from '../components/hoc/layout.component';
import Error from '../components/error.component';

const RepoDetails = () => {
    const { name } = useParams();
    const { data, loading, error } = useQuery<
        RepoQueryData,
        RepoQueryVariables
    >(GET_REPO, {
        variables: { name },
    });

    if (loading) return <Loading />;
    if (error) {
        return (
            <Error
                message={error.message}
                btnMessage="Przejdź do strony głównej"
                href="/repositories"
            />
        );
    }

    const repo = data.viewer.repository;

    return (
        <Box sx={{ color: '#fff' }}>
            <RepositoryHeader repo={repo} />
            <Box>
                <Typography sx={{ fontSize: '14px' }}>
                    {repo.description ?? 'Brak opisu :('}
                </Typography>
            </Box>

            <Issues issues={repo.issues} />
            <PullRequests pullRequests={repo.pullRequests} />
            <Commits name={name!} />
        </Box>
    );
};

RepoDetails.displayName = 'RepoDetails';

const RepoDetailsWithLayout = withLayout(RepoDetails);
export default RepoDetailsWithLayout;

