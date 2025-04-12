interface Author {
    login: string;
    avatarUrl: string;
}

interface PullRequest {
    title: string;
    url: string;
    author: Author;
    createdAt: string;
    state: string;
}

interface Issue {
    title: string;
    body: string;
    author: Author;
    createdAt: string;
}

interface CommitAuthor {
    name: string;
    email: string;
    date: string;
    user: Author | null;
}

interface Commit {
    message: string;
    committedDate: string;
    author: CommitAuthor;
    oid: string;
}

interface CommitEdge {
    cursor: string;
    node: Commit;
}

interface CommitConnection {
    totalCount: number;
    pageInfo: {
        endCursor: string;
        hasNextPage: boolean;
    };
    edges: CommitEdge[];
}

interface Repository {
    name: string;
    description: string | null;
    createdAt: string;
    forkCount: number;
    stargazerCount: number;
    url: string;
    watchers: {
        totalCount: number;
    };
    issues: {
        totalCount: number;
        nodes: Issue[];
    };
    pullRequests: {
        totalCount: number;
        nodes: PullRequest[];
    };
    defaultBranchRef: {
        target: {
            history: CommitConnection;
        };
    };
}

interface RepoQueryData {
    viewer: {
        repository: Repository;
    };
}

interface RepoQueryVariables {
    name: string;
    after?: string;
}

