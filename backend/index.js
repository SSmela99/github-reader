import express from 'express';
import axios from 'axios';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(
    cors({
        origin: process.env.FRONTEND_URL,
        credentials: true,
    }),
);

const PORT = 4000;

app.get('/auth/github', (req, res) => {
    const redirectUrl = `https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}`;
    res.redirect(redirectUrl);
});

app.get('/auth/github/callback', async (req, res) => {
    const { code } = req.query;
    console.log('Received code:', code);

    if (!code) {
        console.log('Error: No code received from GitHub');
        return res.status(400).send('No code received');
    }

    try {
        const tokenRes = await axios.post(
            'https://github.com/login/oauth/access_token',
            {
                client_id: process.env.GITHUB_CLIENT_ID,
                client_secret: process.env.GITHUB_CLIENT_SECRET,
                code,
            },
            {
                headers: { Accept: 'application/json' },
            },
        );

        console.log('GitHub response data:', tokenRes.data);

        const accessToken = tokenRes.data.access_token;

        if (!accessToken) {
            console.log('Error: No access token received');
            return res.status(400).send('No access token received');
        }

        console.log('Access token:', accessToken);

        if (accessToken) {
            res.redirect(
                `${process.env.FRONTEND_URL}/auth/callback?token=${accessToken}`,
            );
        }
    } catch (error) {
        console.error('Error exchanging code for token:', error);
        res.status(500).send('Error while exchanging code for token');
    }
});

app.listen(PORT, () =>
    console.log(`Backend running on http://localhost:${PORT}`),
);

