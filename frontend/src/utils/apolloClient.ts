import {
    ApolloClient,
    InMemoryCache,
    createHttpLink,
    from,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { onError } from '@apollo/client/link/error';
import { toast } from 'react-toastify';
import { goTo } from './navigation';

const httpLink = createHttpLink({
    uri: 'https://api.github.com/graphql',
});

const authLink = setContext((_, { headers }) => {
    const token = localStorage.getItem('github_token');
    return {
        headers: {
            ...headers,
            Authorization: token ? `Bearer ${token}` : '',
        },
    };
});

const errorLink = onError(({ networkError }) => {
    if (
        networkError &&
        'statusCode' in networkError &&
        networkError.statusCode === 401
    ) {
        localStorage.removeItem('github_token');
        toast.error('Sesja wygasła. Zaloguj się ponownie.', {
            toastId: 'unauthorized',
        });
        goTo('/');
    }
});

export const apolloClient = new ApolloClient({
    link: from([errorLink, authLink, httpLink]),
    cache: new InMemoryCache(),
});

