
const errorMiddleware = (err, req, res, next) => {
    if (err.code === 11000) {
        return res.status(409).json({
            success: false,
            message: "This email is already registered for the event"
        });
    }

    if (err.name === "ValidationError") {
        const errors = Object.values(err.errors).map(
            (error) => error.message
        );

        return res.status(400).json({
            success: false,
            message: "Validation failed",
            errors
        });
    }

    if (err.name === "CastError") {
        return res.status(400).json({
            success: false,
            message: "Invalid registration ID format"
        });
    }

    console.error(err.message);

    return res.status(err.statusCode || 500).json({
        success: false,
        message: err.statusCode
            ? err.message
            : "Internal server error"
    });
};

module.exports = errorMiddleware;
