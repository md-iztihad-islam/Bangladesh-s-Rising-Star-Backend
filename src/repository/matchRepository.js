import { Match } from "../schema/matchSchema.js";

export const createMatchRepository = async (matchObject) => {
    try {
        const match = await Match.create(matchObject);

        return match;
    } catch (error) {
        console.log("Error in createMatchRepository: ", error);
        throw new Error("Error in createMatchRepository");
    }
};

export const updateMatchRepository = async (matchId, matchObject) => {
    try {
        const match = await Match.findByIdAndUpdate(matchId, matchObject, { new: true });

        return match;
    } catch (error) {
        console.log("Error in updateMatchRepository: ", error);
        throw new Error("Error in updateMatchRepository");
    }
};

export const getMatchByTournamentRepository = async (tournamentId) => {
    try {
        const matches = await Match.find({ tournament: tournamentId }).populate("tournament");

        return matches;
    } catch (error) {
        console.log("Error in getMatchByTournamentRepository: ", error);
        throw new Error("Error in getMatchByTournamentRepository");
    }
};

export const getMatchByIdRepository = async (matchId) => {
    try {
        const match = await Match.findById(matchId).populate("tournament");

        return match;
    } catch (error) {
        console.log("Error in getMatchByIdRepository: ", error);
        throw new Error("Error in getMatchByIdRepository");
    }
};

export const getAllMatchesRepository = async () => {
    try {
        const matches = await Match.find({}).populate("tournament");

        return matches;
    } catch (error) {
        console.log("Error in getAllMatchesRepository: ", error);
        throw new Error("Error in getAllMatchesRepository");
    }
};