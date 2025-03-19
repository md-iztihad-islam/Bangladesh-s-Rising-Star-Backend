import { Live } from "../schema/liveSchema.js";

export const createLiveRepository = async (liveData) => {
    try {
        const live = Live.create(liveData);

        return live;
    } catch (error) {
        console.log("Error in createLive repository: ", error);
        throw new Error("Internal server error");
    }
};

export const findLiveByIdRepository = async (id) => {
    try {
        const liveData = await Live.findById(id);

        return liveData;
    } catch (error) {
        console.log("Error in findLiveById repository: ", error);
        throw new Error("Internal server error");
    }
};

export const findAllLiveRepository = async () => {
    try {
        const liveData = await Live.find();

        return liveData;
    } catch (error) {
        console.log("Error in findAllLive repository: ", error);
        throw new Error("Internal server error");
    }
};

export const updateLiveRepository = async (id, liveData) => {
    try {
        const live = await Live.findByIdAndUpdate(id, liveData, { new: true });

        return live;
    } catch (error) {
        console.log("Error in updateLive repository: ", error);
        throw new Error("Internal server error");
    }
};

export const deleteLiveRepository = async (id) => {
    try {
        const live = await Live.findByIdAndDelete(id);

        return live;
    } catch (error) {
        console.log("Error in deleteLive repository: ", error);
        throw new Error("Internal server error");
    }
};
