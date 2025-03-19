import { addPlayerService, createTeamService, deleteTeamService, findTeamPlayersService, getTeamByIdService, getTeamService, updateTeamService } from "../service/teamService.js";

export const createTeamController = async (req, res) => {
    try {
        const teamData = req;
        const tournamentId = req.params.tournamentId;
        const team = await createTeamService({ tournamentId, teamData });

        if (!team) {
            return res.status(400).json({
                success: false,
                message: "Team not created"
            });
        }

        return res.status(200).json({
            success: true,
            message: "Team created successfully",
            data: team
        });
    } catch (error) {
        console.log("Error in createTeamController: ", error);
        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
};

export const findAllTeamController = async (req, res) => {
    try {
        const teams = await getTeamService();

        if (!teams) {
            return res.status(400).json({
                success: false,
                message: "No teams found"
            });
        }

        return res.status(200).json({
            success: true,
            message: "Teams found successfully",
            data: teams
        });
    } catch (error) {
        console.log("Error in findAllTeamController: ", error);
        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
};

export const findTeamByIdController = async (req, res) => {
    try {
        const id = req.params.teamId;
        const team = await getTeamByIdService(id);

        if (!team) {
            return res.status(400).json({
                success: false,
                message: "No team found"
            });
        }

        return res.status(200).json({
            success: true,
            message: "Team found successfully",
            data: team
        });
    } catch (error) {
        console.log("Error in findTeamByIdController: ", error);
        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
        
    }
};

export const addplayerController = async (req, res) => {
    try {
        const id = req.params.teamId;
        const regNo = req.body.registrationNo;

        const team = await addPlayerService(id, regNo);

        if (!team) {
            return res.status(400).json({
                success: false,
                message: "No team found"
            });
        }

        return res.status(200).json({
            success: true,
            message: "Team updated successfully",
            data: team
        });
    } catch (error) {
        console.log("Error in updateTeamController: ", error);
        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
};

export const deleteTeamController = async (req, res) => {
    try {
        const id = req.params.teamId;

        const team = await deleteTeamService(id);

        if (!team) {
            return res.status(400).json({
                success: false,
                message: "No team found"
            });
        }

        return res.status(200).json({
            success: true,
            message: "Team deleted successfully",
            data: team
        });
    } catch (error) {
        console.log("Error in deleteTeamController: ", error);
        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
};

export const findTeamPlayersController = async (req, res) => {
    try {
        const id = req.params.teamId;

        const players = await findTeamPlayersService(id);

        if(!players) {
            return res.status(400).json({
                success: false,
                message: "No players found"
            });
        };

        return res.status(200).json({
            success: true,
            message: "Players found successfully",
            data: players
        });
    } catch (error) {
        console.log("Error in findTeamPlayersController: ", error);
        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });        
    }
};

export const updateTeamController = async (req, res) => {
    try {
        const id = req.params.teamId;
        const teamObject = req.body;

        const team = await updateTeamService(id, teamObject);

        if (!team) {
            return res.status(400).json({
                success: false,
                message: "No team found"
            });
        }

        return res.status(200).json({
            success: true,
            message: "Team updated successfully",
            data: team
        });
    } catch (error) {
        console.log("Error in updateTeamController: ", error);
        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
};