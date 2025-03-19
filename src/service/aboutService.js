import { createAboutRepository, findAboutRepository, updateAboutRepository } from "../repository/aboutRepository.js";
import { uploadMedia } from "../utils/cloudinary.js";

export const createAboutService = async (aboutData) => {
    try {
        const { description } = aboutData.body;
        const photo = aboutData.file

        let cloudResponse;
        let image;

        if(photo){
            cloudResponse = await uploadMedia(photo.path);
            image = cloudResponse.secure_url;
        }


        if (!description) {
            throw new Error("Description is required");
        }



        const aboutObject = {
            image,
            description,
        };

        const about = await createAboutRepository(aboutObject);

        return about;
    } catch (error) {
        throw new Error("Internal server error");
    }
};

export const findAboutService = async () => {
    try {
        const about = await findAboutRepository();

        return about;
    } catch (error) {
        throw new Error("Internal server error");
    }
};

export const updateAboutService = async (aboutId, aboutData) => {
    try {
        const photo = aboutData.file;
        const { description } = aboutData.body;

        let cloudResponse;
        let image;

        if(photo){
            cloudResponse = await uploadMedia(photo.path);
            image = cloudResponse.secure_url;
        }

        if (!description) {
            throw new Error("Description is required");
        }

        const aboutObject = {
            image,
            description,
        };


        const about = await updateAboutRepository(aboutId, aboutObject);

        return about;
    } catch (error) {
        throw new Error("Internal server error");
    }
};