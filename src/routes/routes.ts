/* tslint:disable */
/* eslint-disable */
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import type { TsoaRoute } from '@tsoa/runtime';
import {  fetchMiddlewares, ExpressTemplateService } from '@tsoa/runtime';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { TrainingApplicationController } from './../controllers/trainingApplication.controller';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { TaskerController } from './../controllers/tasker.controller';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { ServiceRequestController } from './../controllers/serviceRequest.controller';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { ProductController } from './../controllers/product.controller';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { OrderController } from './../controllers/order.controller';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { InfoPostController } from './../controllers/infoPost.controller';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { AuthController } from './../controllers/auth.controller';
import { expressAuthentication } from './../middlewares/auth.middleware';
// @ts-ignore - no great way to install types from subpackage
import type { Request as ExRequest, Response as ExResponse, RequestHandler, Router } from 'express';

const expressAuthenticationRecasted = expressAuthentication as (req: ExRequest, securityName: string, scopes?: string[], res?: ExResponse) => Promise<any>;


// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

const models: TsoaRoute.Models = {
    "CreateTrainingApplicationDto": {
        "dataType": "refObject",
        "properties": {
            "fullName": {"dataType":"string","required":true},
            "phone": {"dataType":"string","required":true},
            "email": {"dataType":"string"},
            "selectedCourse": {"dataType":"union","subSchemas":[{"dataType":"enum","enums":["COMPUTER_FOUNDATIONS"]},{"dataType":"enum","enums":["MICROSOFT_OFFICE"]},{"dataType":"enum","enums":["GOOGLE_TOOLS"]},{"dataType":"enum","enums":["E_GOVERNMENT_TOOLS"]},{"dataType":"enum","enums":["DIGITAL_CONTENT_CREATION"]},{"dataType":"enum","enums":["GRAPHIC_DESIGN"]},{"dataType":"enum","enums":["AI_AND_DIGITAL_TOOLS"]},{"dataType":"enum","enums":["BASIC_PROGRAMMING"]}],"required":true},
            "preferredSchedule": {"dataType":"string"},
            "experienceLevel": {"dataType":"union","subSchemas":[{"dataType":"enum","enums":["BEGINNER"]},{"dataType":"enum","enums":["INTERMEDIATE"]}]},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "TrainingApplicationResponse": {
        "dataType": "refObject",
        "properties": {
            "id": {"dataType":"double","required":true},
            "fullName": {"dataType":"string","required":true},
            "phone": {"dataType":"string","required":true},
            "email": {"dataType":"union","subSchemas":[{"dataType":"string"},{"dataType":"enum","enums":[null]}]},
            "selectedCourse": {"dataType":"union","subSchemas":[{"dataType":"enum","enums":["COMPUTER_FOUNDATIONS"]},{"dataType":"enum","enums":["MICROSOFT_OFFICE"]},{"dataType":"enum","enums":["GOOGLE_TOOLS"]},{"dataType":"enum","enums":["E_GOVERNMENT_TOOLS"]},{"dataType":"enum","enums":["DIGITAL_CONTENT_CREATION"]},{"dataType":"enum","enums":["GRAPHIC_DESIGN"]},{"dataType":"enum","enums":["AI_AND_DIGITAL_TOOLS"]},{"dataType":"enum","enums":["BASIC_PROGRAMMING"]}],"required":true},
            "preferredSchedule": {"dataType":"union","subSchemas":[{"dataType":"string"},{"dataType":"enum","enums":[null]}]},
            "experienceLevel": {"dataType":"union","subSchemas":[{"dataType":"enum","enums":["BEGINNER"]},{"dataType":"enum","enums":["INTERMEDIATE"]},{"dataType":"enum","enums":[null]}]},
            "status": {"dataType":"union","subSchemas":[{"dataType":"enum","enums":["PENDING"]},{"dataType":"enum","enums":["ACCEPTED"]},{"dataType":"enum","enums":["REJECTED"]}],"required":true},
            "createdAt": {"dataType":"datetime","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ApiResponse_TrainingApplicationResponse_": {
        "dataType": "refObject",
        "properties": {
            "success": {"dataType":"boolean","required":true},
            "message": {"dataType":"string","required":true},
            "data": {"ref":"TrainingApplicationResponse"},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ApiResponse_null_": {
        "dataType": "refObject",
        "properties": {
            "success": {"dataType":"boolean","required":true},
            "message": {"dataType":"string","required":true},
            "data": {"dataType":"enum","enums":[null]},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ApiResponse_TrainingApplicationResponse-Array_": {
        "dataType": "refObject",
        "properties": {
            "success": {"dataType":"boolean","required":true},
            "message": {"dataType":"string","required":true},
            "data": {"dataType":"array","array":{"dataType":"refObject","ref":"TrainingApplicationResponse"}},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "UpdateTrainingApplicationDto": {
        "dataType": "refObject",
        "properties": {
            "status": {"dataType":"union","subSchemas":[{"dataType":"enum","enums":["PENDING"]},{"dataType":"enum","enums":["ACCEPTED"]},{"dataType":"enum","enums":["REJECTED"]}]},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ApiResponse__message-string__": {
        "dataType": "refObject",
        "properties": {
            "success": {"dataType":"boolean","required":true},
            "message": {"dataType":"string","required":true},
            "data": {"dataType":"nestedObjectLiteral","nestedProperties":{"message":{"dataType":"string","required":true}}},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "CreateTaskerDto": {
        "dataType": "refObject",
        "properties": {
            "name": {"dataType":"string","required":true},
            "phone": {"dataType":"string","required":true},
            "specialties": {"dataType":"string","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "TaskerResponse": {
        "dataType": "refObject",
        "properties": {
            "id": {"dataType":"double","required":true},
            "name": {"dataType":"string","required":true},
            "phone": {"dataType":"string","required":true},
            "email": {"dataType":"union","subSchemas":[{"dataType":"string"},{"dataType":"enum","enums":[null]}]},
            "specialties": {"dataType":"string","required":true},
            "isActive": {"dataType":"boolean","required":true},
            "createdAt": {"dataType":"datetime","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ApiResponse_TaskerResponse_": {
        "dataType": "refObject",
        "properties": {
            "success": {"dataType":"boolean","required":true},
            "message": {"dataType":"string","required":true},
            "data": {"ref":"TaskerResponse"},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ApiResponse_TaskerResponse-Array_": {
        "dataType": "refObject",
        "properties": {
            "success": {"dataType":"boolean","required":true},
            "message": {"dataType":"string","required":true},
            "data": {"dataType":"array","array":{"dataType":"refObject","ref":"TaskerResponse"}},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "UpdateTaskerDto": {
        "dataType": "refObject",
        "properties": {
            "name": {"dataType":"string"},
            "phone": {"dataType":"string"},
            "specialties": {"dataType":"string"},
            "isActive": {"dataType":"boolean"},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "CreateServiceRequestDto": {
        "dataType": "refObject",
        "properties": {
            "customerName": {"dataType":"string","required":true},
            "customerPhone": {"dataType":"string","required":true},
            "customerEmail": {"dataType":"string"},
            "serviceCategory": {"dataType":"union","subSchemas":[{"dataType":"enum","enums":["E_GOVERNMENT"]},{"dataType":"enum","enums":["APPLICATIONS_DOCS"]},{"dataType":"enum","enums":["CREATIVE_MEDIA"]},{"dataType":"enum","enums":["WEB_DIGITAL"]},{"dataType":"enum","enums":["LEGAL_OFFICIAL"]}],"required":true},
            "service": {"dataType":"string"},
            "description": {"dataType":"string","required":true},
            "documentUrl": {"dataType":"string"},
            "preferredDate": {"dataType":"string"},
            "location": {"dataType":"string"},
            "taskerId": {"dataType":"double"},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ServiceRequestResponse": {
        "dataType": "refObject",
        "properties": {
            "id": {"dataType":"double","required":true},
            "trackingCode": {"dataType":"string","required":true},
            "customerName": {"dataType":"string","required":true},
            "customerPhone": {"dataType":"string","required":true},
            "serviceCategory": {"dataType":"string","required":true},
            "service": {"dataType":"union","subSchemas":[{"dataType":"string"},{"dataType":"enum","enums":[null]}],"required":true},
            "description": {"dataType":"string","required":true},
            "documentUrl": {"dataType":"union","subSchemas":[{"dataType":"string"},{"dataType":"enum","enums":[null]}]},
            "preferredDate": {"dataType":"union","subSchemas":[{"dataType":"string"},{"dataType":"enum","enums":[null]}]},
            "location": {"dataType":"union","subSchemas":[{"dataType":"string"},{"dataType":"enum","enums":[null]}],"required":true},
            "status": {"dataType":"string","required":true},
            "createdAt": {"dataType":"datetime","required":true},
            "updatedAt": {"dataType":"datetime","required":true},
            "tasker": {"dataType":"union","subSchemas":[{"dataType":"nestedObjectLiteral","nestedProperties":{"email":{"dataType":"union","subSchemas":[{"dataType":"string"},{"dataType":"enum","enums":[null]}]},"phone":{"dataType":"string","required":true},"name":{"dataType":"string","required":true}}},{"dataType":"enum","enums":[null]}]},
            "statusHistory": {"dataType":"array","array":{"dataType":"nestedObjectLiteral","nestedProperties":{"createdAt":{"dataType":"datetime","required":true},"note":{"dataType":"union","subSchemas":[{"dataType":"string"},{"dataType":"enum","enums":[null]}],"required":true},"status":{"dataType":"string","required":true}}}},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ApiResponse_ServiceRequestResponse_": {
        "dataType": "refObject",
        "properties": {
            "success": {"dataType":"boolean","required":true},
            "message": {"dataType":"string","required":true},
            "data": {"ref":"ServiceRequestResponse"},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ApiResponse_ServiceRequestResponse-Array_": {
        "dataType": "refObject",
        "properties": {
            "success": {"dataType":"boolean","required":true},
            "message": {"dataType":"string","required":true},
            "data": {"dataType":"array","array":{"dataType":"refObject","ref":"ServiceRequestResponse"}},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "UpdateRequestStatusDto": {
        "dataType": "refObject",
        "properties": {
            "status": {"dataType":"union","subSchemas":[{"dataType":"enum","enums":["PENDING"]},{"dataType":"enum","enums":["ASSIGNED"]},{"dataType":"enum","enums":["IN_PROGRESS"]},{"dataType":"enum","enums":["COMPLETED"]},{"dataType":"enum","enums":["CANCELLED"]}],"required":true},
            "taskerId": {"dataType":"double"},
            "note": {"dataType":"string","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "CreateProductDto": {
        "dataType": "refObject",
        "properties": {
            "name": {"dataType":"string","required":true},
            "description": {"dataType":"string"},
            "price": {"dataType":"string"},
            "category": {"dataType":"string","required":true},
            "imageUrl": {"dataType":"string"},
            "inStock": {"dataType":"boolean"},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ProductResponse": {
        "dataType": "refObject",
        "properties": {
            "id": {"dataType":"double","required":true},
            "name": {"dataType":"string","required":true},
            "description": {"dataType":"union","subSchemas":[{"dataType":"string"},{"dataType":"enum","enums":[null]}]},
            "price": {"dataType":"union","subSchemas":[{"dataType":"string"},{"dataType":"enum","enums":[null]}]},
            "category": {"dataType":"string","required":true},
            "imageUrl": {"dataType":"union","subSchemas":[{"dataType":"string"},{"dataType":"enum","enums":[null]}]},
            "inStock": {"dataType":"boolean","required":true},
            "createdAt": {"dataType":"datetime","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ApiResponse_ProductResponse_": {
        "dataType": "refObject",
        "properties": {
            "success": {"dataType":"boolean","required":true},
            "message": {"dataType":"string","required":true},
            "data": {"ref":"ProductResponse"},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ApiResponse_ProductResponse-Array_": {
        "dataType": "refObject",
        "properties": {
            "success": {"dataType":"boolean","required":true},
            "message": {"dataType":"string","required":true},
            "data": {"dataType":"array","array":{"dataType":"refObject","ref":"ProductResponse"}},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "UpdateProductDto": {
        "dataType": "refObject",
        "properties": {
            "name": {"dataType":"string"},
            "description": {"dataType":"string"},
            "price": {"dataType":"string"},
            "category": {"dataType":"string"},
            "imageUrl": {"dataType":"string"},
            "inStock": {"dataType":"boolean"},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "CreateOrderDto": {
        "dataType": "refObject",
        "properties": {
            "customerName": {"dataType":"string","required":true},
            "customerPhone": {"dataType":"string","required":true},
            "customerEmail": {"dataType":"string"},
            "address": {"dataType":"string","required":true},
            "quantity": {"dataType":"double","required":true},
            "note": {"dataType":"string"},
            "productId": {"dataType":"double","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "OrderResponse": {
        "dataType": "refObject",
        "properties": {
            "id": {"dataType":"double","required":true},
            "trackingCode": {"dataType":"string","required":true},
            "customerName": {"dataType":"string","required":true},
            "customerPhone": {"dataType":"string","required":true},
            "address": {"dataType":"string","required":true},
            "quantity": {"dataType":"double","required":true},
            "note": {"dataType":"union","subSchemas":[{"dataType":"string"},{"dataType":"enum","enums":[null]}]},
            "status": {"dataType":"union","subSchemas":[{"dataType":"enum","enums":["PENDING"]},{"dataType":"enum","enums":["CONFIRMED"]},{"dataType":"enum","enums":["OUT_FOR_DELIVERY"]},{"dataType":"enum","enums":["DELIVERED"]},{"dataType":"enum","enums":["CANCELLED"]}],"required":true},
            "paymentMethod": {"dataType":"union","subSchemas":[{"dataType":"string"},{"dataType":"enum","enums":[null]}]},
            "createdAt": {"dataType":"datetime","required":true},
            "updatedAt": {"dataType":"datetime","required":true},
            "product": {"dataType":"nestedObjectLiteral","nestedProperties":{"createdAt":{"dataType":"datetime","required":true},"inStock":{"dataType":"boolean","required":true},"imageUrl":{"dataType":"union","subSchemas":[{"dataType":"string"},{"dataType":"enum","enums":[null]}]},"category":{"dataType":"string","required":true},"price":{"dataType":"union","subSchemas":[{"dataType":"string"},{"dataType":"enum","enums":[null]}]},"description":{"dataType":"union","subSchemas":[{"dataType":"string"},{"dataType":"enum","enums":[null]}]},"name":{"dataType":"string","required":true},"id":{"dataType":"double","required":true}},"required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ApiResponse_OrderResponse_": {
        "dataType": "refObject",
        "properties": {
            "success": {"dataType":"boolean","required":true},
            "message": {"dataType":"string","required":true},
            "data": {"ref":"OrderResponse"},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ApiResponse_OrderResponse-Array_": {
        "dataType": "refObject",
        "properties": {
            "success": {"dataType":"boolean","required":true},
            "message": {"dataType":"string","required":true},
            "data": {"dataType":"array","array":{"dataType":"refObject","ref":"OrderResponse"}},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "UpdateOrderStatusDto": {
        "dataType": "refObject",
        "properties": {
            "status": {"dataType":"union","subSchemas":[{"dataType":"enum","enums":["PENDING"]},{"dataType":"enum","enums":["CONFIRMED"]},{"dataType":"enum","enums":["OUT_FOR_DELIVERY"]},{"dataType":"enum","enums":["DELIVERED"]},{"dataType":"enum","enums":["CANCELLED"]}],"required":true},
            "paymentMethod": {"dataType":"union","subSchemas":[{"dataType":"enum","enums":["VISA"]},{"dataType":"enum","enums":["TELEPHONE"]},{"dataType":"enum","enums":["CASH"]}]},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "CreateInfoPostDto": {
        "dataType": "refObject",
        "properties": {
            "title": {"dataType":"string","required":true},
            "description": {"dataType":"string","required":true},
            "category": {"dataType":"union","subSchemas":[{"dataType":"enum","enums":["JOB"]},{"dataType":"enum","enums":["SCHOLARSHIP"]},{"dataType":"enum","enums":["COMPETITION"]},{"dataType":"enum","enums":["COMMUNITY"]},{"dataType":"enum","enums":["ADVISORY"]}],"required":true},
            "deadline": {"dataType":"string"},
            "location": {"dataType":"string"},
            "applyLink": {"dataType":"string"},
            "contactInfo": {"dataType":"string"},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "InfoPostResponse": {
        "dataType": "refObject",
        "properties": {
            "id": {"dataType":"double","required":true},
            "title": {"dataType":"string","required":true},
            "description": {"dataType":"string","required":true},
            "category": {"dataType":"union","subSchemas":[{"dataType":"enum","enums":["JOB"]},{"dataType":"enum","enums":["SCHOLARSHIP"]},{"dataType":"enum","enums":["COMPETITION"]},{"dataType":"enum","enums":["COMMUNITY"]},{"dataType":"enum","enums":["ADVISORY"]}],"required":true},
            "deadline": {"dataType":"union","subSchemas":[{"dataType":"string"},{"dataType":"enum","enums":[null]}]},
            "location": {"dataType":"union","subSchemas":[{"dataType":"string"},{"dataType":"enum","enums":[null]}]},
            "applyLink": {"dataType":"union","subSchemas":[{"dataType":"string"},{"dataType":"enum","enums":[null]}]},
            "contactInfo": {"dataType":"union","subSchemas":[{"dataType":"string"},{"dataType":"enum","enums":[null]}]},
            "isActive": {"dataType":"boolean","required":true},
            "createdAt": {"dataType":"datetime","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ApiResponse_InfoPostResponse_": {
        "dataType": "refObject",
        "properties": {
            "success": {"dataType":"boolean","required":true},
            "message": {"dataType":"string","required":true},
            "data": {"ref":"InfoPostResponse"},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ApiResponse_InfoPostResponse-Array_": {
        "dataType": "refObject",
        "properties": {
            "success": {"dataType":"boolean","required":true},
            "message": {"dataType":"string","required":true},
            "data": {"dataType":"array","array":{"dataType":"refObject","ref":"InfoPostResponse"}},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "UpdateInfoPostDto": {
        "dataType": "refObject",
        "properties": {
            "title": {"dataType":"string"},
            "description": {"dataType":"string"},
            "category": {"dataType":"union","subSchemas":[{"dataType":"enum","enums":["JOB"]},{"dataType":"enum","enums":["SCHOLARSHIP"]},{"dataType":"enum","enums":["COMPETITION"]},{"dataType":"enum","enums":["COMMUNITY"]},{"dataType":"enum","enums":["ADVISORY"]}]},
            "deadline": {"dataType":"string"},
            "location": {"dataType":"string"},
            "applyLink": {"dataType":"string"},
            "contactInfo": {"dataType":"string"},
            "isActive": {"dataType":"boolean"},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "RegisterAdminDto": {
        "dataType": "refObject",
        "properties": {
            "fullName": {"dataType":"string","required":true},
            "email": {"dataType":"string","required":true},
            "password": {"dataType":"string","required":true},
            "role": {"dataType":"union","subSchemas":[{"dataType":"enum","enums":["SUPER_ADMIN"]},{"dataType":"enum","enums":["ADMIN"]}]},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AdminResponse": {
        "dataType": "refObject",
        "properties": {
            "id": {"dataType":"double","required":true},
            "fullName": {"dataType":"string","required":true},
            "profilePicture": {"dataType":"union","subSchemas":[{"dataType":"string"},{"dataType":"enum","enums":[null]}]},
            "email": {"dataType":"string","required":true},
            "role": {"dataType":"union","subSchemas":[{"dataType":"enum","enums":["SUPER_ADMIN"]},{"dataType":"enum","enums":["ADMIN"]}],"required":true},
            "isActive": {"dataType":"boolean","required":true},
            "createdAt": {"dataType":"datetime","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ApiResponse_AdminResponse_": {
        "dataType": "refObject",
        "properties": {
            "success": {"dataType":"boolean","required":true},
            "message": {"dataType":"string","required":true},
            "data": {"ref":"AdminResponse"},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "LoginDto": {
        "dataType": "refObject",
        "properties": {
            "email": {"dataType":"string","required":true},
            "password": {"dataType":"string","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "LoginResponse": {
        "dataType": "refObject",
        "properties": {
            "token": {"dataType":"string","required":true},
            "admin": {"ref":"AdminResponse","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ApiResponse_LoginResponse_": {
        "dataType": "refObject",
        "properties": {
            "success": {"dataType":"boolean","required":true},
            "message": {"dataType":"string","required":true},
            "data": {"ref":"LoginResponse"},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "VerifyEmailDto": {
        "dataType": "refObject",
        "properties": {
            "email": {"dataType":"string","required":true},
            "otpCode": {"dataType":"string","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "UpdateProfileDto": {
        "dataType": "refObject",
        "properties": {
            "fullName": {"dataType":"string"},
            "profilePicture": {"dataType":"string"},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ApiResponse_AdminResponse-Array_": {
        "dataType": "refObject",
        "properties": {
            "success": {"dataType":"boolean","required":true},
            "message": {"dataType":"string","required":true},
            "data": {"dataType":"array","array":{"dataType":"refObject","ref":"AdminResponse"}},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Partial_AdminResponse_": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{"id":{"dataType":"double"},"fullName":{"dataType":"string"},"profilePicture":{"dataType":"string"},"email":{"dataType":"string"},"role":{"dataType":"union","subSchemas":[{"dataType":"enum","enums":["SUPER_ADMIN"]},{"dataType":"enum","enums":["ADMIN"]}]},"isActive":{"dataType":"boolean"},"createdAt":{"dataType":"datetime"}},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ApiResponse_Partial_AdminResponse__": {
        "dataType": "refObject",
        "properties": {
            "success": {"dataType":"boolean","required":true},
            "message": {"dataType":"string","required":true},
            "data": {"ref":"Partial_AdminResponse_"},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
};
const templateService = new ExpressTemplateService(models, {"noImplicitAdditionalProperties":"throw-on-extras","bodyCoercion":true});

// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa




export function RegisterRoutes(app: Router) {

    // ###########################################################################################################
    //  NOTE: If you do not see routes for all of your controllers in this file, then you might not have informed tsoa of where to look
    //      Please look into the "controllerPathGlobs" config option described in the readme: https://github.com/lukeautry/tsoa
    // ###########################################################################################################


    
        const argsTrainingApplicationController_apply: Record<string, TsoaRoute.ParameterSchema> = {
                requestBody: {"in":"body","name":"requestBody","required":true,"ref":"CreateTrainingApplicationDto"},
                successResponse: {"in":"res","name":"201","required":true,"ref":"ApiResponse_TrainingApplicationResponse_"},
                errorResponse: {"in":"res","name":"400","required":true,"ref":"ApiResponse_null_"},
        };
        app.post('/training-applications',
            ...(fetchMiddlewares<RequestHandler>(TrainingApplicationController)),
            ...(fetchMiddlewares<RequestHandler>(TrainingApplicationController.prototype.apply)),

            async function TrainingApplicationController_apply(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsTrainingApplicationController_apply, request, response });

                const controller = new TrainingApplicationController();

              await templateService.apiHandler({
                methodName: 'apply',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsTrainingApplicationController_getAll: Record<string, TsoaRoute.ParameterSchema> = {
                successResponse: {"in":"res","name":"200","required":true,"ref":"ApiResponse_TrainingApplicationResponse-Array_"},
                errorResponse: {"in":"res","name":"500","required":true,"ref":"ApiResponse_null_"},
                status: {"in":"query","name":"status","dataType":"string"},
        };
        app.get('/training-applications',
            ...(fetchMiddlewares<RequestHandler>(TrainingApplicationController)),
            ...(fetchMiddlewares<RequestHandler>(TrainingApplicationController.prototype.getAll)),

            async function TrainingApplicationController_getAll(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsTrainingApplicationController_getAll, request, response });

                const controller = new TrainingApplicationController();

              await templateService.apiHandler({
                methodName: 'getAll',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsTrainingApplicationController_getById: Record<string, TsoaRoute.ParameterSchema> = {
                id: {"in":"path","name":"id","required":true,"dataType":"double"},
                successResponse: {"in":"res","name":"200","required":true,"ref":"ApiResponse_TrainingApplicationResponse_"},
                notFoundResponse: {"in":"res","name":"404","required":true,"ref":"ApiResponse_null_"},
        };
        app.get('/training-applications/:id',
            ...(fetchMiddlewares<RequestHandler>(TrainingApplicationController)),
            ...(fetchMiddlewares<RequestHandler>(TrainingApplicationController.prototype.getById)),

            async function TrainingApplicationController_getById(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsTrainingApplicationController_getById, request, response });

                const controller = new TrainingApplicationController();

              await templateService.apiHandler({
                methodName: 'getById',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsTrainingApplicationController_updateStatus: Record<string, TsoaRoute.ParameterSchema> = {
                id: {"in":"path","name":"id","required":true,"dataType":"double"},
                requestBody: {"in":"body","name":"requestBody","required":true,"ref":"UpdateTrainingApplicationDto"},
                successResponse: {"in":"res","name":"200","required":true,"ref":"ApiResponse_TrainingApplicationResponse_"},
                errorResponse: {"in":"res","name":"400","required":true,"ref":"ApiResponse_null_"},
        };
        app.patch('/training-applications/:id/status',
            ...(fetchMiddlewares<RequestHandler>(TrainingApplicationController)),
            ...(fetchMiddlewares<RequestHandler>(TrainingApplicationController.prototype.updateStatus)),

            async function TrainingApplicationController_updateStatus(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsTrainingApplicationController_updateStatus, request, response });

                const controller = new TrainingApplicationController();

              await templateService.apiHandler({
                methodName: 'updateStatus',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsTrainingApplicationController_delete: Record<string, TsoaRoute.ParameterSchema> = {
                id: {"in":"path","name":"id","required":true,"dataType":"double"},
                successResponse: {"in":"res","name":"200","required":true,"ref":"ApiResponse__message-string__"},
                errorResponse: {"in":"res","name":"400","required":true,"ref":"ApiResponse_null_"},
        };
        app.delete('/training-applications/:id',
            ...(fetchMiddlewares<RequestHandler>(TrainingApplicationController)),
            ...(fetchMiddlewares<RequestHandler>(TrainingApplicationController.prototype.delete)),

            async function TrainingApplicationController_delete(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsTrainingApplicationController_delete, request, response });

                const controller = new TrainingApplicationController();

              await templateService.apiHandler({
                methodName: 'delete',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsTaskerController_create: Record<string, TsoaRoute.ParameterSchema> = {
                requestBody: {"in":"body","name":"requestBody","required":true,"ref":"CreateTaskerDto"},
                successResponse: {"in":"res","name":"201","required":true,"ref":"ApiResponse_TaskerResponse_"},
                errorResponse: {"in":"res","name":"400","required":true,"ref":"ApiResponse_null_"},
        };
        app.post('/taskers',
            ...(fetchMiddlewares<RequestHandler>(TaskerController)),
            ...(fetchMiddlewares<RequestHandler>(TaskerController.prototype.create)),

            async function TaskerController_create(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsTaskerController_create, request, response });

                const controller = new TaskerController();

              await templateService.apiHandler({
                methodName: 'create',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsTaskerController_getAll: Record<string, TsoaRoute.ParameterSchema> = {
                successResponse: {"in":"res","name":"200","required":true,"ref":"ApiResponse_TaskerResponse-Array_"},
                errorResponse: {"in":"res","name":"500","required":true,"ref":"ApiResponse_null_"},
        };
        app.get('/taskers',
            ...(fetchMiddlewares<RequestHandler>(TaskerController)),
            ...(fetchMiddlewares<RequestHandler>(TaskerController.prototype.getAll)),

            async function TaskerController_getAll(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsTaskerController_getAll, request, response });

                const controller = new TaskerController();

              await templateService.apiHandler({
                methodName: 'getAll',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsTaskerController_getById: Record<string, TsoaRoute.ParameterSchema> = {
                id: {"in":"path","name":"id","required":true,"dataType":"double"},
                successResponse: {"in":"res","name":"200","required":true,"ref":"ApiResponse_TaskerResponse_"},
                notFoundResponse: {"in":"res","name":"404","required":true,"ref":"ApiResponse_null_"},
        };
        app.get('/taskers/:id',
            ...(fetchMiddlewares<RequestHandler>(TaskerController)),
            ...(fetchMiddlewares<RequestHandler>(TaskerController.prototype.getById)),

            async function TaskerController_getById(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsTaskerController_getById, request, response });

                const controller = new TaskerController();

              await templateService.apiHandler({
                methodName: 'getById',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsTaskerController_update: Record<string, TsoaRoute.ParameterSchema> = {
                id: {"in":"path","name":"id","required":true,"dataType":"double"},
                requestBody: {"in":"body","name":"requestBody","required":true,"ref":"UpdateTaskerDto"},
                successResponse: {"in":"res","name":"200","required":true,"ref":"ApiResponse_TaskerResponse_"},
                errorResponse: {"in":"res","name":"400","required":true,"ref":"ApiResponse_null_"},
        };
        app.put('/taskers/:id',
            ...(fetchMiddlewares<RequestHandler>(TaskerController)),
            ...(fetchMiddlewares<RequestHandler>(TaskerController.prototype.update)),

            async function TaskerController_update(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsTaskerController_update, request, response });

                const controller = new TaskerController();

              await templateService.apiHandler({
                methodName: 'update',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsTaskerController_delete: Record<string, TsoaRoute.ParameterSchema> = {
                id: {"in":"path","name":"id","required":true,"dataType":"double"},
                successResponse: {"in":"res","name":"200","required":true,"ref":"ApiResponse__message-string__"},
                errorResponse: {"in":"res","name":"400","required":true,"ref":"ApiResponse_null_"},
        };
        app.delete('/taskers/:id',
            ...(fetchMiddlewares<RequestHandler>(TaskerController)),
            ...(fetchMiddlewares<RequestHandler>(TaskerController.prototype.delete)),

            async function TaskerController_delete(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsTaskerController_delete, request, response });

                const controller = new TaskerController();

              await templateService.apiHandler({
                methodName: 'delete',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsServiceRequestController_create: Record<string, TsoaRoute.ParameterSchema> = {
                requestBody: {"in":"body","name":"requestBody","required":true,"ref":"CreateServiceRequestDto"},
                successResponse: {"in":"res","name":"201","required":true,"ref":"ApiResponse_ServiceRequestResponse_"},
                errorResponse: {"in":"res","name":"400","required":true,"ref":"ApiResponse_null_"},
        };
        app.post('/service-requests',
            ...(fetchMiddlewares<RequestHandler>(ServiceRequestController)),
            ...(fetchMiddlewares<RequestHandler>(ServiceRequestController.prototype.create)),

            async function ServiceRequestController_create(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsServiceRequestController_create, request, response });

                const controller = new ServiceRequestController();

              await templateService.apiHandler({
                methodName: 'create',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsServiceRequestController_track: Record<string, TsoaRoute.ParameterSchema> = {
                trackingCode: {"in":"path","name":"trackingCode","required":true,"dataType":"string"},
                successResponse: {"in":"res","name":"200","required":true,"ref":"ApiResponse_ServiceRequestResponse_"},
                notFoundResponse: {"in":"res","name":"404","required":true,"ref":"ApiResponse_null_"},
        };
        app.get('/service-requests/track/:trackingCode',
            ...(fetchMiddlewares<RequestHandler>(ServiceRequestController)),
            ...(fetchMiddlewares<RequestHandler>(ServiceRequestController.prototype.track)),

            async function ServiceRequestController_track(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsServiceRequestController_track, request, response });

                const controller = new ServiceRequestController();

              await templateService.apiHandler({
                methodName: 'track',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsServiceRequestController_getAll: Record<string, TsoaRoute.ParameterSchema> = {
                status: {"in":"query","name":"status","required":true,"dataType":"union","subSchemas":[{"dataType":"string"},{"dataType":"undefined"}]},
                successResponse: {"in":"res","name":"200","required":true,"ref":"ApiResponse_ServiceRequestResponse-Array_"},
                errorResponse: {"in":"res","name":"500","required":true,"ref":"ApiResponse_null_"},
        };
        app.get('/service-requests',
            ...(fetchMiddlewares<RequestHandler>(ServiceRequestController)),
            ...(fetchMiddlewares<RequestHandler>(ServiceRequestController.prototype.getAll)),

            async function ServiceRequestController_getAll(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsServiceRequestController_getAll, request, response });

                const controller = new ServiceRequestController();

              await templateService.apiHandler({
                methodName: 'getAll',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsServiceRequestController_getById: Record<string, TsoaRoute.ParameterSchema> = {
                id: {"in":"path","name":"id","required":true,"dataType":"double"},
                successResponse: {"in":"res","name":"200","required":true,"ref":"ApiResponse_ServiceRequestResponse_"},
                notFoundResponse: {"in":"res","name":"404","required":true,"ref":"ApiResponse_null_"},
        };
        app.get('/service-requests/:id',
            ...(fetchMiddlewares<RequestHandler>(ServiceRequestController)),
            ...(fetchMiddlewares<RequestHandler>(ServiceRequestController.prototype.getById)),

            async function ServiceRequestController_getById(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsServiceRequestController_getById, request, response });

                const controller = new ServiceRequestController();

              await templateService.apiHandler({
                methodName: 'getById',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsServiceRequestController_updateStatus: Record<string, TsoaRoute.ParameterSchema> = {
                id: {"in":"path","name":"id","required":true,"dataType":"double"},
                requestBody: {"in":"body","name":"requestBody","required":true,"ref":"UpdateRequestStatusDto"},
                successResponse: {"in":"res","name":"200","required":true,"ref":"ApiResponse_ServiceRequestResponse_"},
                errorResponse: {"in":"res","name":"400","required":true,"ref":"ApiResponse_null_"},
        };
        app.patch('/service-requests/:id/status',
            ...(fetchMiddlewares<RequestHandler>(ServiceRequestController)),
            ...(fetchMiddlewares<RequestHandler>(ServiceRequestController.prototype.updateStatus)),

            async function ServiceRequestController_updateStatus(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsServiceRequestController_updateStatus, request, response });

                const controller = new ServiceRequestController();

              await templateService.apiHandler({
                methodName: 'updateStatus',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsServiceRequestController_delete: Record<string, TsoaRoute.ParameterSchema> = {
                id: {"in":"path","name":"id","required":true,"dataType":"double"},
                successResponse: {"in":"res","name":"200","required":true,"ref":"ApiResponse__message-string__"},
                errorResponse: {"in":"res","name":"400","required":true,"ref":"ApiResponse_null_"},
        };
        app.delete('/service-requests/:id',
            ...(fetchMiddlewares<RequestHandler>(ServiceRequestController)),
            ...(fetchMiddlewares<RequestHandler>(ServiceRequestController.prototype.delete)),

            async function ServiceRequestController_delete(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsServiceRequestController_delete, request, response });

                const controller = new ServiceRequestController();

              await templateService.apiHandler({
                methodName: 'delete',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsProductController_create: Record<string, TsoaRoute.ParameterSchema> = {
                requestBody: {"in":"body","name":"requestBody","required":true,"ref":"CreateProductDto"},
                successResponse: {"in":"res","name":"201","required":true,"ref":"ApiResponse_ProductResponse_"},
                errorResponse: {"in":"res","name":"400","required":true,"ref":"ApiResponse_null_"},
        };
        app.post('/products',
            authenticateMiddleware([{"bearerAuth":["ADMIN","SUPER_ADMIN"]}]),
            ...(fetchMiddlewares<RequestHandler>(ProductController)),
            ...(fetchMiddlewares<RequestHandler>(ProductController.prototype.create)),

            async function ProductController_create(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsProductController_create, request, response });

                const controller = new ProductController();

              await templateService.apiHandler({
                methodName: 'create',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsProductController_getAll: Record<string, TsoaRoute.ParameterSchema> = {
                successResponse: {"in":"res","name":"200","required":true,"ref":"ApiResponse_ProductResponse-Array_"},
                errorResponse: {"in":"res","name":"500","required":true,"ref":"ApiResponse_null_"},
                category: {"in":"query","name":"category","dataType":"string"},
        };
        app.get('/products',
            ...(fetchMiddlewares<RequestHandler>(ProductController)),
            ...(fetchMiddlewares<RequestHandler>(ProductController.prototype.getAll)),

            async function ProductController_getAll(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsProductController_getAll, request, response });

                const controller = new ProductController();

              await templateService.apiHandler({
                methodName: 'getAll',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsProductController_getById: Record<string, TsoaRoute.ParameterSchema> = {
                id: {"in":"path","name":"id","required":true,"dataType":"double"},
                successResponse: {"in":"res","name":"200","required":true,"ref":"ApiResponse_ProductResponse_"},
                notFoundResponse: {"in":"res","name":"404","required":true,"ref":"ApiResponse_null_"},
        };
        app.get('/products/:id',
            ...(fetchMiddlewares<RequestHandler>(ProductController)),
            ...(fetchMiddlewares<RequestHandler>(ProductController.prototype.getById)),

            async function ProductController_getById(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsProductController_getById, request, response });

                const controller = new ProductController();

              await templateService.apiHandler({
                methodName: 'getById',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsProductController_update: Record<string, TsoaRoute.ParameterSchema> = {
                id: {"in":"path","name":"id","required":true,"dataType":"double"},
                requestBody: {"in":"body","name":"requestBody","required":true,"ref":"UpdateProductDto"},
                successResponse: {"in":"res","name":"200","required":true,"ref":"ApiResponse_ProductResponse_"},
                errorResponse: {"in":"res","name":"400","required":true,"ref":"ApiResponse_null_"},
        };
        app.put('/products/:id',
            authenticateMiddleware([{"bearerAuth":["ADMIN","SUPER_ADMIN"]}]),
            ...(fetchMiddlewares<RequestHandler>(ProductController)),
            ...(fetchMiddlewares<RequestHandler>(ProductController.prototype.update)),

            async function ProductController_update(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsProductController_update, request, response });

                const controller = new ProductController();

              await templateService.apiHandler({
                methodName: 'update',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsProductController_delete: Record<string, TsoaRoute.ParameterSchema> = {
                id: {"in":"path","name":"id","required":true,"dataType":"double"},
                successResponse: {"in":"res","name":"200","required":true,"ref":"ApiResponse__message-string__"},
                errorResponse: {"in":"res","name":"400","required":true,"ref":"ApiResponse_null_"},
        };
        app.delete('/products/:id',
            authenticateMiddleware([{"bearerAuth":["ADMIN","SUPER_ADMIN"]}]),
            ...(fetchMiddlewares<RequestHandler>(ProductController)),
            ...(fetchMiddlewares<RequestHandler>(ProductController.prototype.delete)),

            async function ProductController_delete(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsProductController_delete, request, response });

                const controller = new ProductController();

              await templateService.apiHandler({
                methodName: 'delete',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsOrderController_create: Record<string, TsoaRoute.ParameterSchema> = {
                requestBody: {"in":"body","name":"requestBody","required":true,"ref":"CreateOrderDto"},
                successResponse: {"in":"res","name":"201","required":true,"ref":"ApiResponse_OrderResponse_"},
                errorResponse: {"in":"res","name":"400","required":true,"ref":"ApiResponse_null_"},
        };
        app.post('/orders',
            ...(fetchMiddlewares<RequestHandler>(OrderController)),
            ...(fetchMiddlewares<RequestHandler>(OrderController.prototype.create)),

            async function OrderController_create(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsOrderController_create, request, response });

                const controller = new OrderController();

              await templateService.apiHandler({
                methodName: 'create',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsOrderController_track: Record<string, TsoaRoute.ParameterSchema> = {
                trackingCode: {"in":"path","name":"trackingCode","required":true,"dataType":"string"},
                successResponse: {"in":"res","name":"200","required":true,"ref":"ApiResponse_OrderResponse_"},
                notFoundResponse: {"in":"res","name":"404","required":true,"ref":"ApiResponse_null_"},
        };
        app.get('/orders/track/:trackingCode',
            ...(fetchMiddlewares<RequestHandler>(OrderController)),
            ...(fetchMiddlewares<RequestHandler>(OrderController.prototype.track)),

            async function OrderController_track(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsOrderController_track, request, response });

                const controller = new OrderController();

              await templateService.apiHandler({
                methodName: 'track',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsOrderController_getAll: Record<string, TsoaRoute.ParameterSchema> = {
                successResponse: {"in":"res","name":"200","required":true,"ref":"ApiResponse_OrderResponse-Array_"},
                errorResponse: {"in":"res","name":"500","required":true,"ref":"ApiResponse_null_"},
                status: {"in":"query","name":"status","dataType":"string"},
        };
        app.get('/orders',
            ...(fetchMiddlewares<RequestHandler>(OrderController)),
            ...(fetchMiddlewares<RequestHandler>(OrderController.prototype.getAll)),

            async function OrderController_getAll(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsOrderController_getAll, request, response });

                const controller = new OrderController();

              await templateService.apiHandler({
                methodName: 'getAll',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsOrderController_getById: Record<string, TsoaRoute.ParameterSchema> = {
                id: {"in":"path","name":"id","required":true,"dataType":"double"},
                successResponse: {"in":"res","name":"200","required":true,"ref":"ApiResponse_OrderResponse_"},
                notFoundResponse: {"in":"res","name":"404","required":true,"ref":"ApiResponse_null_"},
        };
        app.get('/orders/:id',
            ...(fetchMiddlewares<RequestHandler>(OrderController)),
            ...(fetchMiddlewares<RequestHandler>(OrderController.prototype.getById)),

            async function OrderController_getById(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsOrderController_getById, request, response });

                const controller = new OrderController();

              await templateService.apiHandler({
                methodName: 'getById',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsOrderController_updateStatus: Record<string, TsoaRoute.ParameterSchema> = {
                id: {"in":"path","name":"id","required":true,"dataType":"double"},
                requestBody: {"in":"body","name":"requestBody","required":true,"ref":"UpdateOrderStatusDto"},
                successResponse: {"in":"res","name":"200","required":true,"ref":"ApiResponse_OrderResponse_"},
                errorResponse: {"in":"res","name":"400","required":true,"ref":"ApiResponse_null_"},
        };
        app.patch('/orders/:id/status',
            ...(fetchMiddlewares<RequestHandler>(OrderController)),
            ...(fetchMiddlewares<RequestHandler>(OrderController.prototype.updateStatus)),

            async function OrderController_updateStatus(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsOrderController_updateStatus, request, response });

                const controller = new OrderController();

              await templateService.apiHandler({
                methodName: 'updateStatus',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsOrderController_delete: Record<string, TsoaRoute.ParameterSchema> = {
                id: {"in":"path","name":"id","required":true,"dataType":"double"},
                successResponse: {"in":"res","name":"200","required":true,"ref":"ApiResponse__message-string__"},
                errorResponse: {"in":"res","name":"400","required":true,"ref":"ApiResponse_null_"},
        };
        app.delete('/orders/:id',
            ...(fetchMiddlewares<RequestHandler>(OrderController)),
            ...(fetchMiddlewares<RequestHandler>(OrderController.prototype.delete)),

            async function OrderController_delete(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsOrderController_delete, request, response });

                const controller = new OrderController();

              await templateService.apiHandler({
                methodName: 'delete',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsInfoPostController_create: Record<string, TsoaRoute.ParameterSchema> = {
                requestBody: {"in":"body","name":"requestBody","required":true,"ref":"CreateInfoPostDto"},
                successResponse: {"in":"res","name":"201","required":true,"ref":"ApiResponse_InfoPostResponse_"},
                errorResponse: {"in":"res","name":"400","required":true,"ref":"ApiResponse_null_"},
        };
        app.post('/info-posts',
            ...(fetchMiddlewares<RequestHandler>(InfoPostController)),
            ...(fetchMiddlewares<RequestHandler>(InfoPostController.prototype.create)),

            async function InfoPostController_create(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsInfoPostController_create, request, response });

                const controller = new InfoPostController();

              await templateService.apiHandler({
                methodName: 'create',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsInfoPostController_getAll: Record<string, TsoaRoute.ParameterSchema> = {
                successResponse: {"in":"res","name":"200","required":true,"ref":"ApiResponse_InfoPostResponse-Array_"},
                errorResponse: {"in":"res","name":"500","required":true,"ref":"ApiResponse_null_"},
                category: {"in":"query","name":"category","dataType":"string"},
        };
        app.get('/info-posts',
            ...(fetchMiddlewares<RequestHandler>(InfoPostController)),
            ...(fetchMiddlewares<RequestHandler>(InfoPostController.prototype.getAll)),

            async function InfoPostController_getAll(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsInfoPostController_getAll, request, response });

                const controller = new InfoPostController();

              await templateService.apiHandler({
                methodName: 'getAll',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsInfoPostController_getById: Record<string, TsoaRoute.ParameterSchema> = {
                id: {"in":"path","name":"id","required":true,"dataType":"double"},
                successResponse: {"in":"res","name":"200","required":true,"ref":"ApiResponse_InfoPostResponse_"},
                notFoundResponse: {"in":"res","name":"404","required":true,"ref":"ApiResponse_null_"},
        };
        app.get('/info-posts/:id',
            ...(fetchMiddlewares<RequestHandler>(InfoPostController)),
            ...(fetchMiddlewares<RequestHandler>(InfoPostController.prototype.getById)),

            async function InfoPostController_getById(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsInfoPostController_getById, request, response });

                const controller = new InfoPostController();

              await templateService.apiHandler({
                methodName: 'getById',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsInfoPostController_update: Record<string, TsoaRoute.ParameterSchema> = {
                id: {"in":"path","name":"id","required":true,"dataType":"double"},
                requestBody: {"in":"body","name":"requestBody","required":true,"ref":"UpdateInfoPostDto"},
                successResponse: {"in":"res","name":"200","required":true,"ref":"ApiResponse_InfoPostResponse_"},
                errorResponse: {"in":"res","name":"400","required":true,"ref":"ApiResponse_null_"},
        };
        app.put('/info-posts/:id',
            ...(fetchMiddlewares<RequestHandler>(InfoPostController)),
            ...(fetchMiddlewares<RequestHandler>(InfoPostController.prototype.update)),

            async function InfoPostController_update(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsInfoPostController_update, request, response });

                const controller = new InfoPostController();

              await templateService.apiHandler({
                methodName: 'update',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsInfoPostController_delete: Record<string, TsoaRoute.ParameterSchema> = {
                id: {"in":"path","name":"id","required":true,"dataType":"double"},
                successResponse: {"in":"res","name":"200","required":true,"ref":"ApiResponse__message-string__"},
                errorResponse: {"in":"res","name":"400","required":true,"ref":"ApiResponse_null_"},
        };
        app.delete('/info-posts/:id',
            ...(fetchMiddlewares<RequestHandler>(InfoPostController)),
            ...(fetchMiddlewares<RequestHandler>(InfoPostController.prototype.delete)),

            async function InfoPostController_delete(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsInfoPostController_delete, request, response });

                const controller = new InfoPostController();

              await templateService.apiHandler({
                methodName: 'delete',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsAuthController_register: Record<string, TsoaRoute.ParameterSchema> = {
                requestBody: {"in":"body","name":"requestBody","required":true,"ref":"RegisterAdminDto"},
                successResponse: {"in":"res","name":"201","required":true,"ref":"ApiResponse_AdminResponse_"},
                errorResponse: {"in":"res","name":"400","required":true,"ref":"ApiResponse_null_"},
        };
        app.post('/auth/register',
            authenticateMiddleware([{"bearerAuth":["SUPER_ADMIN"]}]),
            ...(fetchMiddlewares<RequestHandler>(AuthController)),
            ...(fetchMiddlewares<RequestHandler>(AuthController.prototype.register)),

            async function AuthController_register(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsAuthController_register, request, response });

                const controller = new AuthController();

              await templateService.apiHandler({
                methodName: 'register',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsAuthController_setup: Record<string, TsoaRoute.ParameterSchema> = {
                requestBody: {"in":"body","name":"requestBody","required":true,"ref":"RegisterAdminDto"},
                successResponse: {"in":"res","name":"201","required":true,"ref":"ApiResponse_AdminResponse_"},
                errorResponse: {"in":"res","name":"400","required":true,"ref":"ApiResponse_null_"},
        };
        app.post('/auth/setup',
            ...(fetchMiddlewares<RequestHandler>(AuthController)),
            ...(fetchMiddlewares<RequestHandler>(AuthController.prototype.setup)),

            async function AuthController_setup(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsAuthController_setup, request, response });

                const controller = new AuthController();

              await templateService.apiHandler({
                methodName: 'setup',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsAuthController_login: Record<string, TsoaRoute.ParameterSchema> = {
                requestBody: {"in":"body","name":"requestBody","required":true,"ref":"LoginDto"},
                successResponse: {"in":"res","name":"200","required":true,"ref":"ApiResponse_LoginResponse_"},
                errorResponse: {"in":"res","name":"401","required":true,"ref":"ApiResponse_null_"},
        };
        app.post('/auth/login',
            ...(fetchMiddlewares<RequestHandler>(AuthController)),
            ...(fetchMiddlewares<RequestHandler>(AuthController.prototype.login)),

            async function AuthController_login(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsAuthController_login, request, response });

                const controller = new AuthController();

              await templateService.apiHandler({
                methodName: 'login',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsAuthController_verifyEmail: Record<string, TsoaRoute.ParameterSchema> = {
                requestBody: {"in":"body","name":"requestBody","required":true,"ref":"VerifyEmailDto"},
                successResponse: {"in":"res","name":"200","required":true,"ref":"ApiResponse__message-string__"},
                errorResponse: {"in":"res","name":"400","required":true,"ref":"ApiResponse_null_"},
        };
        app.post('/auth/verify-email',
            ...(fetchMiddlewares<RequestHandler>(AuthController)),
            ...(fetchMiddlewares<RequestHandler>(AuthController.prototype.verifyEmail)),

            async function AuthController_verifyEmail(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsAuthController_verifyEmail, request, response });

                const controller = new AuthController();

              await templateService.apiHandler({
                methodName: 'verifyEmail',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsAuthController_getProfile: Record<string, TsoaRoute.ParameterSchema> = {
                request: {"in":"request","name":"request","required":true,"dataType":"object"},
                successResponse: {"in":"res","name":"200","required":true,"ref":"ApiResponse_AdminResponse_"},
                errorResponse: {"in":"res","name":"404","required":true,"ref":"ApiResponse_null_"},
        };
        app.get('/auth/profile',
            authenticateMiddleware([{"bearerAuth":[]}]),
            ...(fetchMiddlewares<RequestHandler>(AuthController)),
            ...(fetchMiddlewares<RequestHandler>(AuthController.prototype.getProfile)),

            async function AuthController_getProfile(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsAuthController_getProfile, request, response });

                const controller = new AuthController();

              await templateService.apiHandler({
                methodName: 'getProfile',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsAuthController_updateProfile: Record<string, TsoaRoute.ParameterSchema> = {
                request: {"in":"request","name":"request","required":true,"dataType":"object"},
                requestBody: {"in":"body","name":"requestBody","required":true,"ref":"UpdateProfileDto"},
                successResponse: {"in":"res","name":"200","required":true,"ref":"ApiResponse_AdminResponse_"},
                errorResponse: {"in":"res","name":"400","required":true,"ref":"ApiResponse_null_"},
        };
        app.patch('/auth/profile',
            authenticateMiddleware([{"bearerAuth":[]}]),
            ...(fetchMiddlewares<RequestHandler>(AuthController)),
            ...(fetchMiddlewares<RequestHandler>(AuthController.prototype.updateProfile)),

            async function AuthController_updateProfile(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsAuthController_updateProfile, request, response });

                const controller = new AuthController();

              await templateService.apiHandler({
                methodName: 'updateProfile',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsAuthController_getAllAdmins: Record<string, TsoaRoute.ParameterSchema> = {
                successResponse: {"in":"res","name":"200","required":true,"ref":"ApiResponse_AdminResponse-Array_"},
                errorResponse: {"in":"res","name":"500","required":true,"ref":"ApiResponse_null_"},
        };
        app.get('/auth/admins',
            authenticateMiddleware([{"bearerAuth":["SUPER_ADMIN"]}]),
            ...(fetchMiddlewares<RequestHandler>(AuthController)),
            ...(fetchMiddlewares<RequestHandler>(AuthController.prototype.getAllAdmins)),

            async function AuthController_getAllAdmins(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsAuthController_getAllAdmins, request, response });

                const controller = new AuthController();

              await templateService.apiHandler({
                methodName: 'getAllAdmins',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsAuthController_deactivateAdmin: Record<string, TsoaRoute.ParameterSchema> = {
                id: {"in":"path","name":"id","required":true,"dataType":"double"},
                successResponse: {"in":"res","name":"200","required":true,"ref":"ApiResponse_AdminResponse_"},
                errorResponse: {"in":"res","name":"400","required":true,"ref":"ApiResponse_null_"},
        };
        app.patch('/auth/admins/:id/deactivate',
            authenticateMiddleware([{"bearerAuth":["SUPER_ADMIN"]}]),
            ...(fetchMiddlewares<RequestHandler>(AuthController)),
            ...(fetchMiddlewares<RequestHandler>(AuthController.prototype.deactivateAdmin)),

            async function AuthController_deactivateAdmin(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsAuthController_deactivateAdmin, request, response });

                const controller = new AuthController();

              await templateService.apiHandler({
                methodName: 'deactivateAdmin',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsAuthController_deleteAdmin: Record<string, TsoaRoute.ParameterSchema> = {
                id: {"in":"path","name":"id","required":true,"dataType":"double"},
                successResponse: {"in":"res","name":"200","required":true,"ref":"ApiResponse_Partial_AdminResponse__"},
                errorResponse: {"in":"res","name":"400","required":true,"ref":"ApiResponse_null_"},
        };
        app.delete('/auth/admins/:id',
            authenticateMiddleware([{"bearerAuth":["SUPER_ADMIN"]}]),
            ...(fetchMiddlewares<RequestHandler>(AuthController)),
            ...(fetchMiddlewares<RequestHandler>(AuthController.prototype.deleteAdmin)),

            async function AuthController_deleteAdmin(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsAuthController_deleteAdmin, request, response });

                const controller = new AuthController();

              await templateService.apiHandler({
                methodName: 'deleteAdmin',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa


    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

    function authenticateMiddleware(security: TsoaRoute.Security[] = []) {
        return async function runAuthenticationMiddleware(request: any, response: any, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            // keep track of failed auth attempts so we can hand back the most
            // recent one.  This behavior was previously existing so preserving it
            // here
            const failedAttempts: any[] = [];
            const pushAndRethrow = (error: any) => {
                failedAttempts.push(error);
                throw error;
            };

            const secMethodOrPromises: Promise<any>[] = [];
            for (const secMethod of security) {
                if (Object.keys(secMethod).length > 1) {
                    const secMethodAndPromises: Promise<any>[] = [];

                    for (const name in secMethod) {
                        secMethodAndPromises.push(
                            expressAuthenticationRecasted(request, name, secMethod[name], response)
                                .catch(pushAndRethrow)
                        );
                    }

                    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

                    secMethodOrPromises.push(Promise.all(secMethodAndPromises)
                        .then(users => { return users[0]; }));
                } else {
                    for (const name in secMethod) {
                        secMethodOrPromises.push(
                            expressAuthenticationRecasted(request, name, secMethod[name], response)
                                .catch(pushAndRethrow)
                        );
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
            catch(err) {
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
        }
    }

    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
}

// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
