import { gql } from '@apollo/client';

export const GET_REPOS = gql`
    query {
        viewer {
            repositories(
                first: 100
                orderBy: { field: UPDATED_AT, direction: DESC }
            ) {
                nodes {
                    name
                    description
                    stargazerCount
                    url
                    id
                }
            }
        }
    }
`;

export const GET_REPO = gql`
    query GetRepo($name: String!) {
        viewer {
            repository(name: $name) {
                name
                description
                url
                stargazerCount
                createdAt
                updatedAt
                isPrivate
                forkCount
                pullRequests(first: 5, states: [OPEN]) {
                    totalCount
                    nodes {
                        title
                        url
                        author {
                            login
                            avatarUrl
                        }
                        createdAt
                        state
                    }
                }
                issues(states: [OPEN], first: 5) {
                    totalCount
                    nodes {
                        title
                        body
                        author {
                            login
                            avatarUrl
                        }
                        createdAt
                        url
                    }
                }
                watchers {
                    totalCount
                }
            }
        }
    }
`;

export const GET_COMMITS = gql`
    query GetCommits($name: String!, $after: String) {
        viewer {
            repository(name: $name) {
                defaultBranchRef {
                    target {
                        ... on Commit {
                            history(first: 10, after: $after) {
                                edges {
                                    cursor
                                    node {
                                        oid
                                        message
                                        committedDate
                                        author {
                                            name
                                            avatarUrl
                                        }
                                    }
                                }
                                pageInfo {
                                    endCursor
                                    hasNextPage
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`;

