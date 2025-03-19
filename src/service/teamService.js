import { addPlayerRepository, createTeamRepository, deleteTeamRepository, findTeamPlayersRepository, getTeamByIdRepository, getTeamRepository, updateTeamRepository } from "../repository/teamRepository.js";
import { uploadMedia } from "../utils/cloudinary.js";

export const createTeamService = async ({ tournamentId, teamData }) => {
    try {
        const { registrationNo, teamName, institutionName, teamManagerName } = teamData.body;
        const logo = teamData.file;

        let cloudResponse;
        let teamLogo;

        if(logo){
                cloudResponse = await uploadMedia(logo.path);
                teamLogo = cloudResponse.secure_url;
        }

        if(!registrationNo || !teamName || !institutionName || !teamManagerName) {
            throw new Error("Invalid data");
        }

        const teamObject = {
            registrationNo,
            teamName,
            institutionName,
            teamManagerName,
            tournament: tournamentId,
            teamLogo
        };

        const team = await createTeamRepository(teamObject);

        return team;
    } catch (error) {
        console.log("Error in createTeamService: ", error);
        throw new Error("Error in createTeamService");
    }
};

export const addPlayerService = async (id, regNo) => {
    try {
        const team = await addPlayerRepository(id, regNo);

        return team;
    } catch (error) {
        console.log("Error in updateTeamService: ", error);
        throw new Error("Error in updateTeamService");
    }
};

export const getTeamService = async () => {
    try {
        const teams = await getTeamRepository();

        return teams;
    } catch (error) {
        console.log("Error in getTeamService: ", error);
        throw new Error("Error in getTeamService");
    }
};

export const getTeamByIdService = async (id) => {
    try {
        const team = await getTeamByIdRepository(id);

        return team;
    } catch (error) {
        console.log("Error in getTeamByIdService: ", error);
        throw new Error("Error in getTeamByIdService");
    }
};

export const deleteTeamService = async (id) => {
    try {
        const team = await deleteTeamRepository(id);

        return team;
    } catch (error) {
        console.log("Error in deleteTeamService: ", error);
        throw new Error("Error in deleteTeamService");
    }
};

export const findTeamPlayersService = async (id) => {
    try {
        const team = await findTeamPlayersRepository(id);

        return team;
    } catch (error) {
        console.log("Error in findTeamPlayersService: ", error);
        throw new Error("Error in findTeamPlayersService");        
    }
};

export const updateTeamService = async (id, teamData) => {
    try {
        const { matchPlayed, matchWon, matchLost, matchDraw, goalsScored, goalsConceded, goalsDifference, points } = teamData;
        const teamObject = {
            matchPlayed,
            matchWon,
            matchLost,
            matchDraw,
            goalsScored,
            goalsConceded,
            goalsDifference,
            points
        };

        const team = await updateTeamRepository(id, teamObject);

        return team;
    } catch (error) {
        console.log("Error in updateTeamService: ", error);
        throw new Error("Error in update TeamService");
    }
};