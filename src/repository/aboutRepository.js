import { About } from "../schema/aboutSchema.js";

export const createAboutRepository = async (aboutObject) => {
    try {
        const about = About.create(aboutObject);

        return about;
    } catch (error) {
        console.log("Error in createAbout repository: ", error);
        throw new Error("Internal server error");        
    }
};

export const findAboutRepository = async () => {
    try {
        const about = await About.find();

        return about;
    } catch (error) {
        console.log("Error in findAbout repository: ", error);
        throw new Error("Internal server error");
    }
};

export const updateAboutRepository = async (aboutId, aboutObject) => {
    try {
        const about = await About.findByIdAndUpdate(aboutId, aboutObject, { new: true });

        return about;
    }catch (error) {
        console.log("Error in updateAbout repository: ", error);
        throw new Error("Internal server error");
    }
};