import { createMatchRepository, getAllMatchesRepository, getMatchByIdRepository, getMatchByTournamentRepository, updateMatchRepository } from "../repository/matchRepository.js";
import { uploadMedia } from "../utils/cloudinary.js";

export const createMatchService = async (matchData, tournamentId) => {
    try {
        const { matchNo, matchDate, matchTime, matchVenue, matchTeam1, matchTeam2, stage } = matchData.body;

        const matchTeam1LogoPath = matchData.files["matchTeam1Logo"] ? matchData.files["matchTeam1Logo"][0].path : null;
        const matchTeam2LogoPath = matchData.files["matchTeam2Logo"] ? matchData.files["matchTeam2Logo"][0].path : null;

        let cloudResponse;
        let matchTeam1Logo;
        let matchTeam2Logo;

        
        if(matchTeam1LogoPath){
            cloudResponse = await uploadMedia(matchTeam1LogoPath);
            matchTeam1Logo = cloudResponse.secure_url;
        }

        if(matchTeam2LogoPath){
            cloudResponse = await uploadMedia(matchTeam2LogoPath);
            matchTeam2Logo = cloudResponse.secure_url;
        }

        const matchObject = {
            matchNo,
            matchDate,
            matchTime,
            matchVenue,
            matchTeam1,
            matchTeam2,
            tournament: tournamentId,
            stage,
            matchTeam1Logo,
            matchTeam2Logo,
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
        const { matchNo, matchDate, matchTime, matchVenue, matchTeam1, matchTeam2, isPlayed, team01Goal, team02Goal, videoUrl, stage} = matchData.body;
        const matchTeam1LogoPath = matchData.files["matchTeam1Logo"] ? matchData.files["matchTeam1Logo"][0].path : null;
        const matchTeam2LogoPath = matchData.files["matchTeam2Logo"] ? matchData.files["matchTeam2Logo"][0].path : null;

        let cloudResponse;
        let matchTeam1Logo;
        let matchTeam2Logo;

        if(matchTeam1LogoPath){
            cloudResponse = await uploadMedia(matchTeam1LogoPath);
            matchTeam1Logo = cloudResponse.secure_url;
        }

        if(matchTeam2LogoPath){
            cloudResponse = await uploadMedia(matchTeam2LogoPath);
            matchTeam2Logo = cloudResponse.secure_url;
        }


        const matchObject = {
            matchNo,
            matchDate,
            matchTime,
            matchVenue,
            matchTeam1,
            matchTeam2,
            matchTeam1Logo,
            matchTeam2Logo,
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