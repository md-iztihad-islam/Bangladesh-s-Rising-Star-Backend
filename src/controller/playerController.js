import { createPlayerService, findPlayerByEmailService, findPlayerByIdService, playerSignInService } from "../service/playerService.js";
import { generateJwtToken } from "../utils/jwtToken.js";

export const createPlayerController = async (req, res) => {
    try {
        const playerData = req;

        const newPlayer = await createPlayerService(playerData);

        return res.status(201).json({
            success: true,
            message: "Player registered successfully",
            data: newPlayer
        });
    } catch (error) {
        console.log("Error in createPlayer controller: ", error);
        return res.status(500).json({
            success: false,
            message: "Failed to register. Please try again."
        });
        
    }
};

export const playerSignInController = async (req, res) => {
    try {
        const user = req.body;

        const registeredUser = await playerSignInService(user, res);

        const token = generateJwtToken(registeredUser._id);




        return res.status(200).cookie("token", token, {httpOnly: true, sameSite: "strict", maxAge: 86400 * 1000}).json({
            success: true,
            message: "Signedin successfully",
            data: registeredUser,
        });
    } catch (error) {
        console.log("Error in playerSignIn controller: ", error);
        return res.status(500).json({
            success: false,
            message: "Failed to sign in. Please try again."
        });        
    }
};

export const playerSignoutController = async (req, res) => {
    try {
        return res.status(200).cookie("token", "", {maxAge: 0}).json({
            success: true,
            message: "Signedout successfully",
        });
    } catch (error) {
        console.log("Error signing out user: ", error);
        return res.status(500).json({
            success: false,
            message: "failed to signout",
        });
    }
};

export const findPlayerByIdController = async (req, res) => {
    try {
        const playerId = req.id || req.params.playerId;


        const playerData = await findPlayerByIdService(playerId);

        if(!playerData){
            return res.status(404).json({
                success: false,
                message: "Player not found"
            });
        };

        return res.status(200).json({
            success: true,
            message: "Player found",
            data: playerData
        });
    } catch (error) {
        console.log("Error in findPlayerById controller: ", error);
        return res.status(500).json({
            success: false,
            message: "Failed to fetch player. Please try again."
        });
    }
};

export const findPlayerByEmailController = async (req, res) => {
    try {
        const email = req.params.email;

        const playerData = await findPlayerByEmailService(email);

        if(!playerData){
            return res.status(404).json({
                success: false,
                message: "Player not found"
            });
        };

        return res.status(200).json({
            success: true,
            message: "Player found",
            data: playerData
        });
    } catch (error) {
        console.log("Error in findPlayerByEmail controller: ", error);
        return res.status(500).json({
            success: false,
            message: "Failed to fetch player. Please try again."
        });
    }
};

