import { createLiveService, deleteLiveService, findAllLiveService, findLiveByIdService, updateLiveService } from "../service/liveService.js";

export const createLiveController = async (req, res) => {
    try {
        const liveData = req.body;

        const live = await createLiveService(liveData);

        if(!live){
            return res.status(400).json({
                success: false,
                message: "Failed to create live. Please try again."
            });
        }

        return res.status(201).json({
            success: true,
            message: "Live created successfully",
            data: live
        });
    } catch (error) {
        console.log("Error in createLive controller: ", error);
        return res.status(500).json({
            success: false,
            message: "Failed to create live. Please try again."
        });
    }
};

export const findLiveByIdController = async (req, res) => {
    try {
        const id = req.params.liveid;
        console.log("Id: ", id);

        const liveData = await findLiveByIdService(id);

        if(!liveData){
            return res.status(404).json({
                success: false,
                message: "Live not found"
            });
        }

        return res.status(200).json({
            success: true,
            message: "Live found",
            data: liveData
        });
    } catch (error) {
        console.log("Error in findLiveById controller:", error);
        return res.status(500).json({
            success: false,
            message: "Failed to fetch live. Please try again."
        });
    }
};

export const findAllLiveController = async (req, res) => {
    try {
        const liveData = await findAllLiveService();

        console.log("Live data: ", liveData);

        if(!liveData){
            return res.status(404).json({
                success: false,
                message: "Live not found"
            });
        }

        return res.status(200).json({
            success: true,
            message: "Live found",
            data: liveData
        });
    } catch (error) {
        console.log("Error in findAllLive controller:", error);
        return res.status(500).json({
            success: false,
            message: "Failed to fetch live. Please try again."
        });
    }
};

export const updateLiveController = async (req, res) => {
    try {
        const id = req.params.liveid;
        const liveData = req.body;

        const live = await updateLiveService(id, liveData);

        if(!live){
            return res.status(400).json({
                success: false,
                message: "Failed to update live. Please try again."
            });
        }

        return res.status(200).json({
            success: true,
            message: "Live updated successfully",
            data: live
        });
    } catch (error) {
        console.log("Error in updateLive controller: ", error);
        return res.status(500).json({
            success: false,
            message: "Failed to update live. Please try again."
        });
    }
};

export const deleteLiveController = async (req, res) => {
    try {
        const id = req.params.liveid;

        const live = await deleteLiveService(id);

        if(!live){
            return res.status(400).json({
                success: false,
                message: "Failed to delete live. Please try again."
            });
        }

        return res.status(200).json({
            success: true,
            message: "Live deleted successfully",
            data: live
        });
    } catch (error) {
        console.log("Error in deleteLive controller: ", error);
        return res.status(500).json({
            success: false,
            message: "Failed to delete live. Please try again."
        });
    }
};