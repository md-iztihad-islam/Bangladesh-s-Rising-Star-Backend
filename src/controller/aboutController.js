import { createAboutService, findAboutService, updateAboutService } from "../service/aboutService.js";

export const createAboutController = async (req, res) => {
    try {
        const aboutData = req;

        const about = await createAboutService(aboutData);

        if(!about){
            return res.status(404).json({
                success: false,
                message: "Failed to create about"
            });
        };

        return res.status(200).json({
            success: true,
            message: "About created successfully",
            data: about
        });
    } catch (error) {
        console.log("Error in createAbout controller: ", error);
        res.status(500).json({
            success: false,
            message: "Failed to create about. Please try again."
        });      
    }
};

export const findAboutController = async (req, res) => {
    try {
        const about = await findAboutService();

        if(!about){
            return res.status(404).json({
                success: false,
                message: "About not found"
            });
        };

        return res.status(200).json({
            success: true,
            message: "About found",
            data: about
        });
    }
    catch (error) {
        console.log("Error in findAbout controller: ", error);
        return res.status(500).json({
            success: false,
            message: "Failed to fetch about. Please try again."
        });
    }
};

export const updateAboutController = async (req, res) => {
    try {
        const aboutId = "67d55ce1a53d67b426a07035";
        const aboutData = req;

        const about = await updateAboutService(aboutId, aboutData);

        if(!about){
            return res.status(404).json({
                success: false,
                message: "Failed to update about"
            });
        };

        return res.status(200).json({
            success: true,
            message: "About updated successfully",
            data: about
        });
    } catch (error) {
        console.log("Error in updateAbout controller: ", error);
        return res.status(500).json({
            success: false,
            message: "Failed to update about. Please try again."
        });
        
    }
};