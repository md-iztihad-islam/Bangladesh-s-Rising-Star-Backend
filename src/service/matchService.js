import { createMatchRepository, getAllMatchesRepository, getMatchByIdRepository, getMatchByTournamentRepository, updateMatchRepository } from "../repository/matchRepository.js";

export const createMatchService = async (matchData, tournamentId) => {
    try {
        const { matchNo, matchDate, matchTime, matchVenue, matchTeam1, matchTeam2, stage } = matchData;

        const matchObject = {
            matchNo,
            matchDate,
            matchTime,
            matchVenue,
            matchTeam1,
            matchTeam2,
            tournament: tournamentId,
            stage,
        };

        const match = await createMatchRepository(matchObject);

        return match;
    } catch (error) {
        console.log("Error in createMatchService: ", error);
        throw new Error("Error in createMatchService");
    }
};

export const updateMatchService = async (matchId, matchData) => {
    try {
        const { matchNo, matchDate, matchTime, matchVenue, matchTeam1, matchTeam2, isPlayed, team01Goal, team02Goal, videoUrl, stage} = matchData;

        const matchObject = {
            matchNo,
            matchDate,
            matchTime,
            matchVenue,
            matchTeam1,
            matchTeam2,
            isPlayed,
            team01Goal,
            team02Goal,
            videoUrl,
            stage
        };

        const match = await updateMatchRepository(matchId, matchObject);

        return match;
    } catch (error) {
        console.log("Error in updateMatchService: ", error);
        throw new Error("Error in updateMatchService");
    }
};

export const getMatchByTournamentService = async (tournamentId) => {
    try {
        const matches = await getMatchByTournamentRepository(tournamentId);

        return matches;
    } catch (error) {
        console.log("Error in getMatchByTournamentService: ", error);
        throw new Error("Error in getMatchByTournamentService");
    }
};

export const getMatchByIdService = async (matchId) => {
    try {
        const match = await getMatchByIdRepository(matchId);

        return match;
    } catch (error) {
        console.log("Error in getMatchByIdService: ", error);
        throw new Error("Error in getMatchByIdService");        
    }
};

export const getAllMatchesService = async () => {
    try {
        const matches = await getAllMatchesRepository();

        return matches;
    } catch (error) {
        console.log("Error in getAllMatchesService: ", error);
        throw new Error("Error in getAllMatchesService");
    }
};