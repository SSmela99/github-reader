import { useRef, useCallback } from 'react';
import {
    Avatar,
    Box,
    Typography,
    List,
    ListItem,
    CircularProgress,
} from '@mui/material';
import { useQuery } from '@apollo/client';
import { GET_COMMITS } from '../../../utils/api';
import {
    Commit,
    RepoQueryData,
    RepoQueryVariables,
} from '../../../interfaces/api';

interface CommitsProps {
    name: string;
}

const Commits = ({ name }: CommitsProps) => {
    const { data, loading, error, fetchMore } = useQuery<
        RepoQueryData,
        RepoQueryVariables
    >(GET_COMMITS, {
        variables: { name, after: null },
        notifyOnNetworkStatusChange: true,
    });

    const observer = useRef<IntersectionObserver | null>(null);
    const lastCommitRef = useCallback(
        (node: HTMLDivElement) => {
            if (loading) return;
            if (observer.current) observer.current.disconnect();
            observer.current = new IntersectionObserver((entries) => {
                if (
                    entries[0].isIntersecting &&
                    data?.viewer.repository.defaultBranchRef.target.history
                        .pageInfo.hasNextPage
                ) {
                    fetchMore({
                        variables: {
                            after: data.viewer.repository.defaultBranchRef
                                .target.history.pageInfo.endCursor,
                        },
                        updateQuery: (prevResult, { fetchMoreResult }) => {
                            if (!fetchMoreResult) return prevResult;
                            return {
                                viewer: {
                                    ...prevResult.viewer,
                                    repository: {
                                        ...prevResult.viewer.repository,
                                        defaultBranchRef: {
                                            ...prevResult.viewer.repository
                                                .defaultBranchRef,
                                            target: {
                                                ...prevResult.viewer.repository
                                                    .defaultBranchRef.target,
                                                history: {
                                                    ...fetchMoreResult.viewer
                                                        .repository
                                                        .defaultBranchRef.target
                                                        .history,
                                                    edges: [
                                                        ...prevResult.viewer
                                                            .repository
                                                            .defaultBranchRef
                                                            .target.history
                                                            .edges,
                                                        ...fetchMoreResult.viewer.repository.defaultBranchRef.target.history.edges.slice(
                                                            0,
                                                            5,
                                                        ),
                                                    ],
                                                },
                                            },
                                        },
                                    },
                                },
                            };
                        },
                    });
                }
            });
            if (node) observer.current.observe(node);
        },
        [loading, data, fetchMore],
    );

    const commits =
        data?.viewer.repository.defaultBranchRef.target.history.edges ?? [];

    if (error) return <Typography>Error: {error.message}</Typography>;

    if (!loading && commits.length === 0) {
        return (
            <Box sx={{ mt: { xs: 4, md: 8 } }}>
                <Typography variant="h6" sx={{ my: 1 }}>
                    Commity:
                </Typography>
                <Typography sx={{ fontSize: '14px' }}>
                    Brak commitów w tym repozytorium
                </Typography>
            </Box>
        );
    }

    return (
        <Box sx={{ mt: { xs: 4, md: 8 } }}>
            <Typography variant="h6" sx={{ mb: 2 }}>
                Commity:
            </Typography>
            <List>
                {commits.map((edge, index) => {
                    const commit: Commit = edge.node;
                    const isLast = index === commits.length - 1;

                    return (
                        <ListItem
                            key={commit.oid}
                            ref={isLast ? lastCommitRef : null}
                            sx={{
                                display: 'block',
                                borderBottom: '1px solid #fff',
                                mb: 3,
                                pb: 2,
                            }}
                        >
                            <Typography
                                sx={{
                                    fontWeight: 'bold',
                                    color: 'primary.main',
                                    mb: 1,
                                }}
                            >
                                {commit.message}
                            </Typography>

                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 1,
                                    color: '#fff',
                                    mb: 1,
                                }}
                            >
                                <Avatar
                                    src={commit.author.avatarUrl}
                                    alt={commit.author.name}
                                    sx={{ width: 24, height: 24 }}
                                />
                                <Typography>{commit.author.name}</Typography>
                            </Box>

                            <Typography
                                sx={{ fontSize: '14px', color: '#ccc' }}
                            >
                                {new Date(
                                    commit.committedDate,
                                ).toLocaleString()}
                            </Typography>
                        </ListItem>
                    );
                })}
                {loading && (
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            mt: 2,
                        }}
                    >
                        <CircularProgress size={32} />
                    </Box>
                )}
            </List>
        </Box>
    );
};

export default Commits;

