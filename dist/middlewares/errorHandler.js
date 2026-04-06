"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = errorHandler;
exports.notFound = notFound;
const apiResponse_1 = require("../utils/apiResponse");
function errorHandler(err, req, res, next) {
    console.error(`[ERROR] ${err.message}`);
    res.status(500).json(new apiResponse_1.ApiResponse(false, err.message || "Internal server error"));
}
function notFound(req, res) {
    res.status(404).json(new apiResponse_1.ApiResponse(false, `Route ${req.originalUrl} not found`));
}
