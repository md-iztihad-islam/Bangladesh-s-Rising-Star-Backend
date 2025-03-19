import { Team } from "../schema/teamSchema.js";
import { Tournament } from "../schema/tournamentSchema.js";

export const craeteTournamentRepository = async (TournamentObject) => {
    try {
        const tournament = await Tournament.create(TournamentObject);

        return tournament;
    } catch (error) {
        console.log("Error in createTournamentRepository: ", error);
        throw new Error("Error in createTournamentRepository");
    }
};

export const getTournamentRepository = async () => {
    try {
        const tournaments = await Tournament.find().populate("teams").populate({
            path: "teams",   // Populate teams first
            populate: {
                path: "playersRegistrationNo", // Populate players inside teams
                model: "Player" // Reference the correct model
            }
        });

        return tournaments;
    } catch (error) {
        console.log("Error in getTournamentRepository: ", error);
        throw new Error("Error in getTournamentRepository");
    }
};

export const getTournamentByIdRepository = async (id) => {
    try {
        const tournament = await Tournament.findById(id).populate("teams").populate({
            path: "teams",   // Populate teams first
            populate: {
                path: "playersRegistrationNo", // Populate players inside teams
                model: "Player" // Reference the correct model
            }
        });

        return tournament;
    } catch (error) {
        console.log("Error in getTournamentByIdRepository: ", error);
        throw new Error("Error in getTournamentByIdRepository");
    }
};

export const deleteTournamentRepository = async (id) => {
    try {
        const tournament = await Tournament.findByIdAndDelete(id);
        const teams = await Team.find({ tournament: id });
        for (let i = 0; i < teams.length; i++) {
            await Team.findByIdAndDelete(teams[i]._id);
            for (let j = 0; j < teams[i].playersRegistrationNo.length; j++) {
                await Player.findByIdAndDelete(teams[i].playersRegistrationNo[j]);
            }
        }

        return tournament;
    } catch (error) {
        console.log("Error in deleteTournamentRepository: ", error);
        throw new Error("Error in deleteTournamentRepository");
    }
};