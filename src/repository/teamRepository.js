import { Player } from "../schema/playerSchema.js";
import { Team } from "../schema/teamSchema.js";
import { Tournament } from "../schema/tournamentSchema.js";

export const createTeamRepository = async (teamObject) => {
    try {
        const team = await Team.create(teamObject);

        await Tournament.findByIdAndUpdate(teamObject.tournament, { $push: { teams: team._id } }, { new: true });

        return team;
    } catch (error) {
        console.log("Error in createTeamRepository: ", error);
        throw new Error("Error in createTeamRepository");
    }
};

export const addPlayerRepository = async (id, playerId) => {
    try {
        const team = await Team.findByIdAndUpdate(id, { $push: { playersRegistrationNo: playerId } }, { new: true });
        const player = await Player.findById(playerId);

        await Player.findByIdAndUpdate(player._id, { $push: { teamId: team._id } }, { new: true });

        return team;
    } catch (error) {
        console.log("Error in updateTeamRepository: ", error);
        throw new Error("Error in updateTeamRepository");
    }
};

export const getTeamRepository = async () => {
    try {
        const teams = await Team.find().populate("playersRegistrationNo");

        return teams;
    } catch (error) {
        console.log("Error in getTeamRepository: ", error);
        throw new Error("Error in getTeamRepository");
    }
};

export const getTeamByIdRepository = async (id) => {
    try {
        const team = await Team.findById(id).populate("playersRegistrationNo");

        return team;
    } catch (error) {
        console.log("Error in getTeamByIdRepository: ", error);
        throw new Error("Error in getTeamByIdRepository");
    }
};

export const deleteTeamRepository = async (id) => {
    try {
        const team = await Team.findByIdAndDelete(id);

        return team;
    } catch (error) {
        console.log("Error in deleteTeamRepository: ", error);
        throw new Error("Error in deleteTeamRepository");
    }
};

export const findTeamPlayersRepository = async (id) => {
    try {
        const players = await Player.find({teamId: id});

        return players;
    } catch (error) {
        console.log("Error in findTeamPlayersRepository: ", error);
        throw new Error("Error in findTeamPlayersRepository");
    }
};

export const updateTeamRepository = async (id, teamObject) => {
    try {
        const team = await Team.findByIdAndUpdate(id, teamObject, { new: true });

        return team;
    }catch(error){
        console.log("Error in updateTeamRepository: ", error);
        throw new Error("Error in updateTeamRepository");
    }
};