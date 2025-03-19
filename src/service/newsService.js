import { createNewsRepository, deleteNewsRepository, getNewsByIdRepository, getNewsRepository } from "../repository/newsRepository.js";

export const createNewsService = (newsData) => {
    try {
        const { newsId, newsTitle, newsDescription, newsDate, newsImage, newsLink } = newsData;

        if (!newsId) {
            throw new Error("News ID is required");
        };

        const newsObject = {
            newsId,
            newsTitle,
            newsDescription,
            newsDate,
            newsImage,
            newsLink
        };

        const news = createNewsRepository(newsObject);

        return news;
    } catch (error) {
        console.log("Error in createNewsService: ", error);
        throw new Error("Internal server error");
    }
};

export const getNewsService = async () => {
    try {
        const news = await getNewsRepository();

        return news;
    } catch (error) {
        console.log("Error in getNewsService: ", error);
        throw new Error("Internal server error");   
    }
};

export const getNewsByIdService = async (newsID) => {
    try {
        const news = await getNewsByIdRepository(newsID);

        return news;
    } catch (error) {
        console.log("Error in getNewsByIdService: ", error);
        throw new Error("Internal server error");
    }
};

export const deleteNewsService = async (newsID) => {
    try {
        const news = await deleteNewsRepository(newsID);

        return news;
    } catch (error) {
        console.log("Error in deleteNewsService: ", error);
        throw new Error("Internal server error");
    }
};