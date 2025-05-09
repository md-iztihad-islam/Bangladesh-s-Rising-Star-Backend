import express from 'express';
import { createTournamentController, deleteTournamentController, findAllTournamentController, findTournamentByIdController } from '../../controller/tournamentController.js';
import { addplayerController, createTeamController, deleteTeamController, findAllTeamController, findTeamByIdController, findTeamPlayersController, updateTeamController, updateTeamDataController } from '../../controller/teamController.js';
import { createMatchController, getAllMatchesController, getMatchByIdController, getMatchByTournamentController, updateMatchController } from '../../controller/matchController.js';
import upload from '../../config/multerConfig.js';

const router = express.Router();

router.post("/create", upload.single("tournamentLogo"),createTournamentController);
router.get("/alltournaments", findAllTournamentController);
router.get("/:tournamentId/tournament", findTournamentByIdController);
router.delete("/:tournamentId/delete", deleteTournamentController);
router.post("/:tournamentId/createteam", upload.single("teamLogo"),createTeamController);
router.get("/:tournamentId/allteams", findAllTeamController);
router.get("/:tournamentId/:teamId/team", findTeamByIdController);
router.delete("/:tournamentId/:teamId/delete", deleteTeamController);
router.post("/:tournamentId/:teamId/addplayer", addplayerController);
router.get("/:tournamentId/:teamId/teamplayer", findTeamPlayersController);
router.post("/:tournamentId/createMatch", upload.fields([ {name: "matchTeam1Logo"}, {name: "matchTeam2Logo"}] ),createMatchController);
router.get("/:tournamentId/getmatch", getMatchByTournamentController);
router.post("/:tournamentId/:matchId/updatematch", upload.fields([ {name: "matchTeam1Logo"}, {name: "matchTeam2Logo"}] ), updateMatchController);
router.get("/:tournamentId/:matchId/getmatch", getMatchByIdController);
router.get("/matches", getAllMatchesController);
router.post("/:tournamentId/:teamId/updateteam", updateTeamController);
router.post("/:tournamentId/:teamId/updateteamdata", updateTeamDataController);


export default router;