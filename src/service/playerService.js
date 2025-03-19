import { createPlayerRepository, findPlayerByEmailRepository, findPlayerByIdRepository, findPlayerForSignInRepository } from "../repository/playerRepository.js";
import bcrypt from "bcryptjs";
import { Player } from "../schema/playerSchema.js";
import { uploadMedia } from "../utils/cloudinary.js";

export const createPlayerService = async (playerData) => {
    try {
        const { registrationNo, name, fatherName, motherName, religion, age, dateOfBirth, email, phone, address, district, bloodGroup, institution, studyingClass, password, team, tournament, position } = playerData.body;
        const photoUrl = playerData.file;

        let cloudResponse;
        let photo;
        
        if(photoUrl){
            cloudResponse = await uploadMedia(photoUrl.path);
            photo = cloudResponse.secure_url;
        }

        if(!registrationNo || !name || !fatherName || !motherName || !religion || !age || !dateOfBirth || !email || !phone || !address || !district || !bloodGroup || !institution || !studyingClass || !photo || !password || !team || !tournament || !position){
            throw new Error("All fields are required");
        };

        const existingPlayer = await Player.findOne({ registrationNo });

        if(existingPlayer){
            throw new Error("Player already exists");
        };

        const hashedPassword = await bcrypt.hash(password, 10);

        const newPlayer = createPlayerRepository({
            registrationNo,
            name,
            fatherName,
            motherName,
            religion,
            age,
            dateOfBirth,
            email,
            phone,
            address,
            district,
            bloodGroup,
            institution,
            studyingClass,
            photo,
            team,
            tournament,
            position,
            password: hashedPassword
        });

        return newPlayer;
    } catch (error) {
        console.log("Error in createPlayer service: ", error);
        throw new Error("Internal serverr error");        
    }
};

export const playerSignInService = async (player) => {
    try {
        const {email, password} = player;

        if(!email || !password){
            throw new Error("All fields are required");
        };

        const existingPlayer = await findPlayerForSignInRepository(email);

        if(!existingPlayer){
            throw new Error("Player not found");
        };

        const isPasswordMatch = await bcrypt.compare(password, existingPlayer.password);

        if(!isPasswordMatch){
            throw new Error("Invalid credentials");
        };

        return existingPlayer;
    } catch (error) {
        console.log("Error in findPlayerForSignIn service: ", error);
        throw new Error("Internal server error");
    }
};

export const findPlayerByEmailService = async (email) => {
    try {
        const playerData = await findPlayerByEmailRepository(email);

        return playerData;
    } catch (error) {
        console.log("Error in findPlayerByEmail service: ", error);
        throw new Error("Internal server error");
    }
};

export const findPlayerByIdService = async (id) => {
    try {
        const playerData = await findPlayerByIdRepository(id);

        return playerData;
    } catch (error) {
        console.log("Error in findPlayerById service: ", error);
        throw new Error("Internal serverr error");
    }
};