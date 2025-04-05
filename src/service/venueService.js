import { createVenueRepository, deleteVenueRepository, getAllVenuesRepository } from "../repository/venueRepository.js";
import { uploadMedia } from "../utils/cloudinary.js";

export const createVenueService = async (req) => {
    try {
        const { venueName, venueLocation, venueLink } = req.body;
        if (!venueName || !venueLocation || !venueLink) {
            throw new Error("All fields are required");
        };

        const venuePhoto = req.file ? req.file.path : null;

        let cloudResponse;
        let venueImage;

        if (venuePhoto) {
            cloudResponse = await uploadMedia(venuePhoto);
            venueImage = cloudResponse.secure_url;
        };

        const venueData = {
            venueName,
            venueLocation,
            venueLink,
            venueImage
        };

        const venue = await createVenueRepository(venueData);

        return venue;
    } catch (error) {
        //console.error("Error creating venue service:", error);
        throw new Error("Error creating venue service");
    }
};

export const getAllVenuesService = async () => {
    try {
        const venues = await getAllVenuesRepository();

        return venues;
    } catch (error) {
        //console.error("Error fetching all venues service:", error);
        throw new Error("Error fetching all venues service");
    }
};

export const deleteVenueService = async (venueId) => {
    try {
        const venue = await deleteVenueRepository(venueId);

        return venue;
    } catch (error) {
        //console.error("Error deleting venue service:", error);
        throw new Error("Error deleting venue service");
    }
};