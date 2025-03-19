import { craeteTournamentRepository, deleteTournamentRepository, getTournamentByIdRepository, getTournamentRepository } from "../repository/tournamentRepository.js";
import { uploadMedia } from "../utils/cloudinary.js";

export const createTournamentService = async (TournamentData) => {
    try {
        const { tournamentName, tournamentType, openningDate, closingDate } = TournamentData.body;
        const logo = TournamentData.file;

        let cloudResponse;
        let tournamentLogo;

        if(logo){
            cloudResponse = await uploadMedia(logo.path);
            tournamentLogo = cloudResponse.secure_url;
        }

        const tournamentObject = { tournamentName, tournamentType, openningDate, closingDate, tournamentLogo };

        if (!tournamentName || !tournamentType || !openningDate || !closingDate || !tournamentLogo) {
            throw new Error("Please provide all the required fields");
        }

        const tournament = await craeteTournamentRepository(tournamentObject);

        return tournament;
    } catch (error) {
        console.log("Error in createTournamentService: ", error);
        throw new Error("Error in createTournamentService");
    }
};

export const getTournamentService = async () => {
    try {
        const tournaments = await getTournamentRepository();

        return tournaments;
    } catch (error) {
        console.log("Error in getTournamentService: ", error);
        throw new Error("Error in getTournamentService");
    }
};

export const getTournamentByIdService = async (id) => {
    try {
        const tournament = await getTournamentByIdRepository(id);

        return tournament;
    } catch (error) {
        console.log("Error in getTournamentByIdService: ", error);
        throw new Error("Error in getTournamentByIdService");
    }
};

export const deleteTournamentService = async (id) => {
    try {
        const tournament = await deleteTournamentRepository(id);

        return tournament;
    } catch (error) {
        console.log("Error in deleteTournamentService: ", error);
        throw new Error("Error in deleteTournamentService");
    }
};