import { Player } from "../schema/playerSchema.js";

export const createPlayerRepository = async (playerData) => {
    try {
        const player = Player.create(playerData);
        return player;
    } catch (error) {
        console.log("Error in createPlayer repository: ", error);
        throw new Error("Internal server error");
    }
};

export const findPlayerForSignInRepository = async (email) => {
    try {
        const player = await Player.findOne({ email });

        return player;
    } catch (error) {
        console.log("Error in findPlayerForSignIn repository: ", error);
        throw new Error("Internal serverr error");
    }
};

export const findPlayerByEmailRepository = async (email) => {
    try {
        const player = await Player.findOne({ email });
        return player;
    } catch (error) {
        console.log("Error in findPlayerByEmail repository: ", error);
        throw new Error("Internal server error");
    }
};

export const findPlayerByIdRepository = async (id) => {
    try {
        const playerData = await Player.findById(id);

        return playerData;
    } catch (error) {
        console.log("Error in findPlayerById repository: ", error);
        throw new Error("Internal server error");
    }
};