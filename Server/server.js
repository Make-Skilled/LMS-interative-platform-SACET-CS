import cloudinary from 'cloudinary';
import app from './app.js';
import connectionToDB from './config/dbConnection.js';

const PORT = process.env.PORT || 5000;

cloudinary.v2.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    secure: process.env.CLOUDINARY_SECURE,
})

app.listen(PORT, async () => {
    await connectionToDB();
    console.log(`App is running at http:localhost:${PORT}`);
})
