import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Loading from '../components/loading.components';

const AuthCallback = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const token = new URLSearchParams(window.location.search).get('token');

        if (token) {
            localStorage.setItem('github_token', token);
            setTimeout(() => {
                toast.success('Zalogowano poprawnie.');
            }, 100);

            navigate('/repositories');
        }
    }, [navigate]);

    return <Loading />;
};

export default AuthCallback;

