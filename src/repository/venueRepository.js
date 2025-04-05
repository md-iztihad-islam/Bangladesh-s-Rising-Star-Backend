import { Venue } from "../schema/venueSchema.js";

export const createVenueRepository = async (venueData) => {
    try {
        const venue = await Venue.create(venueData);

        return venue;
    } catch (error) {
        //console.error("Error creating venue repository:", error);
        throw new Error("Error creating venue repository");        
    }
};

export const getAllVenuesRepository = async () => {
    try {
        const venues = await Venue.find();

        return venues;
    } catch (error) {
        //console.error("Error fetching all venues repository:", error);
        throw new Error("Error fetching all venues repository");        
    }
};

export const deleteVenueRepository = async (venueId) => {
    try {
        const venue = await Venue.findByIdAndDelete(venueId);

        return venue;
    } catch (error) {
        //console.error("Error deleting venue repository:", error);
        throw new Error("Error deleting venue repository");        
    }
};