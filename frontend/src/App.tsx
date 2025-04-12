import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import { apolloClient } from './utils/apolloClient';

import Login from './pages/Login.page';
import RepositoriesPage from './pages/Repositories.page';
import RepositoryPage from './pages/Repository.page';
import AuthCallback from './pages/AuthCallback.page';
import { ToastContainer } from 'react-toastify';
import NavigationHandler from './utils/NavigationHandler';
import NotFound from './components/not-found.component';

function App() {
    return (
        <ApolloProvider client={apolloClient}>
            <Router>
                <NavigationHandler />
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route
                        path="/repositories"
                        element={<RepositoriesPage />}
                    />
                    <Route
                        path="/repository/:name"
                        element={<RepositoryPage />}
                    />
                    <Route path="/auth/callback" element={<AuthCallback />} />
                    <Route path="*" element={<NotFound />}></Route>
                </Routes>
            </Router>
            <ToastContainer />
        </ApolloProvider>
    );
}

export default App;

