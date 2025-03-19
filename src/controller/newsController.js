import { createNewsService, deleteNewsService, getNewsByIdService, getNewsService } from "../service/newsService.js";

export const createNewsController = (req, res) => {
    try {
        const newsObject = req.body;

        const news = createNewsService(newsObject);

        if (!news) {
            return res.status(400).json({
                message: "News not created"
            });
        }

        return res.status(201).json({
            success: true,
            message: "News created successfully",
            news
        });
    } catch (error) {
        console.log("Error in createNewsController: ", error);
        return res.status(500).json({
            success: false,
            message: "Internal server error"
        });       
    }
};

export const getNewsController = async (req, res) => {
    try {
        const news = await getNewsService();

        if (!news) {
            return res.status(404).json({
                success: false,
                message: "News not found"
            });
        }

        return res.status(200).json({
            success: true,
            message: "News found",
            news
        });
    } catch (error) {
        console.log("Error in getNewsController: ", error);
        return res.status(500).json({
            success: false,
            message: "Internal server error"
        });
    }
};

export const getNewsByIdController = async (req, res) => {
    try {
        const newsID = req.params.newsId;

        const news = await getNewsByIdService(newsID);

        if (!news) {
            return res.status(404).json({
                success: false,
                message: "News not found"
            });
        }

        return res.status(200).json({
            success: true,
            message: "News found",
            news
        });
    } catch (error) {
        console.log("Error in getNewsByIdController: ", error);
        return res.status(500).json({
            success: false,
            message: "Internal server error"
        });
    }
};

export const deleteNewsController = async (req, res) => {
    try {
        const newsID = req.params.newsId;

        const news = await deleteNewsService(newsID);

        if (!news) {
            return res.status(404).json({
                success: false,
                message: "News not found"
            });
        };
    } catch (error) {
        console.log("Error in deleteNewsController: ", error);
        return res.status(500).json({
            success: false,
            message: "Internal server error"
        });
        
    }
};