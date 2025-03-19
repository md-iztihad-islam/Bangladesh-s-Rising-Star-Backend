import { createTournamentService, deleteTournamentService, getTournamentByIdService, getTournamentService } from "../service/tournamentService.js";

export const createTournamentController = async (req, res) => {
    try {
        const tournamentData = req;

        const tournament = await createTournamentService(tournamentData);

        if(!tournament) {
            return res.status(400).json({
                success: false,
                message: "Tournament not created"
            });
        }

        return res.status(200).json({
            success: true,
            message: "Tournament created successfully",
            data: tournament
        });
    } catch (error) {
        console.log("Error in createTournamentController: ", error);
        return res.status(500).json({
            success: false,
            message: "Internal Server Error" 
        });
    }
};

export const findAllTournamentController = async (req, res) => {
    try {
        const tournaments = await getTournamentService();

        if(!tournaments) {
            return res.status(400).json({
                success: false,
                message: "No tournaments found"
            });
        }


        return res.status(200).json({
            success: true,
            message: "Tournaments found successfully",
            data: tournaments
        });
    } catch (error) {
        console.log("Error in findAllTournamentController: ", error);
        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
};

export const findTournamentByIdController = async (req, res) => {
    try {
        const id = req.params.tournamentId;

        const tournament = await getTournamentByIdService(id);

        if(!tournament) {
            return res.status(400).json({
                success: false,
                message: "No tournament found"
            });
        }

        return res.status(200).json({
            success: true,
            message: "Tournament found successfully",
            data: tournament
        });
    } catch (error) {
        console.log("Error in findTournamentByIdController: ", error);
        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
};

export const deleteTournamentController = async (req, res) => {
    try {
        const id = req.params.tournamentId;

        const tournament = await deleteTournamentService(id);

        if(!tournament) {
            return res.status(400).json({
                success: false,
                message: "No tournament found"
            });
        }

        return res.status(200).json({
            success: true,
            message: "Tournament deleted successfully",
            data: tournament
        });
    } catch (error) {
        console.log("Error in deleteTournamentController: ", error);
        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
};