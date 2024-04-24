// pages/api/refresh-token.js

import { setAccessToken } from '@/lib/auth';
import { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'POST') {
        // const { refreshToken } = req.body;
        console.log(process.env.REFRESH_TOKEN);
        const response = await fetch('https://www.zohoapis.eu/bigin/v2/refresh', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                refresh_token: process.env.REFRESH_TOKEN,
                grant_type: 'refresh_token',
                client_id: process.env.CLIENT_ID,
                client_secret: process.env.CLIENT_SECRET,
            }),
        });
        const data = await response.json();
        setAccessToken(data.access_token);
        res.status(200).json(data);
    } else {
        res.status(405).json({ message: 'Method Not Allowed' });
    }
}




export default handler;
