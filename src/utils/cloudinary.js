import { v2 as cloudinary } from 'cloudinary';
import { API_KEY, API_SECRET, CLOUD_NAME } from '../config/serverConfig.js';

cloudinary.config({
    api_key: API_KEY,
    api_secret: API_SECRET,
    cloud_name: CLOUD_NAME
});

export const uploadMedia = async (file) => {
    try {
        const uploadResponse = await cloudinary.uploader.upload(file, {resource_type: "auto"});
        return uploadResponse;
    } catch (error) {
        return error;
    }
};

export const deleteMedia = async (publicId) => {
    try {
        await cloudinary.uploader.destroy(publicId);
    } catch (error) {
        return error;
    }
};