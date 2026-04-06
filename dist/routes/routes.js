"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterRoutes = RegisterRoutes;
const runtime_1 = require("@tsoa/runtime");
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
const trainingApplication_controller_1 = require("./../controllers/trainingApplication.controller");
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
const tasker_controller_1 = require("./../controllers/tasker.controller");
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
const serviceRequest_controller_1 = require("./../controllers/serviceRequest.controller");
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
const product_controller_1 = require("./../controllers/product.controller");
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
const order_controller_1 = require("./../controllers/order.controller");
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
const infoPost_controller_1 = require("./../controllers/infoPost.controller");
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
const auth_controller_1 = require("./../controllers/auth.controller");
const auth_middleware_1 = require("./../middlewares/auth.middleware");
const expressAuthenticationRecasted = auth_middleware_1.expressAuthentication;
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
const models = {
    "CreateTrainingApplicationDto": {
        "dataType": "refObject",
        "properties": {
            "fullName": { "dataType": "string", "required": true },
            "phone": { "dataType": "string", "required": true },
            "email": { "dataType": "string" },
            "selectedCourse": { "dataType": "union", "subSchemas": [{ "dataType": "enum", "enums": ["COMPUTER_FOUNDATIONS"] }, { "dataType": "enum", "enums": ["MICROSOFT_OFFICE"] }, { "dataType": "enum", "enums": ["GOOGLE_TOOLS"] }, { "dataType": "enum", "enums": ["E_GOVERNMENT_TOOLS"] }, { "dataType": "enum", "enums": ["DIGITAL_CONTENT_CREATION"] }, { "dataType": "enum", "enums": ["GRAPHIC_DESIGN"] }, { "dataType": "enum", "enums": ["AI_AND_DIGITAL_TOOLS"] }, { "dataType": "enum", "enums": ["BASIC_PROGRAMMING"] }], "required": true },
            "preferredSchedule": { "dataType": "string" },
            "experienceLevel": { "dataType": "union", "subSchemas": [{ "dataType": "enum", "enums": ["BEGINNER"] }, { "dataType": "enum", "enums": ["INTERMEDIATE"] }] },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "TrainingApplicationResponse": {
        "dataType": "refObject",
        "properties": {
            "id": { "dataType": "double", "required": true },
            "fullName": { "dataType": "string", "required": true },
            "phone": { "dataType": "string", "required": true },
            "email": { "dataType": "union", "subSchemas": [{ "dataType": "string" }, { "dataType": "enum", "enums": [null] }] },
            "selectedCourse": { "dataType": "union", "subSchemas": [{ "dataType": "enum", "enums": ["COMPUTER_FOUNDATIONS"] }, { "dataType": "enum", "enums": ["MICROSOFT_OFFICE"] }, { "dataType": "enum", "enums": ["GOOGLE_TOOLS"] }, { "dataType": "enum", "enums": ["E_GOVERNMENT_TOOLS"] }, { "dataType": "enum", "enums": ["DIGITAL_CONTENT_CREATION"] }, { "dataType": "enum", "enums": ["GRAPHIC_DESIGN"] }, { "dataType": "enum", "enums": ["AI_AND_DIGITAL_TOOLS"] }, { "dataType": "enum", "enums": ["BASIC_PROGRAMMING"] }], "required": true },
            "preferredSchedule": { "dataType": "union", "subSchemas": [{ "dataType": "string" }, { "dataType": "enum", "enums": [null] }] },
            "experienceLevel": { "dataType": "union", "subSchemas": [{ "dataType": "enum", "enums": ["BEGINNER"] }, { "dataType": "enum", "enums": ["INTERMEDIATE"] }, { "dataType": "enum", "enums": [null] }] },
            "status": { "dataType": "union", "subSchemas": [{ "dataType": "enum", "enums": ["PENDING"] }, { "dataType": "enum", "enums": ["ACCEPTED"] }, { "dataType": "enum", "enums": ["REJECTED"] }], "required": true },
            "createdAt": { "dataType": "datetime", "required": true },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ApiResponse_TrainingApplicationResponse_": {
        "dataType": "refObject",
        "properties": {
            "success": { "dataType": "boolean", "required": true },
            "message": { "dataType": "string", "required": true },
            "data": { "ref": "TrainingApplicationResponse" },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ApiResponse_null_": {
        "dataType": "refObject",
        "properties": {
            "success": { "dataType": "boolean", "required": true },
            "message": { "dataType": "string", "required": true },
            "data": { "dataType": "enum", "enums": [null] },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ApiResponse_TrainingApplicationResponse-Array_": {
        "dataType": "refObject",
        "properties": {
            "success": { "dataType": "boolean", "required": true },
            "message": { "dataType": "string", "required": true },
            "data": { "dataType": "array", "array": { "dataType": "refObject", "ref": "TrainingApplicationResponse" } },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "UpdateTrainingApplicationDto": {
        "dataType": "refObject",
        "properties": {
            "status": { "dataType": "union", "subSchemas": [{ "dataType": "enum", "enums": ["PENDING"] }, { "dataType": "enum", "enums": ["ACCEPTED"] }, { "dataType": "enum", "enums": ["REJECTED"] }] },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ApiResponse__message-string__": {
        "dataType": "refObject",
        "properties": {
            "success": { "dataType": "boolean", "required": true },
            "message": { "dataType": "string", "required": true },
            "data": { "dataType": "nestedObjectLiteral", "nestedProperties": { "message": { "dataType": "string", "required": true } } },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "CreateTaskerDto": {
        "dataType": "refObject",
        "properties": {
            "name": { "dataType": "string", "required": true },
            "phone": { "dataType": "string", "required": true },
            "specialties": { "dataType": "string", "required": true },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "TaskerResponse": {
        "dataType": "refObject",
        "properties": {
            "id": { "dataType": "double", "required": true },
            "name": { "dataType": "string", "required": true },
            "phone": { "dataType": "string", "required": true },
            "email": { "dataType": "union", "subSchemas": [{ "dataType": "string" }, { "dataType": "enum", "enums": [null] }] },
            "specialties": { "dataType": "string", "required": true },
            "isActive": { "dataType": "boolean", "required": true },
            "createdAt": { "dataType": "datetime", "required": true },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ApiResponse_TaskerResponse_": {
        "dataType": "refObject",
        "properties": {
            "success": { "dataType": "boolean", "required": true },
            "message": { "dataType": "string", "required": true },
            "data": { "ref": "TaskerResponse" },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ApiResponse_TaskerResponse-Array_": {
        "dataType": "refObject",
        "properties": {
            "success": { "dataType": "boolean", "required": true },
            "message": { "dataType": "string", "required": true },
            "data": { "dataType": "array", "array": { "dataType": "refObject", "ref": "TaskerResponse" } },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "UpdateTaskerDto": {
        "dataType": "refObject",
        "properties": {
            "name": { "dataType": "string" },
            "phone": { "dataType": "string" },
            "specialties": { "dataType": "string" },
            "isActive": { "dataType": "boolean" },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "CreateServiceRequestDto": {
        "dataType": "refObject",
        "properties": {
            "customerName": { "dataType": "string", "required": true },
            "customerPhone": { "dataType": "string", "required": true },
            "customerEmail": { "dataType": "string" },
            "serviceCategory": { "dataType": "union", "subSchemas": [{ "dataType": "enum", "enums": ["E_GOVERNMENT"] }, { "dataType": "enum", "enums": ["APPLICATIONS_DOCS"] }, { "dataType": "enum", "enums": ["CREATIVE_MEDIA"] }, { "dataType": "enum", "enums": ["WEB_DIGITAL"] }, { "dataType": "enum", "enums": ["LEGAL_OFFICIAL"] }], "required": true },
            "service": { "dataType": "string", "required": true },
            "description": { "dataType": "string", "required": true },
            "documentUrl": { "dataType": "string" },
            "preferredDate": { "dataType": "string" },
            "location": { "dataType": "string", "required": true },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ServiceRequestResponse": {
        "dataType": "refObject",
        "properties": {
            "id": { "dataType": "double", "required": true },
            "trackingCode": { "dataType": "string", "required": true },
            "customerName": { "dataType": "string", "required": true },
            "customerPhone": { "dataType": "string", "required": true },
            "serviceCategory": { "dataType": "string", "required": true },
            "service": { "dataType": "string", "required": true },
            "description": { "dataType": "string", "required": true },
            "documentUrl": { "dataType": "union", "subSchemas": [{ "dataType": "string" }, { "dataType": "enum", "enums": [null] }] },
            "preferredDate": { "dataType": "union", "subSchemas": [{ "dataType": "string" }, { "dataType": "enum", "enums": [null] }] },
            "location": { "dataType": "string", "required": true },
            "status": { "dataType": "string", "required": true },
            "createdAt": { "dataType": "datetime", "required": true },
            "updatedAt": { "dataType": "datetime", "required": true },
            "tasker": { "dataType": "union", "subSchemas": [{ "dataType": "nestedObjectLiteral", "nestedProperties": { "email": { "dataType": "union", "subSchemas": [{ "dataType": "string" }, { "dataType": "enum", "enums": [null] }] }, "phone": { "dataType": "string", "required": true }, "name": { "dataType": "string", "required": true } } }, { "dataType": "enum", "enums": [null] }] },
            "statusHistory": { "dataType": "array", "array": { "dataType": "nestedObjectLiteral", "nestedProperties": { "createdAt": { "dataType": "datetime", "required": true }, "note": { "dataType": "union", "subSchemas": [{ "dataType": "string" }, { "dataType": "enum", "enums": [null] }], "required": true }, "status": { "dataType": "string", "required": true } } } },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ApiResponse_ServiceRequestResponse_": {
        "dataType": "refObject",
        "properties": {
            "success": { "dataType": "boolean", "required": true },
            "message": { "dataType": "string", "required": true },
            "data": { "ref": "ServiceRequestResponse" },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ApiResponse_ServiceRequestResponse-Array_": {
        "dataType": "refObject",
        "properties": {
            "success": { "dataType": "boolean", "required": true },
            "message": { "dataType": "string", "required": true },
            "data": { "dataType": "array", "array": { "dataType": "refObject", "ref": "ServiceRequestResponse" } },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "UpdateRequestStatusDto": {
        "dataType": "refObject",
        "properties": {
            "status": { "dataType": "union", "subSchemas": [{ "dataType": "enum", "enums": ["PENDING"] }, { "dataType": "enum", "enums": ["ASSIGNED"] }, { "dataType": "enum", "enums": ["IN_PROGRESS"] }, { "dataType": "enum", "enums": ["COMPLETED"] }, { "dataType": "enum", "enums": ["CANCELLED"] }], "required": true },
            "taskerId": { "dataType": "double" },
            "note": { "dataType": "string", "required": true },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "CreateProductDto": {
        "dataType": "refObject",
        "properties": {
            "name": { "dataType": "string", "required": true },
            "description": { "dataType": "string" },
            "price": { "dataType": "string" },
            "category": { "dataType": "string", "required": true },
            "imageUrl": { "dataType": "string" },
            "inStock": { "dataType": "boolean" },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ProductResponse": {
        "dataType": "refObject",
        "properties": {
            "id": { "dataType": "double", "required": true },
            "name": { "dataType": "string", "required": true },
            "description": { "dataType": "union", "subSchemas": [{ "dataType": "string" }, { "dataType": "enum", "enums": [null] }] },
            "price": { "dataType": "union", "subSchemas": [{ "dataType": "string" }, { "dataType": "enum", "enums": [null] }] },
            "category": { "dataType": "string", "required": true },
            "imageUrl": { "dataType": "union", "subSchemas": [{ "dataType": "string" }, { "dataType": "enum", "enums": [null] }] },
            "inStock": { "dataType": "boolean", "required": true },
            "createdAt": { "dataType": "datetime", "required": true },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ApiResponse_ProductResponse_": {
        "dataType": "refObject",
        "properties": {
            "success": { "dataType": "boolean", "required": true },
            "message": { "dataType": "string", "required": true },
            "data": { "ref": "ProductResponse" },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ApiResponse_ProductResponse-Array_": {
        "dataType": "refObject",
        "properties": {
            "success": { "dataType": "boolean", "required": true },
            "message": { "dataType": "string", "required": true },
            "data": { "dataType": "array", "array": { "dataType": "refObject", "ref": "ProductResponse" } },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "UpdateProductDto": {
        "dataType": "refObject",
        "properties": {
            "name": { "dataType": "string" },
            "description": { "dataType": "string" },
            "price": { "dataType": "string" },
            "category": { "dataType": "string" },
            "imageUrl": { "dataType": "string" },
            "inStock": { "dataType": "boolean" },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "CreateOrderDto": {
        "dataType": "refObject",
        "properties": {
            "customerName": { "dataType": "string", "required": true },
            "customerPhone": { "dataType": "string", "required": true },
            "customerEmail": { "dataType": "string" },
            "address": { "dataType": "string", "required": true },
            "quantity": { "dataType": "double", "required": true },
            "note": { "dataType": "string" },
            "productId": { "dataType": "double", "required": true },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "OrderResponse": {
        "dataType": "refObject",
        "properties": {
            "id": { "dataType": "double", "required": true },
            "trackingCode": { "dataType": "string", "required": true },
            "customerName": { "dataType": "string", "required": true },
            "customerPhone": { "dataType": "string", "required": true },
            "address": { "dataType": "string", "required": true },
            "quantity": { "dataType": "double", "required": true },
            "note": { "dataType": "union", "subSchemas": [{ "dataType": "string" }, { "dataType": "enum", "enums": [null] }] },
            "status": { "dataType": "union", "subSchemas": [{ "dataType": "enum", "enums": ["PENDING"] }, { "dataType": "enum", "enums": ["CONFIRMED"] }, { "dataType": "enum", "enums": ["OUT_FOR_DELIVERY"] }, { "dataType": "enum", "enums": ["DELIVERED"] }, { "dataType": "enum", "enums": ["CANCELLED"] }], "required": true },
            "paymentMethod": { "dataType": "union", "subSchemas": [{ "dataType": "string" }, { "dataType": "enum", "enums": [null] }] },
            "createdAt": { "dataType": "datetime", "required": true },
            "updatedAt": { "dataType": "datetime", "required": true },
            "product": { "dataType": "nestedObjectLiteral", "nestedProperties": { "createdAt": { "dataType": "datetime", "required": true }, "inStock": { "dataType": "boolean", "required": true }, "imageUrl": { "dataType": "union", "subSchemas": [{ "dataType": "string" }, { "dataType": "enum", "enums": [null] }] }, "category": { "dataType": "string", "required": true }, "price": { "dataType": "union", "subSchemas": [{ "dataType": "string" }, { "dataType": "enum", "enums": [null] }] }, "description": { "dataType": "union", "subSchemas": [{ "dataType": "string" }, { "dataType": "enum", "enums": [null] }] }, "name": { "dataType": "string", "required": true }, "id": { "dataType": "double", "required": true } }, "required": true },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ApiResponse_OrderResponse_": {
        "dataType": "refObject",
        "properties": {
            "success": { "dataType": "boolean", "required": true },
            "message": { "dataType": "string", "required": true },
            "data": { "ref": "OrderResponse" },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ApiResponse_OrderResponse-Array_": {
        "dataType": "refObject",
        "properties": {
            "success": { "dataType": "boolean", "required": true },
            "message": { "dataType": "string", "required": true },
            "data": { "dataType": "array", "array": { "dataType": "refObject", "ref": "OrderResponse" } },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "UpdateOrderStatusDto": {
        "dataType": "refObject",
        "properties": {
            "status": { "dataType": "union", "subSchemas": [{ "dataType": "enum", "enums": ["PENDING"] }, { "dataType": "enum", "enums": ["CONFIRMED"] }, { "dataType": "enum", "enums": ["OUT_FOR_DELIVERY"] }, { "dataType": "enum", "enums": ["DELIVERED"] }, { "dataType": "enum", "enums": ["CANCELLED"] }], "required": true },
            "paymentMethod": { "dataType": "union", "subSchemas": [{ "dataType": "enum", "enums": ["VISA"] }, { "dataType": "enum", "enums": ["TELEPHONE"] }, { "dataType": "enum", "enums": ["CASH"] }] },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "CreateInfoPostDto": {
        "dataType": "refObject",
        "properties": {
            "title": { "dataType": "string", "required": true },
            "description": { "dataType": "string", "required": true },
            "category": { "dataType": "union", "subSchemas": [{ "dataType": "enum", "enums": ["JOB"] }, { "dataType": "enum", "enums": ["SCHOLARSHIP"] }, { "dataType": "enum", "enums": ["COMPETITION"] }, { "dataType": "enum", "enums": ["COMMUNITY"] }, { "dataType": "enum", "enums": ["ADVISORY"] }], "required": true },
            "deadline": { "dataType": "string" },
            "location": { "dataType": "string" },
            "applyLink": { "dataType": "string" },
            "contactInfo": { "dataType": "string" },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "InfoPostResponse": {
        "dataType": "refObject",
        "properties": {
            "id": { "dataType": "double", "required": true },
            "title": { "dataType": "string", "required": true },
            "description": { "dataType": "string", "required": true },
            "category": { "dataType": "union", "subSchemas": [{ "dataType": "enum", "enums": ["JOB"] }, { "dataType": "enum", "enums": ["SCHOLARSHIP"] }, { "dataType": "enum", "enums": ["COMPETITION"] }, { "dataType": "enum", "enums": ["COMMUNITY"] }, { "dataType": "enum", "enums": ["ADVISORY"] }], "required": true },
            "deadline": { "dataType": "union", "subSchemas": [{ "dataType": "string" }, { "dataType": "enum", "enums": [null] }] },
            "location": { "dataType": "union", "subSchemas": [{ "dataType": "string" }, { "dataType": "enum", "enums": [null] }] },
            "applyLink": { "dataType": "union", "subSchemas": [{ "dataType": "string" }, { "dataType": "enum", "enums": [null] }] },
            "contactInfo": { "dataType": "union", "subSchemas": [{ "dataType": "string" }, { "dataType": "enum", "enums": [null] }] },
            "isActive": { "dataType": "boolean", "required": true },
            "createdAt": { "dataType": "datetime", "required": true },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ApiResponse_InfoPostResponse_": {
        "dataType": "refObject",
        "properties": {
            "success": { "dataType": "boolean", "required": true },
            "message": { "dataType": "string", "required": true },
            "data": { "ref": "InfoPostResponse" },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ApiResponse_InfoPostResponse-Array_": {
        "dataType": "refObject",
        "properties": {
            "success": { "dataType": "boolean", "required": true },
            "message": { "dataType": "string", "required": true },
            "data": { "dataType": "array", "array": { "dataType": "refObject", "ref": "InfoPostResponse" } },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "UpdateInfoPostDto": {
        "dataType": "refObject",
        "properties": {
            "title": { "dataType": "string" },
            "description": { "dataType": "string" },
            "category": { "dataType": "union", "subSchemas": [{ "dataType": "enum", "enums": ["JOB"] }, { "dataType": "enum", "enums": ["SCHOLARSHIP"] }, { "dataType": "enum", "enums": ["COMPETITION"] }, { "dataType": "enum", "enums": ["COMMUNITY"] }, { "dataType": "enum", "enums": ["ADVISORY"] }] },
            "deadline": { "dataType": "string" },
            "location": { "dataType": "string" },
            "applyLink": { "dataType": "string" },
            "contactInfo": { "dataType": "string" },
            "isActive": { "dataType": "boolean" },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "RegisterAdminDto": {
        "dataType": "refObject",
        "properties": {
            "fullName": { "dataType": "string", "required": true },
            "email": { "dataType": "string", "required": true },
            "password": { "dataType": "string", "required": true },
            "role": { "dataType": "union", "subSchemas": [{ "dataType": "enum", "enums": ["SUPER_ADMIN"] }, { "dataType": "enum", "enums": ["ADMIN"] }] },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AdminResponse": {
        "dataType": "refObject",
        "properties": {
            "id": { "dataType": "double", "required": true },
            "fullName": { "dataType": "string", "required": true },
            "email": { "dataType": "string", "required": true },
            "role": { "dataType": "union", "subSchemas": [{ "dataType": "enum", "enums": ["SUPER_ADMIN"] }, { "dataType": "enum", "enums": ["ADMIN"] }], "required": true },
            "isActive": { "dataType": "boolean", "required": true },
            "createdAt": { "dataType": "datetime", "required": true },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ApiResponse_AdminResponse_": {
        "dataType": "refObject",
        "properties": {
            "success": { "dataType": "boolean", "required": true },
            "message": { "dataType": "string", "required": true },
            "data": { "ref": "AdminResponse" },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "LoginDto": {
        "dataType": "refObject",
        "properties": {
            "email": { "dataType": "string", "required": true },
            "password": { "dataType": "string", "required": true },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "LoginResponse": {
        "dataType": "refObject",
        "properties": {
            "token": { "dataType": "string", "required": true },
            "admin": { "ref": "AdminResponse", "required": true },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ApiResponse_LoginResponse_": {
        "dataType": "refObject",
        "properties": {
            "success": { "dataType": "boolean", "required": true },
            "message": { "dataType": "string", "required": true },
            "data": { "ref": "LoginResponse" },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ApiResponse_AdminResponse-Array_": {
        "dataType": "refObject",
        "properties": {
            "success": { "dataType": "boolean", "required": true },
            "message": { "dataType": "string", "required": true },
            "data": { "dataType": "array", "array": { "dataType": "refObject", "ref": "AdminResponse" } },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
};
const templateService = new runtime_1.ExpressTemplateService(models, { "noImplicitAdditionalProperties": "throw-on-extras", "bodyCoercion": true });
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
function RegisterRoutes(app) {
    // ###########################################################################################################
    //  NOTE: If you do not see routes for all of your controllers in this file, then you might not have informed tsoa of where to look
    //      Please look into the "controllerPathGlobs" config option described in the readme: https://github.com/lukeautry/tsoa
    // ###########################################################################################################
    const argsTrainingApplicationController_apply = {
        requestBody: { "in": "body", "name": "requestBody", "required": true, "ref": "CreateTrainingApplicationDto" },
        successResponse: { "in": "res", "name": "201", "required": true, "ref": "ApiResponse_TrainingApplicationResponse_" },
        errorResponse: { "in": "res", "name": "400", "required": true, "ref": "ApiResponse_null_" },
    };
    app.post('/training-applications', ...((0, runtime_1.fetchMiddlewares)(trainingApplication_controller_1.TrainingApplicationController)), ...((0, runtime_1.fetchMiddlewares)(trainingApplication_controller_1.TrainingApplicationController.prototype.apply)), async function TrainingApplicationController_apply(request, response, next) {
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args: argsTrainingApplicationController_apply, request, response });
            const controller = new trainingApplication_controller_1.TrainingApplicationController();
            await templateService.apiHandler({
                methodName: 'apply',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsTrainingApplicationController_getAll = {
        successResponse: { "in": "res", "name": "200", "required": true, "ref": "ApiResponse_TrainingApplicationResponse-Array_" },
        errorResponse: { "in": "res", "name": "500", "required": true, "ref": "ApiResponse_null_" },
        status: { "in": "query", "name": "status", "dataType": "string" },
    };
    app.get('/training-applications', ...((0, runtime_1.fetchMiddlewares)(trainingApplication_controller_1.TrainingApplicationController)), ...((0, runtime_1.fetchMiddlewares)(trainingApplication_controller_1.TrainingApplicationController.prototype.getAll)), async function TrainingApplicationController_getAll(request, response, next) {
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args: argsTrainingApplicationController_getAll, request, response });
            const controller = new trainingApplication_controller_1.TrainingApplicationController();
            await templateService.apiHandler({
                methodName: 'getAll',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsTrainingApplicationController_getById = {
        id: { "in": "path", "name": "id", "required": true, "dataType": "double" },
        successResponse: { "in": "res", "name": "200", "required": true, "ref": "ApiResponse_TrainingApplicationResponse_" },
        notFoundResponse: { "in": "res", "name": "404", "required": true, "ref": "ApiResponse_null_" },
    };
    app.get('/training-applications/:id', ...((0, runtime_1.fetchMiddlewares)(trainingApplication_controller_1.TrainingApplicationController)), ...((0, runtime_1.fetchMiddlewares)(trainingApplication_controller_1.TrainingApplicationController.prototype.getById)), async function TrainingApplicationController_getById(request, response, next) {
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args: argsTrainingApplicationController_getById, request, response });
            const controller = new trainingApplication_controller_1.TrainingApplicationController();
            await templateService.apiHandler({
                methodName: 'getById',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsTrainingApplicationController_updateStatus = {
        id: { "in": "path", "name": "id", "required": true, "dataType": "double" },
        requestBody: { "in": "body", "name": "requestBody", "required": true, "ref": "UpdateTrainingApplicationDto" },
        successResponse: { "in": "res", "name": "200", "required": true, "ref": "ApiResponse_TrainingApplicationResponse_" },
        errorResponse: { "in": "res", "name": "400", "required": true, "ref": "ApiResponse_null_" },
    };
    app.patch('/training-applications/:id/status', ...((0, runtime_1.fetchMiddlewares)(trainingApplication_controller_1.TrainingApplicationController)), ...((0, runtime_1.fetchMiddlewares)(trainingApplication_controller_1.TrainingApplicationController.prototype.updateStatus)), async function TrainingApplicationController_updateStatus(request, response, next) {
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args: argsTrainingApplicationController_updateStatus, request, response });
            const controller = new trainingApplication_controller_1.TrainingApplicationController();
            await templateService.apiHandler({
                methodName: 'updateStatus',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsTrainingApplicationController_delete = {
        id: { "in": "path", "name": "id", "required": true, "dataType": "double" },
        successResponse: { "in": "res", "name": "200", "required": true, "ref": "ApiResponse__message-string__" },
        errorResponse: { "in": "res", "name": "400", "required": true, "ref": "ApiResponse_null_" },
    };
    app.delete('/training-applications/:id', ...((0, runtime_1.fetchMiddlewares)(trainingApplication_controller_1.TrainingApplicationController)), ...((0, runtime_1.fetchMiddlewares)(trainingApplication_controller_1.TrainingApplicationController.prototype.delete)), async function TrainingApplicationController_delete(request, response, next) {
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args: argsTrainingApplicationController_delete, request, response });
            const controller = new trainingApplication_controller_1.TrainingApplicationController();
            await templateService.apiHandler({
                methodName: 'delete',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsTaskerController_create = {
        requestBody: { "in": "body", "name": "requestBody", "required": true, "ref": "CreateTaskerDto" },
        successResponse: { "in": "res", "name": "201", "required": true, "ref": "ApiResponse_TaskerResponse_" },
        errorResponse: { "in": "res", "name": "400", "required": true, "ref": "ApiResponse_null_" },
    };
    app.post('/taskers', ...((0, runtime_1.fetchMiddlewares)(tasker_controller_1.TaskerController)), ...((0, runtime_1.fetchMiddlewares)(tasker_controller_1.TaskerController.prototype.create)), async function TaskerController_create(request, response, next) {
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args: argsTaskerController_create, request, response });
            const controller = new tasker_controller_1.TaskerController();
            await templateService.apiHandler({
                methodName: 'create',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsTaskerController_getAll = {
        successResponse: { "in": "res", "name": "200", "required": true, "ref": "ApiResponse_TaskerResponse-Array_" },
        errorResponse: { "in": "res", "name": "500", "required": true, "ref": "ApiResponse_null_" },
    };
    app.get('/taskers', ...((0, runtime_1.fetchMiddlewares)(tasker_controller_1.TaskerController)), ...((0, runtime_1.fetchMiddlewares)(tasker_controller_1.TaskerController.prototype.getAll)), async function TaskerController_getAll(request, response, next) {
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args: argsTaskerController_getAll, request, response });
            const controller = new tasker_controller_1.TaskerController();
            await templateService.apiHandler({
                methodName: 'getAll',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsTaskerController_getById = {
        id: { "in": "path", "name": "id", "required": true, "dataType": "double" },
        successResponse: { "in": "res", "name": "200", "required": true, "ref": "ApiResponse_TaskerResponse_" },
        notFoundResponse: { "in": "res", "name": "404", "required": true, "ref": "ApiResponse_null_" },
    };
    app.get('/taskers/:id', ...((0, runtime_1.fetchMiddlewares)(tasker_controller_1.TaskerController)), ...((0, runtime_1.fetchMiddlewares)(tasker_controller_1.TaskerController.prototype.getById)), async function TaskerController_getById(request, response, next) {
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args: argsTaskerController_getById, request, response });
            const controller = new tasker_controller_1.TaskerController();
            await templateService.apiHandler({
                methodName: 'getById',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsTaskerController_update = {
        id: { "in": "path", "name": "id", "required": true, "dataType": "double" },
        requestBody: { "in": "body", "name": "requestBody", "required": true, "ref": "UpdateTaskerDto" },
        successResponse: { "in": "res", "name": "200", "required": true, "ref": "ApiResponse_TaskerResponse_" },
        errorResponse: { "in": "res", "name": "400", "required": true, "ref": "ApiResponse_null_" },
    };
    app.put('/taskers/:id', ...((0, runtime_1.fetchMiddlewares)(tasker_controller_1.TaskerController)), ...((0, runtime_1.fetchMiddlewares)(tasker_controller_1.TaskerController.prototype.update)), async function TaskerController_update(request, response, next) {
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args: argsTaskerController_update, request, response });
            const controller = new tasker_controller_1.TaskerController();
            await templateService.apiHandler({
                methodName: 'update',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsTaskerController_delete = {
        id: { "in": "path", "name": "id", "required": true, "dataType": "double" },
        successResponse: { "in": "res", "name": "200", "required": true, "ref": "ApiResponse__message-string__" },
        errorResponse: { "in": "res", "name": "400", "required": true, "ref": "ApiResponse_null_" },
    };
    app.delete('/taskers/:id', ...((0, runtime_1.fetchMiddlewares)(tasker_controller_1.TaskerController)), ...((0, runtime_1.fetchMiddlewares)(tasker_controller_1.TaskerController.prototype.delete)), async function TaskerController_delete(request, response, next) {
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args: argsTaskerController_delete, request, response });
            const controller = new tasker_controller_1.TaskerController();
            await templateService.apiHandler({
                methodName: 'delete',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsServiceRequestController_create = {
        requestBody: { "in": "body", "name": "requestBody", "required": true, "ref": "CreateServiceRequestDto" },
        successResponse: { "in": "res", "name": "201", "required": true, "ref": "ApiResponse_ServiceRequestResponse_" },
        errorResponse: { "in": "res", "name": "400", "required": true, "ref": "ApiResponse_null_" },
    };
    app.post('/service-requests', ...((0, runtime_1.fetchMiddlewares)(serviceRequest_controller_1.ServiceRequestController)), ...((0, runtime_1.fetchMiddlewares)(serviceRequest_controller_1.ServiceRequestController.prototype.create)), async function ServiceRequestController_create(request, response, next) {
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args: argsServiceRequestController_create, request, response });
            const controller = new serviceRequest_controller_1.ServiceRequestController();
            await templateService.apiHandler({
                methodName: 'create',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsServiceRequestController_track = {
        trackingCode: { "in": "path", "name": "trackingCode", "required": true, "dataType": "string" },
        successResponse: { "in": "res", "name": "200", "required": true, "ref": "ApiResponse_ServiceRequestResponse_" },
        notFoundResponse: { "in": "res", "name": "404", "required": true, "ref": "ApiResponse_null_" },
    };
    app.get('/service-requests/track/:trackingCode', ...((0, runtime_1.fetchMiddlewares)(serviceRequest_controller_1.ServiceRequestController)), ...((0, runtime_1.fetchMiddlewares)(serviceRequest_controller_1.ServiceRequestController.prototype.track)), async function ServiceRequestController_track(request, response, next) {
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args: argsServiceRequestController_track, request, response });
            const controller = new serviceRequest_controller_1.ServiceRequestController();
            await templateService.apiHandler({
                methodName: 'track',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsServiceRequestController_getAll = {
        status: { "in": "query", "name": "status", "required": true, "dataType": "union", "subSchemas": [{ "dataType": "string" }, { "dataType": "undefined" }] },
        successResponse: { "in": "res", "name": "200", "required": true, "ref": "ApiResponse_ServiceRequestResponse-Array_" },
        errorResponse: { "in": "res", "name": "500", "required": true, "ref": "ApiResponse_null_" },
    };
    app.get('/service-requests', ...((0, runtime_1.fetchMiddlewares)(serviceRequest_controller_1.ServiceRequestController)), ...((0, runtime_1.fetchMiddlewares)(serviceRequest_controller_1.ServiceRequestController.prototype.getAll)), async function ServiceRequestController_getAll(request, response, next) {
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args: argsServiceRequestController_getAll, request, response });
            const controller = new serviceRequest_controller_1.ServiceRequestController();
            await templateService.apiHandler({
                methodName: 'getAll',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsServiceRequestController_getById = {
        id: { "in": "path", "name": "id", "required": true, "dataType": "double" },
        successResponse: { "in": "res", "name": "200", "required": true, "ref": "ApiResponse_ServiceRequestResponse_" },
        notFoundResponse: { "in": "res", "name": "404", "required": true, "ref": "ApiResponse_null_" },
    };
    app.get('/service-requests/:id', ...((0, runtime_1.fetchMiddlewares)(serviceRequest_controller_1.ServiceRequestController)), ...((0, runtime_1.fetchMiddlewares)(serviceRequest_controller_1.ServiceRequestController.prototype.getById)), async function ServiceRequestController_getById(request, response, next) {
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args: argsServiceRequestController_getById, request, response });
            const controller = new serviceRequest_controller_1.ServiceRequestController();
            await templateService.apiHandler({
                methodName: 'getById',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsServiceRequestController_updateStatus = {
        id: { "in": "path", "name": "id", "required": true, "dataType": "double" },
        requestBody: { "in": "body", "name": "requestBody", "required": true, "ref": "UpdateRequestStatusDto" },
        successResponse: { "in": "res", "name": "200", "required": true, "ref": "ApiResponse_ServiceRequestResponse_" },
        errorResponse: { "in": "res", "name": "400", "required": true, "ref": "ApiResponse_null_" },
    };
    app.patch('/service-requests/:id/status', ...((0, runtime_1.fetchMiddlewares)(serviceRequest_controller_1.ServiceRequestController)), ...((0, runtime_1.fetchMiddlewares)(serviceRequest_controller_1.ServiceRequestController.prototype.updateStatus)), async function ServiceRequestController_updateStatus(request, response, next) {
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args: argsServiceRequestController_updateStatus, request, response });
            const controller = new serviceRequest_controller_1.ServiceRequestController();
            await templateService.apiHandler({
                methodName: 'updateStatus',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsServiceRequestController_delete = {
        id: { "in": "path", "name": "id", "required": true, "dataType": "double" },
        successResponse: { "in": "res", "name": "200", "required": true, "ref": "ApiResponse__message-string__" },
        errorResponse: { "in": "res", "name": "400", "required": true, "ref": "ApiResponse_null_" },
    };
    app.delete('/service-requests/:id', ...((0, runtime_1.fetchMiddlewares)(serviceRequest_controller_1.ServiceRequestController)), ...((0, runtime_1.fetchMiddlewares)(serviceRequest_controller_1.ServiceRequestController.prototype.delete)), async function ServiceRequestController_delete(request, response, next) {
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args: argsServiceRequestController_delete, request, response });
            const controller = new serviceRequest_controller_1.ServiceRequestController();
            await templateService.apiHandler({
                methodName: 'delete',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsProductController_create = {
        requestBody: { "in": "body", "name": "requestBody", "required": true, "ref": "CreateProductDto" },
        successResponse: { "in": "res", "name": "201", "required": true, "ref": "ApiResponse_ProductResponse_" },
        errorResponse: { "in": "res", "name": "400", "required": true, "ref": "ApiResponse_null_" },
    };
    app.post('/products', ...((0, runtime_1.fetchMiddlewares)(product_controller_1.ProductController)), ...((0, runtime_1.fetchMiddlewares)(product_controller_1.ProductController.prototype.create)), async function ProductController_create(request, response, next) {
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args: argsProductController_create, request, response });
            const controller = new product_controller_1.ProductController();
            await templateService.apiHandler({
                methodName: 'create',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsProductController_getAll = {
        successResponse: { "in": "res", "name": "200", "required": true, "ref": "ApiResponse_ProductResponse-Array_" },
        errorResponse: { "in": "res", "name": "500", "required": true, "ref": "ApiResponse_null_" },
        category: { "in": "query", "name": "category", "dataType": "string" },
    };
    app.get('/products', ...((0, runtime_1.fetchMiddlewares)(product_controller_1.ProductController)), ...((0, runtime_1.fetchMiddlewares)(product_controller_1.ProductController.prototype.getAll)), async function ProductController_getAll(request, response, next) {
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args: argsProductController_getAll, request, response });
            const controller = new product_controller_1.ProductController();
            await templateService.apiHandler({
                methodName: 'getAll',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsProductController_getById = {
        id: { "in": "path", "name": "id", "required": true, "dataType": "double" },
        successResponse: { "in": "res", "name": "200", "required": true, "ref": "ApiResponse_ProductResponse_" },
        notFoundResponse: { "in": "res", "name": "404", "required": true, "ref": "ApiResponse_null_" },
    };
    app.get('/products/:id', ...((0, runtime_1.fetchMiddlewares)(product_controller_1.ProductController)), ...((0, runtime_1.fetchMiddlewares)(product_controller_1.ProductController.prototype.getById)), async function ProductController_getById(request, response, next) {
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args: argsProductController_getById, request, response });
            const controller = new product_controller_1.ProductController();
            await templateService.apiHandler({
                methodName: 'getById',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsProductController_update = {
        id: { "in": "path", "name": "id", "required": true, "dataType": "double" },
        requestBody: { "in": "body", "name": "requestBody", "required": true, "ref": "UpdateProductDto" },
        successResponse: { "in": "res", "name": "200", "required": true, "ref": "ApiResponse_ProductResponse_" },
        errorResponse: { "in": "res", "name": "400", "required": true, "ref": "ApiResponse_null_" },
    };
    app.put('/products/:id', ...((0, runtime_1.fetchMiddlewares)(product_controller_1.ProductController)), ...((0, runtime_1.fetchMiddlewares)(product_controller_1.ProductController.prototype.update)), async function ProductController_update(request, response, next) {
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args: argsProductController_update, request, response });
            const controller = new product_controller_1.ProductController();
            await templateService.apiHandler({
                methodName: 'update',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsProductController_delete = {
        id: { "in": "path", "name": "id", "required": true, "dataType": "double" },
        successResponse: { "in": "res", "name": "200", "required": true, "ref": "ApiResponse__message-string__" },
        errorResponse: { "in": "res", "name": "400", "required": true, "ref": "ApiResponse_null_" },
    };
    app.delete('/products/:id', ...((0, runtime_1.fetchMiddlewares)(product_controller_1.ProductController)), ...((0, runtime_1.fetchMiddlewares)(product_controller_1.ProductController.prototype.delete)), async function ProductController_delete(request, response, next) {
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args: argsProductController_delete, request, response });
            const controller = new product_controller_1.ProductController();
            await templateService.apiHandler({
                methodName: 'delete',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsOrderController_create = {
        requestBody: { "in": "body", "name": "requestBody", "required": true, "ref": "CreateOrderDto" },
        successResponse: { "in": "res", "name": "201", "required": true, "ref": "ApiResponse_OrderResponse_" },
        errorResponse: { "in": "res", "name": "400", "required": true, "ref": "ApiResponse_null_" },
    };
    app.post('/orders', ...((0, runtime_1.fetchMiddlewares)(order_controller_1.OrderController)), ...((0, runtime_1.fetchMiddlewares)(order_controller_1.OrderController.prototype.create)), async function OrderController_create(request, response, next) {
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args: argsOrderController_create, request, response });
            const controller = new order_controller_1.OrderController();
            await templateService.apiHandler({
                methodName: 'create',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsOrderController_track = {
        trackingCode: { "in": "path", "name": "trackingCode", "required": true, "dataType": "string" },
        successResponse: { "in": "res", "name": "200", "required": true, "ref": "ApiResponse_OrderResponse_" },
        notFoundResponse: { "in": "res", "name": "404", "required": true, "ref": "ApiResponse_null_" },
    };
    app.get('/orders/track/:trackingCode', ...((0, runtime_1.fetchMiddlewares)(order_controller_1.OrderController)), ...((0, runtime_1.fetchMiddlewares)(order_controller_1.OrderController.prototype.track)), async function OrderController_track(request, response, next) {
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args: argsOrderController_track, request, response });
            const controller = new order_controller_1.OrderController();
            await templateService.apiHandler({
                methodName: 'track',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsOrderController_getAll = {
        successResponse: { "in": "res", "name": "200", "required": true, "ref": "ApiResponse_OrderResponse-Array_" },
        errorResponse: { "in": "res", "name": "500", "required": true, "ref": "ApiResponse_null_" },
        status: { "in": "query", "name": "status", "dataType": "string" },
    };
    app.get('/orders', ...((0, runtime_1.fetchMiddlewares)(order_controller_1.OrderController)), ...((0, runtime_1.fetchMiddlewares)(order_controller_1.OrderController.prototype.getAll)), async function OrderController_getAll(request, response, next) {
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args: argsOrderController_getAll, request, response });
            const controller = new order_controller_1.OrderController();
            await templateService.apiHandler({
                methodName: 'getAll',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsOrderController_getById = {
        id: { "in": "path", "name": "id", "required": true, "dataType": "double" },
        successResponse: { "in": "res", "name": "200", "required": true, "ref": "ApiResponse_OrderResponse_" },
        notFoundResponse: { "in": "res", "name": "404", "required": true, "ref": "ApiResponse_null_" },
    };
    app.get('/orders/:id', ...((0, runtime_1.fetchMiddlewares)(order_controller_1.OrderController)), ...((0, runtime_1.fetchMiddlewares)(order_controller_1.OrderController.prototype.getById)), async function OrderController_getById(request, response, next) {
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args: argsOrderController_getById, request, response });
            const controller = new order_controller_1.OrderController();
            await templateService.apiHandler({
                methodName: 'getById',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsOrderController_updateStatus = {
        id: { "in": "path", "name": "id", "required": true, "dataType": "double" },
        requestBody: { "in": "body", "name": "requestBody", "required": true, "ref": "UpdateOrderStatusDto" },
        successResponse: { "in": "res", "name": "200", "required": true, "ref": "ApiResponse_OrderResponse_" },
        errorResponse: { "in": "res", "name": "400", "required": true, "ref": "ApiResponse_null_" },
    };
    app.patch('/orders/:id/status', ...((0, runtime_1.fetchMiddlewares)(order_controller_1.OrderController)), ...((0, runtime_1.fetchMiddlewares)(order_controller_1.OrderController.prototype.updateStatus)), async function OrderController_updateStatus(request, response, next) {
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args: argsOrderController_updateStatus, request, response });
            const controller = new order_controller_1.OrderController();
            await templateService.apiHandler({
                methodName: 'updateStatus',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsOrderController_delete = {
        id: { "in": "path", "name": "id", "required": true, "dataType": "double" },
        successResponse: { "in": "res", "name": "200", "required": true, "ref": "ApiResponse__message-string__" },
        errorResponse: { "in": "res", "name": "400", "required": true, "ref": "ApiResponse_null_" },
    };
    app.delete('/orders/:id', ...((0, runtime_1.fetchMiddlewares)(order_controller_1.OrderController)), ...((0, runtime_1.fetchMiddlewares)(order_controller_1.OrderController.prototype.delete)), async function OrderController_delete(request, response, next) {
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args: argsOrderController_delete, request, response });
            const controller = new order_controller_1.OrderController();
            await templateService.apiHandler({
                methodName: 'delete',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsInfoPostController_create = {
        requestBody: { "in": "body", "name": "requestBody", "required": true, "ref": "CreateInfoPostDto" },
        successResponse: { "in": "res", "name": "201", "required": true, "ref": "ApiResponse_InfoPostResponse_" },
        errorResponse: { "in": "res", "name": "400", "required": true, "ref": "ApiResponse_null_" },
    };
    app.post('/info-posts', ...((0, runtime_1.fetchMiddlewares)(infoPost_controller_1.InfoPostController)), ...((0, runtime_1.fetchMiddlewares)(infoPost_controller_1.InfoPostController.prototype.create)), async function InfoPostController_create(request, response, next) {
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args: argsInfoPostController_create, request, response });
            const controller = new infoPost_controller_1.InfoPostController();
            await templateService.apiHandler({
                methodName: 'create',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsInfoPostController_getAll = {
        successResponse: { "in": "res", "name": "200", "required": true, "ref": "ApiResponse_InfoPostResponse-Array_" },
        errorResponse: { "in": "res", "name": "500", "required": true, "ref": "ApiResponse_null_" },
        category: { "in": "query", "name": "category", "dataType": "string" },
    };
    app.get('/info-posts', ...((0, runtime_1.fetchMiddlewares)(infoPost_controller_1.InfoPostController)), ...((0, runtime_1.fetchMiddlewares)(infoPost_controller_1.InfoPostController.prototype.getAll)), async function InfoPostController_getAll(request, response, next) {
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args: argsInfoPostController_getAll, request, response });
            const controller = new infoPost_controller_1.InfoPostController();
            await templateService.apiHandler({
                methodName: 'getAll',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsInfoPostController_getById = {
        id: { "in": "path", "name": "id", "required": true, "dataType": "double" },
        successResponse: { "in": "res", "name": "200", "required": true, "ref": "ApiResponse_InfoPostResponse_" },
        notFoundResponse: { "in": "res", "name": "404", "required": true, "ref": "ApiResponse_null_" },
    };
    app.get('/info-posts/:id', ...((0, runtime_1.fetchMiddlewares)(infoPost_controller_1.InfoPostController)), ...((0, runtime_1.fetchMiddlewares)(infoPost_controller_1.InfoPostController.prototype.getById)), async function InfoPostController_getById(request, response, next) {
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args: argsInfoPostController_getById, request, response });
            const controller = new infoPost_controller_1.InfoPostController();
            await templateService.apiHandler({
                methodName: 'getById',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsInfoPostController_update = {
        id: { "in": "path", "name": "id", "required": true, "dataType": "double" },
        requestBody: { "in": "body", "name": "requestBody", "required": true, "ref": "UpdateInfoPostDto" },
        successResponse: { "in": "res", "name": "200", "required": true, "ref": "ApiResponse_InfoPostResponse_" },
        errorResponse: { "in": "res", "name": "400", "required": true, "ref": "ApiResponse_null_" },
    };
    app.put('/info-posts/:id', ...((0, runtime_1.fetchMiddlewares)(infoPost_controller_1.InfoPostController)), ...((0, runtime_1.fetchMiddlewares)(infoPost_controller_1.InfoPostController.prototype.update)), async function InfoPostController_update(request, response, next) {
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args: argsInfoPostController_update, request, response });
            const controller = new infoPost_controller_1.InfoPostController();
            await templateService.apiHandler({
                methodName: 'update',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsInfoPostController_delete = {
        id: { "in": "path", "name": "id", "required": true, "dataType": "double" },
        successResponse: { "in": "res", "name": "200", "required": true, "ref": "ApiResponse__message-string__" },
        errorResponse: { "in": "res", "name": "400", "required": true, "ref": "ApiResponse_null_" },
    };
    app.delete('/info-posts/:id', ...((0, runtime_1.fetchMiddlewares)(infoPost_controller_1.InfoPostController)), ...((0, runtime_1.fetchMiddlewares)(infoPost_controller_1.InfoPostController.prototype.delete)), async function InfoPostController_delete(request, response, next) {
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args: argsInfoPostController_delete, request, response });
            const controller = new infoPost_controller_1.InfoPostController();
            await templateService.apiHandler({
                methodName: 'delete',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsAuthController_register = {
        requestBody: { "in": "body", "name": "requestBody", "required": true, "ref": "RegisterAdminDto" },
        successResponse: { "in": "res", "name": "201", "required": true, "ref": "ApiResponse_AdminResponse_" },
        errorResponse: { "in": "res", "name": "400", "required": true, "ref": "ApiResponse_null_" },
    };
    app.post('/auth/register', authenticateMiddleware([{ "bearerAuth": ["SUPER_ADMIN"] }]), ...((0, runtime_1.fetchMiddlewares)(auth_controller_1.AuthController)), ...((0, runtime_1.fetchMiddlewares)(auth_controller_1.AuthController.prototype.register)), async function AuthController_register(request, response, next) {
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args: argsAuthController_register, request, response });
            const controller = new auth_controller_1.AuthController();
            await templateService.apiHandler({
                methodName: 'register',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsAuthController_login = {
        requestBody: { "in": "body", "name": "requestBody", "required": true, "ref": "LoginDto" },
        successResponse: { "in": "res", "name": "200", "required": true, "ref": "ApiResponse_LoginResponse_" },
        errorResponse: { "in": "res", "name": "401", "required": true, "ref": "ApiResponse_null_" },
    };
    app.post('/auth/login', ...((0, runtime_1.fetchMiddlewares)(auth_controller_1.AuthController)), ...((0, runtime_1.fetchMiddlewares)(auth_controller_1.AuthController.prototype.login)), async function AuthController_login(request, response, next) {
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args: argsAuthController_login, request, response });
            const controller = new auth_controller_1.AuthController();
            await templateService.apiHandler({
                methodName: 'login',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsAuthController_getProfile = {
        request: { "in": "request", "name": "request", "required": true, "dataType": "object" },
        successResponse: { "in": "res", "name": "200", "required": true, "ref": "ApiResponse_AdminResponse_" },
        errorResponse: { "in": "res", "name": "404", "required": true, "ref": "ApiResponse_null_" },
    };
    app.get('/auth/profile', authenticateMiddleware([{ "bearerAuth": [] }]), ...((0, runtime_1.fetchMiddlewares)(auth_controller_1.AuthController)), ...((0, runtime_1.fetchMiddlewares)(auth_controller_1.AuthController.prototype.getProfile)), async function AuthController_getProfile(request, response, next) {
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args: argsAuthController_getProfile, request, response });
            const controller = new auth_controller_1.AuthController();
            await templateService.apiHandler({
                methodName: 'getProfile',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsAuthController_getAllAdmins = {
        successResponse: { "in": "res", "name": "200", "required": true, "ref": "ApiResponse_AdminResponse-Array_" },
        errorResponse: { "in": "res", "name": "500", "required": true, "ref": "ApiResponse_null_" },
    };
    app.get('/auth/admins', authenticateMiddleware([{ "bearerAuth": ["SUPER_ADMIN"] }]), ...((0, runtime_1.fetchMiddlewares)(auth_controller_1.AuthController)), ...((0, runtime_1.fetchMiddlewares)(auth_controller_1.AuthController.prototype.getAllAdmins)), async function AuthController_getAllAdmins(request, response, next) {
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args: argsAuthController_getAllAdmins, request, response });
            const controller = new auth_controller_1.AuthController();
            await templateService.apiHandler({
                methodName: 'getAllAdmins',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsAuthController_deactivateAdmin = {
        id: { "in": "path", "name": "id", "required": true, "dataType": "double" },
        successResponse: { "in": "res", "name": "200", "required": true, "ref": "ApiResponse_AdminResponse_" },
        errorResponse: { "in": "res", "name": "400", "required": true, "ref": "ApiResponse_null_" },
    };
    app.patch('/auth/admins/:id/deactivate', authenticateMiddleware([{ "bearerAuth": ["SUPER_ADMIN"] }]), ...((0, runtime_1.fetchMiddlewares)(auth_controller_1.AuthController)), ...((0, runtime_1.fetchMiddlewares)(auth_controller_1.AuthController.prototype.deactivateAdmin)), async function AuthController_deactivateAdmin(request, response, next) {
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args: argsAuthController_deactivateAdmin, request, response });
            const controller = new auth_controller_1.AuthController();
            await templateService.apiHandler({
                methodName: 'deactivateAdmin',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    function authenticateMiddleware(security = []) {
        return async function runAuthenticationMiddleware(request, response, next) {
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
            // keep track of failed auth attempts so we can hand back the most
            // recent one.  This behavior was previously existing so preserving it
            // here
            const failedAttempts = [];
            const pushAndRethrow = (error) => {
                failedAttempts.push(error);
                throw error;
            };
            const secMethodOrPromises = [];
            for (const secMethod of security) {
                if (Object.keys(secMethod).length > 1) {
                    const secMethodAndPromises = [];
                    for (const name in secMethod) {
                        secMethodAndPromises.push(expressAuthenticationRecasted(request, name, secMethod[name], response)
                            .catch(pushAndRethrow));
                    }
                    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
                    secMethodOrPromises.push(Promise.all(secMethodAndPromises)
                        .then(users => { return users[0]; }));
                }
                else {
                    for (const name in secMethod) {
                        secMethodOrPromises.push(expressAuthenticationRecasted(request, name, secMethod[name], response)
                            .catch(pushAndRethrow));
                    }
                }
            }
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
            try {
                request['user'] = await Promise.any(secMethodOrPromises);
                // Response was sent in middleware, abort
                if (response.writableEnded) {
                    return;
                }
                next();
            }
            catch (err) {
                // Show most recent error as response
                const error = failedAttempts.pop();
                error.status = error.status || 401;
                // Response was sent in middleware, abort
                if (response.writableEnded) {
                    return;
                }
                next(error);
            }
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        };
    }
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
}
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
