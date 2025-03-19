import { createMatchService, getAllMatchesService, getMatchByIdService, getMatchByTournamentService, updateMatchService } from "../service/matchService.js";

export const createMatchController = async (req, res) => {
    try {
        const matchData = req.body;
        const tournamentId = req.params.tournamentId;

        const match = await createMatchService(matchData, tournamentId);

        if(!match) {
            return res.status(400).json({
                success: false,
                message: "Match not created"
            });
        };

        return res.status(201).json({
            success: true,
            message: "Match created successfully",
            data: match
        });
    } catch (error) {
        console.log("Error in createMatchController: ", error);
        return res.status(500).json({
            success: false,
            message: "Internal Server Error" 
        });
    }
};

export const updateMatchController = async (req, res) => {
    try {
        const matchId = req.params.matchId;
        const matchData = req.body;

        const match = await updateMatchService(matchId, matchData);

        if(!match) {
            return res.status(400).json({
                success: false,
                message: "Match not updated"
            });
        };

        return res.status(200).json({
            success: true,
            message: "Match updated successfully",
            data: match
        });
    } catch (error) {
        console.log("Error in updateMatchController: ", error);
        return res.status(500).json({
            success: false,
            message: "Internal Server Error" 
        });
    }
};

export const getMatchByTournamentController = async (req, res) => {
    try {
        const {tournamentId} = req.params;
        const matches = await getMatchByTournamentService(tournamentId);

        if(!matches) {
            return res.status(404).json({
                success: false,
                message: "Matches not found"
            });
        };

        return res.status(200).json({
            success: true,
            message: "Matches found successfully",
            data: matches
        });
    } catch (error) {
        console.log("Error in getMatchByTournamentController: ", error);
        return res.status(500).json({
            success: false,
            message: "Internal Server Error" 
        });
    }
};

export const getMatchByIdController = async (req, res) => {
    try {
        const {matchId} = req.params;

        const match = await getMatchByIdService(matchId);

        if(!match) {
            return res.status(404).json({
                success: false,
                message: "Match not found"
            });
        }

        return res.status(200).json({
            success: true,
            message: "Match found successfully",
            data: match
        });
    } catch (error) {
        console.log("Error in getMatchByIdController: ", error);
        return res.status(500).json({
            success: false,
            message: "Internal Server Error" 
        });
    }
};

export const getAllMatchesController = async (req, res) => {
    try {
        const matches = await getAllMatchesService();

        if(!matches) {
            return res.status(404).json({
                success: false,
                message: "Matches not found"
            });
        };

        return res.status(200).json({
            success: true,
            message: "Matches found successfully",
            data: matches
        });
    } catch (error) {
        console.log("Error in getAllMatchesController: ", error);
        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
};