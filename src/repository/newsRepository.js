import { News } from "../schema/newsSchema.js";

export const createNewsRepository = (newsObject) => {
    try {
        const news = News.create(newsObject);

        return news;
    } catch (error) {
        console.log("Error in createNewsRepository: ", error);
        throw new Error("Internal server error");
    }
};

export const getNewsRepository = async () => {
    try {
        const news = await News.find();

        return news;
    } catch (error) {
        console.log("Error in getNewsRepository: ", error);
        throw new Error("Internal server error");
    }
};

export const getNewsByIdRepository = async (newsID) => {
    try {
        const news = await News.findOne({ newsID });

        return news;
    } catch (error) {
        console.log("Error in getNewsByIdRepository: ", error);
        throw new Error("Internal server error");
    }
};

export const deleteNewsRepository = async (newsID) => {
    try {
        const news = await News.findByIdAndDelete(newsID);

        return news;
    } catch (error) {
        console.log("Error in deleteNewsRepository: ", error);
        throw new Error("Internal server error");        
    }
};