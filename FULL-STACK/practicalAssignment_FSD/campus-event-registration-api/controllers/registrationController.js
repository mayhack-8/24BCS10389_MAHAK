
const Registration = require("../models/Registration");
const mongoose = require("mongoose");

const calculateFinalAmount = (ticketPrice, discountCode) => {
    if (!discountCode) {
        return ticketPrice;
    }

    if (discountCode === "CAMPUS50") {
        return ticketPrice * 0.5;
    }

    if (discountCode === "EARLYBIRD") {
        return Math.max(0, ticketPrice - 100);
    }

    return null;
};

const allowedFields = [
    "studentName",
    "collegeEmail",
    "rollNumber",
    "eventType",
    "teamSize",
    "ticketPrice",
    "discountCode",
    "status",
    "registrationDate"
];

const getUpdateData = (body) => {
    const data = {};

    allowedFields.forEach((field) => {
        if (Object.prototype.hasOwnProperty.call(body, field)) {
            data[field] = body[field];
        }
    });

    return data;
};

const checkId = (id, res) => {
    if (!mongoose.isValidObjectId(id)) {
        res.status(400).json({
            success: false,
            message: "Invalid registration ID format"
        });
        return false;
    }

    return true;
};

// Create a registration
exports.createRegistration = async (req, res) => {
    const data = getUpdateData(req.body);

    const discountCode = data.discountCode
        ? String(data.discountCode).trim().toUpperCase()
        : "";

    data.discountCode = discountCode || undefined;

    const finalAmount = calculateFinalAmount(
        data.ticketPrice,
        discountCode
    );

    if (finalAmount === null) {
        return res.status(400).json({
            success: false,
            message: "Invalid discount code"
        });
    }

    data.finalAmount = finalAmount;

    const registration = await Registration.create(data);

    res.status(201).json({
        success: true,
        message: "Registration successful",
        data: registration
    });
};

// Get all registrations, with optional filters
exports.getRegistrations = async (req, res) => {
    const filter = {};

    if (req.query.eventType) {
        filter.eventType = req.query.eventType;
    }

    if (req.query.status) {
        filter.status = req.query.status;
    }

    const registrations = await Registration.find(filter);

    res.status(200).json({
        success: true,
        count: registrations.length,
        data: registrations
    });
};

// Get one registration by ID
exports.getRegistrationById = async (req, res) => {
    if (!checkId(req.params.id, res)) return;

    const registration = await Registration.findById(req.params.id);

    if (!registration) {
        return res.status(404).json({
            success: false,
            message: "Registration not found"
        });
    }

    res.status(200).json({
        success: true,
        data: registration
    });
};

// Update a registration
exports.updateRegistration = async (req, res) => {
    if (!checkId(req.params.id, res)) return;

    const current = await Registration.findById(req.params.id);

    if (!current) {
        return res.status(404).json({
            success: false,
            message: "Registration not found"
        });
    }

    const updates = getUpdateData(req.body);
    const candidateData = {
        ...current.toObject(),
        ...updates
    };

    if (Object.prototype.hasOwnProperty.call(updates, "discountCode")) {
        candidateData.discountCode = updates.discountCode
            ? String(updates.discountCode).trim().toUpperCase()
            : undefined;
    }

    const discountCode = candidateData.discountCode || "";

    const finalAmount = calculateFinalAmount(
        candidateData.ticketPrice,
        discountCode
    );

    if (finalAmount === null) {
        return res.status(400).json({
            success: false,
            message: "Invalid discount code"
        });
    }

    candidateData.finalAmount = finalAmount;

    // Validate the combined document, including the AI Workshop rule.
    const candidate = new Registration(candidateData);
    await candidate.validate();

    const registration = await Registration.findByIdAndUpdate(
        req.params.id,
        {
            ...updates,
            discountCode: candidateData.discountCode,
            finalAmount
        },
        {
            new: true,
            runValidators: true,
            context: "query"
        }
    );

    res.status(200).json({
        success: true,
        message: "Registration updated successfully",
        data: registration
    });
};

// Delete a registration
exports.deleteRegistration = async (req, res) => {
    if (!checkId(req.params.id, res)) return;

    const registration = await Registration.findByIdAndDelete(req.params.id);

    if (!registration) {
        return res.status(404).json({
            success: false,
            message: "Registration not found"
        });
    }

    res.status(200).json({
        success: true,
        message: "Registration deleted successfully"
    });
};