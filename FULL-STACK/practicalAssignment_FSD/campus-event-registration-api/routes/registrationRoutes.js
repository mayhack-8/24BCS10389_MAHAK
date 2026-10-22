
const express = require("express");
const router = express.Router();

const {
    createRegistration,
    getRegistrations,
    getRegistrationById,
    updateRegistration,
    deleteRegistration
} = require("../controllers/registrationController");

router.route("/")
    .post(createRegistration)
    .get(getRegistrations);

router.route("/:id")
    .get(getRegistrationById)
    .put(updateRegistration)
    .delete(deleteRegistration);

module.exports = router;
