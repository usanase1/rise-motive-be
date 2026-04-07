"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateDto = validateDto;
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
async function validateDto(dtoClass, body) {
    const dtoObject = (0, class_transformer_1.plainToInstance)(dtoClass, body);
    const errors = await (0, class_validator_1.validate)(dtoObject);
    if (errors.length > 0) {
        // Grab the first validation error message to return to the user
        const firstError = Object.values(errors[0].constraints || {})[0];
        throw new Error(firstError);
    }
}
