import { getAllVenuesRepository } from "../repository/venueRepository.js";
import { createVenueService, deleteVenueService } from "../service/venueService.js";

export const createVenueController = async (req, res) => {
    try {
        const venueData = await createVenueService(req);

        if (!venueData) {
            return res.status(400).json({
                success: false,
                message: "Venue creation failed"
            });
        }

        res.status(201).json({
            success: true,
            message: "Venue created successfully",
            data: venueData
        });

    } catch (error) {
        //console.error("Error in createVenueController:", error);
        res.status(500).json({
            success: false,
            message: "Internal Server Error" 
        });
    }
};

export const getAllVenuesController = async (req, res) => {
    try {
        const venueData = await getAllVenuesRepository();

        if(!venueData) {
            return res.status(404).json({
                success: false,
                message: "No venues found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Venues fetched successfully",
            data: venueData
        });
    } catch (error) {
        //console.error("Error in getAllVenuesController:", error);
        res.status(500).json({
            success: false,
            message: "Internal Server Error" 
        });
        
    }
};

export const deleteVenueController = async (req, res) => {
    try {
        const { venueId } = req.params;

        if (!venueId) {
            return res.status(400).json({
                success: false,
                message: "Venue ID is required"
            });
        }

        const deletedVenue = await deleteVenueService(venueId);

        if (!deletedVenue) {
            return res.status(404).json({
                success: false,
                message: "Venue not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Venue deleted successfully",
            data: deletedVenue
        });
    } catch (error) {
        //console.error("Error in deleteVenueController:", error);
        res.status(500).json({
            success: false,
            message: "Internal Server Error" 
        });
    }
};