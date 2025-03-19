import { createLiveRepository, deleteLiveRepository, findAllLiveRepository, findLiveByIdRepository, updateLiveRepository } from "../repository/liveRepository.js";

export const createLiveService = async (liveData) => {
    try {
        const { tournamentName, team1, team2, venue, videoUrl } = liveData;

        if (!tournamentName || !team1 || !team2 || !venue || !videoUrl) {
            throw new Error("Please provide all the fields");
        };

        const data = {
            tournamentName,
            team1,
            team2,
            venue,
            videoUrl
        };

        const live = await createLiveRepository(data);

        return live;
    } catch (error) {
        throw new Error("Internal server error");
    }
};

export const findLiveByIdService = async (id) => {
    try {
        const liveData = await findLiveByIdRepository(id);

        return liveData;
    } catch (error) {
        throw new Error("Internal server error");
    }
};

export const findAllLiveService = async () => {
    try {
        const liveData = await findAllLiveRepository();

        return liveData;
    } catch (error) {
        throw new Error("Internal server error");
    }
};

export const updateLiveService = async (id, liveData) => {
    try {
        const { tournamentName, team1, team2, venue, videoUrl } = liveData;

        if (!tournamentName || !team1 || !team2 || !venue || !videoUrl) {
            throw new Error("Please provide all the fields");
        };

        const data = {
            tournamentName,
            team1,
            team2,
            venue,
            videoUrl
        };

        const live = await updateLiveRepository(id, data);

        return live;
    } catch (error) {
        throw new Error("Internal server error");
    }
};

export const deleteLiveService = async (id) => {
    try {
        const live = await deleteLiveRepository(id);

        return live;
    } catch (error) {
        throw new Error("Internal server error");
    }
};