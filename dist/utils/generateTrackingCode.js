"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateTrackingCode = generateTrackingCode;
function generateTrackingCode(prefix = "RM") {
    const number = Math.floor(1000 + Math.random() * 9000);
    const timestamp = Date.now().toString().slice(-4);
    return `${prefix}-${number}${timestamp}`;
}
