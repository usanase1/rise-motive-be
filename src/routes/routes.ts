/* tslint:disable */
/* eslint-disable */
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import type { TsoaRoute } from '@tsoa/runtime';
import {  fetchMiddlewares, ExpressTemplateService } from '@tsoa/runtime';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { WebDigitalController } from './../controller/WebController';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { TrainingController } from './../controller/TrainingController';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { TrackingController } from './../controller/TrackingCodeController';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { TaskerController } from './../controller/TaskerController';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { ReportController } from './../controller/ReportController';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { ProductController } from './../controller/ProductController';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { OrderController } from './../controller/OrderController';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { CreativeMediaController } from './../controller/MediaController';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { LegalOfficialController } from './../controller/LegalController';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { InfoPostController } from './../controller/InfoPostController';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { EGovController } from './../controller/EgovController';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { AuthController } from './../controller/AuthController';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { ApplicationDocController } from './../controller/ApplicationController';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { AdminController } from './../controller/AdminController';
import { expressAuthentication } from './../middleware/authorizeRoles';
// @ts-ignore - no great way to install types from subpackage
import type { Request as ExRequest, Response as ExResponse, RequestHandler, Router } from 'express';

const expressAuthenticationRecasted = expressAuthentication as (req: ExRequest, securityName: string, scopes?: string[], res?: ExResponse) => Promise<any>;


// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

const models: TsoaRoute.Models = {
    "_36_Enums.RequestStatus": {
        "dataType": "refAlias",
        "type": {"dataType":"union","subSchemas":[{"dataType":"enum","enums":["PENDING"]},{"dataType":"enum","enums":["ASSIGNED"]},{"dataType":"enum","enums":["IN_PROGRESS"]},{"dataType":"enum","enums":["COMPLETED"]},{"dataType":"enum","enums":["CANCELLED"]}],"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "CreateWebDigitalRequest": {
        "dataType": "refObject",
        "properties": {
            "customerName": {"dataType":"string","required":true},
            "customerPhone": {"dataType":"string","required":true},
            "customerEmail": {"dataType":"string"},
            "service": {"dataType":"string"},
            "description": {"dataType":"string","required":true},
            "documentUrl": {"dataType":"string"},
            "preferredDate": {"dataType":"string"},
            "tasker": {"dataType":"string"},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "UpdateWebDigitalRequest": {
        "dataType": "refObject",
        "properties": {
            "customerName": {"dataType":"string","required":true},
            "customerPhone": {"dataType":"string","required":true},
            "customerEmail": {"dataType":"string"},
            "service": {"dataType":"string"},
            "description": {"dataType":"string","required":true},
            "documentUrl": {"dataType":"string"},
            "preferredDate": {"dataType":"string"},
            "tasker": {"dataType":"string"},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "RequestStatus": {
        "dataType": "refAlias",
        "type": {"ref":"_36_Enums.RequestStatus","validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "_36_Enums.ApplicationStatus": {
        "dataType": "refAlias",
        "type": {"dataType":"union","subSchemas":[{"dataType":"enum","enums":["PENDING"]},{"dataType":"enum","enums":["ACCEPTED"]},{"dataType":"enum","enums":["REJECTED"]}],"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "_36_Enums.TrainingCourse": {
        "dataType": "refAlias",
        "type": {"dataType":"union","subSchemas":[{"dataType":"enum","enums":["COMPUTER_FOUNDATIONS"]},{"dataType":"enum","enums":["MICROSOFT_OFFICE"]},{"dataType":"enum","enums":["GOOGLE_TOOLS"]},{"dataType":"enum","enums":["E_GOVERNMENT_TOOLS"]},{"dataType":"enum","enums":["DIGITAL_CONTENT_CREATION"]},{"dataType":"enum","enums":["GRAPHIC_DESIGN"]},{"dataType":"enum","enums":["AI_AND_DIGITAL_TOOLS"]},{"dataType":"enum","enums":["BASIC_PROGRAMMING"]}],"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "_36_Enums.ExperienceLevel": {
        "dataType": "refAlias",
        "type": {"dataType":"union","subSchemas":[{"dataType":"enum","enums":["BEGINNER"]},{"dataType":"enum","enums":["INTERMEDIATE"]}],"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "TrainingCourse": {
        "dataType": "refEnum",
        "enums": ["COMPUTER_FOUNDATIONS","MICROSOFT_OFFICE","GOOGLE_TOOLS","E_GOVERNMENT_TOOLS","DIGITAL_CONTENT_CREATION","GRAPHIC_DESIGN","AI_AND_DIGITAL_TOOLS","BASIC_PROGRAMMING"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ExperienceLevel": {
        "dataType": "refEnum",
        "enums": ["BEGINNER","INTERMEDIATE"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "CreateTrainingRequest": {
        "dataType": "refObject",
        "properties": {
            "fullName": {"dataType":"string","required":true},
            "phone": {"dataType":"string","required":true},
            "email": {"dataType":"string"},
            "selectedCourse": {"ref":"TrainingCourse","required":true},
            "preferredSchedule": {"dataType":"string"},
            "experienceLevel": {"ref":"ExperienceLevel"},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "UpdateTrainingRequest": {
        "dataType": "refObject",
        "properties": {
            "fullName": {"dataType":"string","required":true},
            "phone": {"dataType":"string","required":true},
            "email": {"dataType":"string"},
            "selectedCourse": {"ref":"TrainingCourse","required":true},
            "preferredSchedule": {"dataType":"string"},
            "experienceLevel": {"ref":"ExperienceLevel"},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ApplicationStatus": {
        "dataType": "refAlias",
        "type": {"dataType":"union","subSchemas":[{"dataType":"enum","enums":["PENDING"]},{"dataType":"enum","enums":["APPROVED"]},{"dataType":"enum","enums":["REJECTED"]},{"dataType":"enum","enums":["COMPLETED"]}],"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "UpdateStatusBody": {
        "dataType": "refObject",
        "properties": {
            "status": {"ref":"ApplicationStatus","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "TrackingUpdateRequest": {
        "dataType": "refObject",
        "properties": {
            "customerName": {"dataType":"string"},
            "customerPhone": {"dataType":"string"},
            "customerEmail": {"dataType":"string"},
            "service": {"dataType":"string"},
            "description": {"dataType":"string"},
            "preferredDate": {"dataType":"string"},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "CreateTaskerRequest": {
        "dataType": "refObject",
        "properties": {
            "name": {"dataType":"string","required":true},
            "phone": {"dataType":"string","required":true},
            "email": {"dataType":"string"},
            "specialties": {"dataType":"string","required":true},
            "isActive": {"dataType":"boolean"},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "UpdateTaskerRequest": {
        "dataType": "refObject",
        "properties": {
            "name": {"dataType":"string","required":true},
            "phone": {"dataType":"string","required":true},
            "email": {"dataType":"string"},
            "specialties": {"dataType":"string","required":true},
            "isActive": {"dataType":"boolean"},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "UpdateReportBody": {
        "dataType": "refObject",
        "properties": {
            "title": {"dataType":"string"},
            "summary": {"dataType":"string"},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "CreateProductRequest": {
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
    "_36_Enums.OrderStatus": {
        "dataType": "refAlias",
        "type": {"dataType":"union","subSchemas":[{"dataType":"enum","enums":["PENDING"]},{"dataType":"enum","enums":["CANCELLED"]},{"dataType":"enum","enums":["CONFIRMED"]},{"dataType":"enum","enums":["OUT_FOR_DELIVERY"]},{"dataType":"enum","enums":["DELIVERED"]}],"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "CreateOrderRequest": {
        "dataType": "refObject",
        "properties": {
            "customerName": {"dataType":"string","required":true},
            "customerPhone": {"dataType":"string","required":true},
            "customerEmail": {"dataType":"string"},
            "address": {"dataType":"string","required":true},
            "quantity": {"dataType":"double"},
            "paymentMethod": {"dataType":"string"},
            "note": {"dataType":"string"},
            "productId": {"dataType":"double","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "OrderStatus": {
        "dataType": "refAlias",
        "type": {"ref":"_36_Enums.OrderStatus","validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "UpdateOrderRequest": {
        "dataType": "refObject",
        "properties": {
            "customerName": {"dataType":"string"},
            "customerPhone": {"dataType":"string"},
            "customerEmail": {"dataType":"string"},
            "address": {"dataType":"string"},
            "quantity": {"dataType":"double"},
            "paymentMethod": {"dataType":"string"},
            "note": {"dataType":"string"},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "UpdateOrderStatusBody": {
        "dataType": "refObject",
        "properties": {
            "status": {"ref":"OrderStatus","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "CreateCreativeMediaRequest": {
        "dataType": "refObject",
        "properties": {
            "customerName": {"dataType":"string","required":true},
            "customerPhone": {"dataType":"string","required":true},
            "customerEmail": {"dataType":"string"},
            "service": {"dataType":"string"},
            "description": {"dataType":"string","required":true},
            "documentUrl": {"dataType":"string"},
            "preferredDate": {"dataType":"string"},
            "tasker": {"dataType":"string"},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "CreateLegalOfficialRequest": {
        "dataType": "refObject",
        "properties": {
            "customerName": {"dataType":"string","required":true},
            "customerPhone": {"dataType":"string","required":true},
            "customerEmail": {"dataType":"string"},
            "service": {"dataType":"string"},
            "description": {"dataType":"string","required":true},
            "documentUrl": {"dataType":"string"},
            "preferredDate": {"dataType":"string"},
            "tasker": {"dataType":"string"},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "UpdateLegalOfficialRequest": {
        "dataType": "refObject",
        "properties": {
            "customerName": {"dataType":"string","required":true},
            "customerPhone": {"dataType":"string","required":true},
            "customerEmail": {"dataType":"string"},
            "service": {"dataType":"string"},
            "description": {"dataType":"string","required":true},
            "documentUrl": {"dataType":"string"},
            "preferredDate": {"dataType":"string"},
            "tasker": {"dataType":"string"},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "_36_Enums.InfoCategory": {
        "dataType": "refAlias",
        "type": {"dataType":"union","subSchemas":[{"dataType":"enum","enums":["JOB"]},{"dataType":"enum","enums":["SCHOLARSHIP"]},{"dataType":"enum","enums":["COMPETITION"]},{"dataType":"enum","enums":["COMMUNITY"]},{"dataType":"enum","enums":["ADVISORY"]}],"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "InfoCategory": {
        "dataType": "refAlias",
        "type": {"ref":"_36_Enums.InfoCategory","validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "CreateInfoPostRequest": {
        "dataType": "refObject",
        "properties": {
            "title": {"dataType":"string","required":true},
            "description": {"dataType":"string","required":true},
            "category": {"ref":"InfoCategory","required":true},
            "deadline": {"dataType":"string"},
            "location": {"dataType":"string"},
            "applyLink": {"dataType":"string"},
            "contactInfo": {"dataType":"string"},
            "isActive": {"dataType":"boolean"},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "UpdateInfoPostRequest": {
        "dataType": "refObject",
        "properties": {
            "title": {"dataType":"string"},
            "description": {"dataType":"string"},
            "category": {"ref":"InfoCategory"},
            "deadline": {"dataType":"string"},
            "location": {"dataType":"string"},
            "applyLink": {"dataType":"string"},
            "contactInfo": {"dataType":"string"},
            "isActive": {"dataType":"boolean"},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "CreateEGovRequest": {
        "dataType": "refObject",
        "properties": {
            "customerName": {"dataType":"string","required":true},
            "customerPhone": {"dataType":"string","required":true},
            "customerEmail": {"dataType":"string"},
            "service": {"dataType":"string"},
            "description": {"dataType":"string","required":true},
            "documentUrl": {"dataType":"string"},
            "preferredDate": {"dataType":"string"},
            "tasker": {"dataType":"string"},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "UpdateEGovRequest": {
        "dataType": "refObject",
        "properties": {
            "customerName": {"dataType":"string","required":true},
            "customerPhone": {"dataType":"string","required":true},
            "customerEmail": {"dataType":"string"},
            "service": {"dataType":"string"},
            "description": {"dataType":"string","required":true},
            "documentUrl": {"dataType":"string"},
            "preferredDate": {"dataType":"string"},
            "tasker": {"dataType":"string"},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "_36_Enums.AdminRole": {
        "dataType": "refAlias",
        "type": {"dataType":"union","subSchemas":[{"dataType":"enum","enums":["SUPER_ADMIN"]},{"dataType":"enum","enums":["ADMIN"]}],"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "LoginRequest": {
        "dataType": "refObject",
        "properties": {
            "email": {"dataType":"string","required":true},
            "password": {"dataType":"string","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "UpdateProfileRequest": {
        "dataType": "refObject",
        "properties": {
            "fullName": {"dataType":"string"},
            "email": {"dataType":"string"},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ChangePasswordRequest": {
        "dataType": "refObject",
        "properties": {
            "currentPassword": {"dataType":"string","required":true},
            "newPassword": {"dataType":"string","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "CreateApplicationDocRequest": {
        "dataType": "refObject",
        "properties": {
            "customerName": {"dataType":"string","required":true},
            "customerPhone": {"dataType":"string","required":true},
            "customerEmail": {"dataType":"string"},
            "service": {"dataType":"string"},
            "description": {"dataType":"string","required":true},
            "documentUrl": {"dataType":"string"},
            "preferredDate": {"dataType":"string"},
            "tasker": {"dataType":"string"},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "UpdateApplicationDocRequest": {
        "dataType": "refObject",
        "properties": {
            "customerName": {"dataType":"string","required":true},
            "customerPhone": {"dataType":"string","required":true},
            "customerEmail": {"dataType":"string"},
            "service": {"dataType":"string"},
            "description": {"dataType":"string","required":true},
            "documentUrl": {"dataType":"string"},
            "preferredDate": {"dataType":"string"},
            "tasker": {"dataType":"string"},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "CreateAdminBody": {
        "dataType": "refObject",
        "properties": {
            "fullName": {"dataType":"string","required":true},
            "email": {"dataType":"string","required":true},
            "password": {"dataType":"string","required":true},
            "role": {"dataType":"union","subSchemas":[{"dataType":"enum","enums":["ADMIN"]},{"dataType":"enum","enums":["SUPER_ADMIN"]}]},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "UpdateAdminBody": {
        "dataType": "refObject",
        "properties": {
            "fullName": {"dataType":"string"},
            "email": {"dataType":"string"},
            "password": {"dataType":"string"},
            "role": {"dataType":"union","subSchemas":[{"dataType":"enum","enums":["ADMIN"]},{"dataType":"enum","enums":["SUPER_ADMIN"]}]},
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


    
        const argsWebDigitalController_create: Record<string, TsoaRoute.ParameterSchema> = {
                body: {"in":"body","name":"body","required":true,"ref":"CreateWebDigitalRequest"},
        };
        app.post('/web-digital',
            ...(fetchMiddlewares<RequestHandler>(WebDigitalController)),
            ...(fetchMiddlewares<RequestHandler>(WebDigitalController.prototype.create)),

            async function WebDigitalController_create(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsWebDigitalController_create, request, response });

                const controller = new WebDigitalController();

              await templateService.apiHandler({
                methodName: 'create',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 201,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsWebDigitalController_getAll: Record<string, TsoaRoute.ParameterSchema> = {
        };
        app.get('/web-digital',
            authenticateMiddleware([{"jwt":["SUPER_ADMIN","ADMIN"]}]),
            ...(fetchMiddlewares<RequestHandler>(WebDigitalController)),
            ...(fetchMiddlewares<RequestHandler>(WebDigitalController.prototype.getAll)),

            async function WebDigitalController_getAll(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsWebDigitalController_getAll, request, response });

                const controller = new WebDigitalController();

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
        const argsWebDigitalController_getById: Record<string, TsoaRoute.ParameterSchema> = {
                id: {"in":"path","name":"id","required":true,"dataType":"double"},
        };
        app.get('/web-digital/:id',
            ...(fetchMiddlewares<RequestHandler>(WebDigitalController)),
            ...(fetchMiddlewares<RequestHandler>(WebDigitalController.prototype.getById)),

            async function WebDigitalController_getById(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsWebDigitalController_getById, request, response });

                const controller = new WebDigitalController();

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
        const argsWebDigitalController_update: Record<string, TsoaRoute.ParameterSchema> = {
                id: {"in":"path","name":"id","required":true,"dataType":"double"},
                body: {"in":"body","name":"body","required":true,"ref":"UpdateWebDigitalRequest"},
        };
        app.put('/web-digital/:id',
            authenticateMiddleware([{"jwt":["SUPER_ADMIN","ADMIN"]}]),
            ...(fetchMiddlewares<RequestHandler>(WebDigitalController)),
            ...(fetchMiddlewares<RequestHandler>(WebDigitalController.prototype.update)),

            async function WebDigitalController_update(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsWebDigitalController_update, request, response });

                const controller = new WebDigitalController();

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
        const argsWebDigitalController_updateStatus: Record<string, TsoaRoute.ParameterSchema> = {
                id: {"in":"path","name":"id","required":true,"dataType":"double"},
                body: {"in":"body","name":"body","required":true,"dataType":"nestedObjectLiteral","nestedProperties":{"status":{"ref":"RequestStatus","required":true}}},
        };
        app.patch('/web-digital/:id/status',
            authenticateMiddleware([{"jwt":["SUPER_ADMIN","ADMIN"]}]),
            ...(fetchMiddlewares<RequestHandler>(WebDigitalController)),
            ...(fetchMiddlewares<RequestHandler>(WebDigitalController.prototype.updateStatus)),

            async function WebDigitalController_updateStatus(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsWebDigitalController_updateStatus, request, response });

                const controller = new WebDigitalController();

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
        const argsWebDigitalController_delete: Record<string, TsoaRoute.ParameterSchema> = {
                id: {"in":"path","name":"id","required":true,"dataType":"double"},
        };
        app.delete('/web-digital/:id',
            authenticateMiddleware([{"jwt":["SUPER_ADMIN","ADMIN"]}]),
            ...(fetchMiddlewares<RequestHandler>(WebDigitalController)),
            ...(fetchMiddlewares<RequestHandler>(WebDigitalController.prototype.delete)),

            async function WebDigitalController_delete(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsWebDigitalController_delete, request, response });

                const controller = new WebDigitalController();

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
        const argsTrainingController_apply: Record<string, TsoaRoute.ParameterSchema> = {
                body: {"in":"body","name":"body","required":true,"ref":"CreateTrainingRequest"},
        };
        app.post('/training',
            ...(fetchMiddlewares<RequestHandler>(TrainingController)),
            ...(fetchMiddlewares<RequestHandler>(TrainingController.prototype.apply)),

            async function TrainingController_apply(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsTrainingController_apply, request, response });

                const controller = new TrainingController();

              await templateService.apiHandler({
                methodName: 'apply',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 201,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsTrainingController_getAll: Record<string, TsoaRoute.ParameterSchema> = {
        };
        app.get('/training',
            authenticateMiddleware([{"jwt":["SUPER_ADMIN","ADMIN"]}]),
            ...(fetchMiddlewares<RequestHandler>(TrainingController)),
            ...(fetchMiddlewares<RequestHandler>(TrainingController.prototype.getAll)),

            async function TrainingController_getAll(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsTrainingController_getAll, request, response });

                const controller = new TrainingController();

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
        const argsTrainingController_getOne: Record<string, TsoaRoute.ParameterSchema> = {
                id: {"in":"path","name":"id","required":true,"dataType":"double"},
        };
        app.get('/training/:id',
            ...(fetchMiddlewares<RequestHandler>(TrainingController)),
            ...(fetchMiddlewares<RequestHandler>(TrainingController.prototype.getOne)),

            async function TrainingController_getOne(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsTrainingController_getOne, request, response });

                const controller = new TrainingController();

              await templateService.apiHandler({
                methodName: 'getOne',
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
        const argsTrainingController_update: Record<string, TsoaRoute.ParameterSchema> = {
                id: {"in":"path","name":"id","required":true,"dataType":"double"},
                body: {"in":"body","name":"body","required":true,"ref":"UpdateTrainingRequest"},
        };
        app.put('/training/:id',
            ...(fetchMiddlewares<RequestHandler>(TrainingController)),
            ...(fetchMiddlewares<RequestHandler>(TrainingController.prototype.update)),

            async function TrainingController_update(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsTrainingController_update, request, response });

                const controller = new TrainingController();

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
        const argsTrainingController_updateStatus: Record<string, TsoaRoute.ParameterSchema> = {
                id: {"in":"path","name":"id","required":true,"dataType":"double"},
                body: {"in":"body","name":"body","required":true,"ref":"UpdateStatusBody"},
        };
        app.put('/training/:id/status',
            authenticateMiddleware([{"jwt":["SUPER_ADMIN","ADMIN"]}]),
            ...(fetchMiddlewares<RequestHandler>(TrainingController)),
            ...(fetchMiddlewares<RequestHandler>(TrainingController.prototype.updateStatus)),

            async function TrainingController_updateStatus(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsTrainingController_updateStatus, request, response });

                const controller = new TrainingController();

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
        const argsTrainingController_delete: Record<string, TsoaRoute.ParameterSchema> = {
                id: {"in":"path","name":"id","required":true,"dataType":"double"},
        };
        app.delete('/training/:id',
            authenticateMiddleware([{"jwt":["SUPER_ADMIN","ADMIN"]}]),
            ...(fetchMiddlewares<RequestHandler>(TrainingController)),
            ...(fetchMiddlewares<RequestHandler>(TrainingController.prototype.delete)),

            async function TrainingController_delete(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsTrainingController_delete, request, response });

                const controller = new TrainingController();

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
        const argsTrackingController_getByTrackingCode: Record<string, TsoaRoute.ParameterSchema> = {
                trackingCode: {"in":"path","name":"trackingCode","required":true,"dataType":"string"},
        };
        app.get('/track/:trackingCode',
            ...(fetchMiddlewares<RequestHandler>(TrackingController)),
            ...(fetchMiddlewares<RequestHandler>(TrackingController.prototype.getByTrackingCode)),

            async function TrackingController_getByTrackingCode(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsTrackingController_getByTrackingCode, request, response });

                const controller = new TrackingController();

              await templateService.apiHandler({
                methodName: 'getByTrackingCode',
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
        const argsTrackingController_updateByTrackingCode: Record<string, TsoaRoute.ParameterSchema> = {
                trackingCode: {"in":"path","name":"trackingCode","required":true,"dataType":"string"},
                body: {"in":"body","name":"body","required":true,"ref":"TrackingUpdateRequest"},
        };
        app.patch('/track/:trackingCode',
            ...(fetchMiddlewares<RequestHandler>(TrackingController)),
            ...(fetchMiddlewares<RequestHandler>(TrackingController.prototype.updateByTrackingCode)),

            async function TrackingController_updateByTrackingCode(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsTrackingController_updateByTrackingCode, request, response });

                const controller = new TrackingController();

              await templateService.apiHandler({
                methodName: 'updateByTrackingCode',
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
        };
        app.get('/taskers',
            authenticateMiddleware([{"jwt":["SUPER_ADMIN","ADMIN"]}]),
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
        const argsTaskerController_getOne: Record<string, TsoaRoute.ParameterSchema> = {
                id: {"in":"path","name":"id","required":true,"dataType":"double"},
        };
        app.get('/taskers/:id',
            authenticateMiddleware([{"jwt":["SUPER_ADMIN","ADMIN"]}]),
            ...(fetchMiddlewares<RequestHandler>(TaskerController)),
            ...(fetchMiddlewares<RequestHandler>(TaskerController.prototype.getOne)),

            async function TaskerController_getOne(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsTaskerController_getOne, request, response });

                const controller = new TaskerController();

              await templateService.apiHandler({
                methodName: 'getOne',
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
                body: {"in":"body","name":"body","required":true,"ref":"CreateTaskerRequest"},
        };
        app.post('/taskers',
            authenticateMiddleware([{"jwt":["SUPER_ADMIN","ADMIN"]}]),
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
                successStatus: 201,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsTaskerController_update: Record<string, TsoaRoute.ParameterSchema> = {
                id: {"in":"path","name":"id","required":true,"dataType":"double"},
                body: {"in":"body","name":"body","required":true,"ref":"UpdateTaskerRequest"},
        };
        app.put('/taskers/:id',
            authenticateMiddleware([{"jwt":["SUPER_ADMIN","ADMIN"]}]),
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
        };
        app.delete('/taskers/:id',
            authenticateMiddleware([{"jwt":["SUPER_ADMIN","ADMIN"]}]),
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
        const argsTaskerController_toggleActive: Record<string, TsoaRoute.ParameterSchema> = {
                id: {"in":"path","name":"id","required":true,"dataType":"double"},
        };
        app.put('/taskers/:id/toggle-active',
            authenticateMiddleware([{"jwt":["SUPER_ADMIN","ADMIN"]}]),
            ...(fetchMiddlewares<RequestHandler>(TaskerController)),
            ...(fetchMiddlewares<RequestHandler>(TaskerController.prototype.toggleActive)),

            async function TaskerController_toggleActive(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsTaskerController_toggleActive, request, response });

                const controller = new TaskerController();

              await templateService.apiHandler({
                methodName: 'toggleActive',
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
        const argsReportController_generate: Record<string, TsoaRoute.ParameterSchema> = {
        };
        app.post('/reports/generate',
            authenticateMiddleware([{"jwt":["SUPER_ADMIN"]}]),
            ...(fetchMiddlewares<RequestHandler>(ReportController)),
            ...(fetchMiddlewares<RequestHandler>(ReportController.prototype.generate)),

            async function ReportController_generate(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsReportController_generate, request, response });

                const controller = new ReportController();

              await templateService.apiHandler({
                methodName: 'generate',
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
        const argsReportController_getAll: Record<string, TsoaRoute.ParameterSchema> = {
        };
        app.get('/reports',
            authenticateMiddleware([{"jwt":["SUPER_ADMIN"]}]),
            ...(fetchMiddlewares<RequestHandler>(ReportController)),
            ...(fetchMiddlewares<RequestHandler>(ReportController.prototype.getAll)),

            async function ReportController_getAll(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsReportController_getAll, request, response });

                const controller = new ReportController();

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
        const argsReportController_getById: Record<string, TsoaRoute.ParameterSchema> = {
                id: {"in":"path","name":"id","required":true,"dataType":"double"},
        };
        app.get('/reports/:id',
            authenticateMiddleware([{"jwt":["SUPER_ADMIN"]}]),
            ...(fetchMiddlewares<RequestHandler>(ReportController)),
            ...(fetchMiddlewares<RequestHandler>(ReportController.prototype.getById)),

            async function ReportController_getById(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsReportController_getById, request, response });

                const controller = new ReportController();

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
        const argsReportController_update: Record<string, TsoaRoute.ParameterSchema> = {
                id: {"in":"path","name":"id","required":true,"dataType":"double"},
                body: {"in":"body","name":"body","required":true,"ref":"UpdateReportBody"},
        };
        app.put('/reports/:id',
            authenticateMiddleware([{"jwt":["SUPER_ADMIN"]}]),
            ...(fetchMiddlewares<RequestHandler>(ReportController)),
            ...(fetchMiddlewares<RequestHandler>(ReportController.prototype.update)),

            async function ReportController_update(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsReportController_update, request, response });

                const controller = new ReportController();

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
        const argsReportController_delete: Record<string, TsoaRoute.ParameterSchema> = {
                id: {"in":"path","name":"id","required":true,"dataType":"double"},
        };
        app.delete('/reports/:id',
            authenticateMiddleware([{"jwt":["SUPER_ADMIN"]}]),
            ...(fetchMiddlewares<RequestHandler>(ReportController)),
            ...(fetchMiddlewares<RequestHandler>(ReportController.prototype.delete)),

            async function ReportController_delete(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsReportController_delete, request, response });

                const controller = new ReportController();

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
                body: {"in":"body","name":"body","required":true,"ref":"CreateProductRequest"},
        };
        app.post('/products',
            authenticateMiddleware([{"jwt":["SUPER_ADMIN"]}]),
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
                successStatus: 201,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsProductController_getAll: Record<string, TsoaRoute.ParameterSchema> = {
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
                body: {"in":"body","name":"body","required":true,"ref":"CreateProductRequest"},
        };
        app.put('/products/:id',
            authenticateMiddleware([{"jwt":["SUPER_ADMIN","ADMIN"]}]),
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
        const argsProductController_toggleStock: Record<string, TsoaRoute.ParameterSchema> = {
                id: {"in":"path","name":"id","required":true,"dataType":"double"},
        };
        app.put('/products/:id/toggle-stock',
            authenticateMiddleware([{"jwt":["SUPER_ADMIN","ADMIN"]}]),
            ...(fetchMiddlewares<RequestHandler>(ProductController)),
            ...(fetchMiddlewares<RequestHandler>(ProductController.prototype.toggleStock)),

            async function ProductController_toggleStock(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsProductController_toggleStock, request, response });

                const controller = new ProductController();

              await templateService.apiHandler({
                methodName: 'toggleStock',
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
        };
        app.delete('/products/:id',
            authenticateMiddleware([{"jwt":["SUPER_ADMIN","ADMIN"]}]),
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
                body: {"in":"body","name":"body","required":true,"ref":"CreateOrderRequest"},
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
                successStatus: 201,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsOrderController_getAll: Record<string, TsoaRoute.ParameterSchema> = {
                status: {"in":"query","name":"status","ref":"OrderStatus"},
        };
        app.get('/orders',
            authenticateMiddleware([{"jwt":["SUPER_ADMIN","ADMIN"]}]),
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
        };
        app.get('/orders/:id',
            authenticateMiddleware([{"jwt":["SUPER_ADMIN","ADMIN"]}]),
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
        const argsOrderController_track: Record<string, TsoaRoute.ParameterSchema> = {
                trackingCode: {"in":"path","name":"trackingCode","required":true,"dataType":"string"},
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
        const argsOrderController_update: Record<string, TsoaRoute.ParameterSchema> = {
                id: {"in":"path","name":"id","required":true,"dataType":"double"},
                body: {"in":"body","name":"body","required":true,"ref":"UpdateOrderRequest"},
        };
        app.put('/orders/:id',
            ...(fetchMiddlewares<RequestHandler>(OrderController)),
            ...(fetchMiddlewares<RequestHandler>(OrderController.prototype.update)),

            async function OrderController_update(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsOrderController_update, request, response });

                const controller = new OrderController();

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
        const argsOrderController_updateStatus: Record<string, TsoaRoute.ParameterSchema> = {
                id: {"in":"path","name":"id","required":true,"dataType":"double"},
                body: {"in":"body","name":"body","required":true,"ref":"UpdateOrderStatusBody"},
        };
        app.patch('/orders/:id/status',
            authenticateMiddleware([{"jwt":["SUPER_ADMIN","ADMIN"]}]),
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
        };
        app.delete('/orders/:id',
            authenticateMiddleware([{"jwt":["SUPER_ADMIN","ADMIN"]}]),
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
        const argsCreativeMediaController_create: Record<string, TsoaRoute.ParameterSchema> = {
                body: {"in":"body","name":"body","required":true,"ref":"CreateCreativeMediaRequest"},
        };
        app.post('/creative-media',
            ...(fetchMiddlewares<RequestHandler>(CreativeMediaController)),
            ...(fetchMiddlewares<RequestHandler>(CreativeMediaController.prototype.create)),

            async function CreativeMediaController_create(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsCreativeMediaController_create, request, response });

                const controller = new CreativeMediaController();

              await templateService.apiHandler({
                methodName: 'create',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 201,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsCreativeMediaController_getAll: Record<string, TsoaRoute.ParameterSchema> = {
        };
        app.get('/creative-media',
            authenticateMiddleware([{"jwt":["SUPER_ADMIN","ADMIN"]}]),
            ...(fetchMiddlewares<RequestHandler>(CreativeMediaController)),
            ...(fetchMiddlewares<RequestHandler>(CreativeMediaController.prototype.getAll)),

            async function CreativeMediaController_getAll(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsCreativeMediaController_getAll, request, response });

                const controller = new CreativeMediaController();

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
        const argsCreativeMediaController_getById: Record<string, TsoaRoute.ParameterSchema> = {
                id: {"in":"path","name":"id","required":true,"dataType":"double"},
        };
        app.get('/creative-media/:id',
            ...(fetchMiddlewares<RequestHandler>(CreativeMediaController)),
            ...(fetchMiddlewares<RequestHandler>(CreativeMediaController.prototype.getById)),

            async function CreativeMediaController_getById(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsCreativeMediaController_getById, request, response });

                const controller = new CreativeMediaController();

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
        const argsCreativeMediaController_update: Record<string, TsoaRoute.ParameterSchema> = {
                id: {"in":"path","name":"id","required":true,"dataType":"double"},
                body: {"in":"body","name":"body","required":true,"dataType":"any"},
        };
        app.put('/creative-media/:id',
            authenticateMiddleware([{"jwt":["SUPER_ADMIN","ADMIN"]}]),
            ...(fetchMiddlewares<RequestHandler>(CreativeMediaController)),
            ...(fetchMiddlewares<RequestHandler>(CreativeMediaController.prototype.update)),

            async function CreativeMediaController_update(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsCreativeMediaController_update, request, response });

                const controller = new CreativeMediaController();

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
        const argsCreativeMediaController_updateStatus: Record<string, TsoaRoute.ParameterSchema> = {
                id: {"in":"path","name":"id","required":true,"dataType":"double"},
                body: {"in":"body","name":"body","required":true,"dataType":"nestedObjectLiteral","nestedProperties":{"status":{"dataType":"string","required":true}}},
        };
        app.patch('/creative-media/:id/status',
            authenticateMiddleware([{"jwt":["SUPER_ADMIN","ADMIN"]}]),
            ...(fetchMiddlewares<RequestHandler>(CreativeMediaController)),
            ...(fetchMiddlewares<RequestHandler>(CreativeMediaController.prototype.updateStatus)),

            async function CreativeMediaController_updateStatus(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsCreativeMediaController_updateStatus, request, response });

                const controller = new CreativeMediaController();

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
        const argsCreativeMediaController_delete: Record<string, TsoaRoute.ParameterSchema> = {
                id: {"in":"path","name":"id","required":true,"dataType":"double"},
        };
        app.delete('/creative-media/:id',
            authenticateMiddleware([{"jwt":["SUPER_ADMIN","ADMIN"]}]),
            ...(fetchMiddlewares<RequestHandler>(CreativeMediaController)),
            ...(fetchMiddlewares<RequestHandler>(CreativeMediaController.prototype.delete)),

            async function CreativeMediaController_delete(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsCreativeMediaController_delete, request, response });

                const controller = new CreativeMediaController();

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
        const argsLegalOfficialController_create: Record<string, TsoaRoute.ParameterSchema> = {
                body: {"in":"body","name":"body","required":true,"ref":"CreateLegalOfficialRequest"},
        };
        app.post('/legal',
            ...(fetchMiddlewares<RequestHandler>(LegalOfficialController)),
            ...(fetchMiddlewares<RequestHandler>(LegalOfficialController.prototype.create)),

            async function LegalOfficialController_create(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsLegalOfficialController_create, request, response });

                const controller = new LegalOfficialController();

              await templateService.apiHandler({
                methodName: 'create',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 201,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsLegalOfficialController_getAll: Record<string, TsoaRoute.ParameterSchema> = {
        };
        app.get('/legal',
            authenticateMiddleware([{"jwt":["SUPER_ADMIN","ADMIN"]}]),
            ...(fetchMiddlewares<RequestHandler>(LegalOfficialController)),
            ...(fetchMiddlewares<RequestHandler>(LegalOfficialController.prototype.getAll)),

            async function LegalOfficialController_getAll(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsLegalOfficialController_getAll, request, response });

                const controller = new LegalOfficialController();

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
        const argsLegalOfficialController_getById: Record<string, TsoaRoute.ParameterSchema> = {
                id: {"in":"path","name":"id","required":true,"dataType":"double"},
        };
        app.get('/legal/:id',
            authenticateMiddleware([{"jwt":["SUPER_ADMIN","ADMIN"]}]),
            ...(fetchMiddlewares<RequestHandler>(LegalOfficialController)),
            ...(fetchMiddlewares<RequestHandler>(LegalOfficialController.prototype.getById)),

            async function LegalOfficialController_getById(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsLegalOfficialController_getById, request, response });

                const controller = new LegalOfficialController();

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
        const argsLegalOfficialController_update: Record<string, TsoaRoute.ParameterSchema> = {
                id: {"in":"path","name":"id","required":true,"dataType":"double"},
                body: {"in":"body","name":"body","required":true,"ref":"UpdateLegalOfficialRequest"},
        };
        app.put('/legal/:id',
            authenticateMiddleware([{"jwt":["SUPER_ADMIN","ADMIN"]}]),
            ...(fetchMiddlewares<RequestHandler>(LegalOfficialController)),
            ...(fetchMiddlewares<RequestHandler>(LegalOfficialController.prototype.update)),

            async function LegalOfficialController_update(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsLegalOfficialController_update, request, response });

                const controller = new LegalOfficialController();

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
        const argsLegalOfficialController_updateStatus: Record<string, TsoaRoute.ParameterSchema> = {
                id: {"in":"path","name":"id","required":true,"dataType":"double"},
                body: {"in":"body","name":"body","required":true,"dataType":"nestedObjectLiteral","nestedProperties":{"status":{"dataType":"string","required":true}}},
        };
        app.patch('/legal/:id/status',
            authenticateMiddleware([{"jwt":["SUPER_ADMIN","ADMIN"]}]),
            ...(fetchMiddlewares<RequestHandler>(LegalOfficialController)),
            ...(fetchMiddlewares<RequestHandler>(LegalOfficialController.prototype.updateStatus)),

            async function LegalOfficialController_updateStatus(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsLegalOfficialController_updateStatus, request, response });

                const controller = new LegalOfficialController();

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
        const argsLegalOfficialController_delete: Record<string, TsoaRoute.ParameterSchema> = {
                id: {"in":"path","name":"id","required":true,"dataType":"double"},
        };
        app.delete('/legal/:id',
            authenticateMiddleware([{"jwt":["SUPER_ADMIN","ADMIN"]}]),
            ...(fetchMiddlewares<RequestHandler>(LegalOfficialController)),
            ...(fetchMiddlewares<RequestHandler>(LegalOfficialController.prototype.delete)),

            async function LegalOfficialController_delete(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsLegalOfficialController_delete, request, response });

                const controller = new LegalOfficialController();

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
                body: {"in":"body","name":"body","required":true,"ref":"CreateInfoPostRequest"},
        };
        app.post('/info-posts',
            authenticateMiddleware([{"jwt":["SUPER_ADMIN","ADMIN"]}]),
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
                successStatus: 201,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsInfoPostController_getAll: Record<string, TsoaRoute.ParameterSchema> = {
                category: {"in":"query","name":"category","ref":"InfoCategory"},
                isActive: {"in":"query","name":"isActive","dataType":"boolean"},
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
                body: {"in":"body","name":"body","required":true,"ref":"UpdateInfoPostRequest"},
        };
        app.put('/info-posts/:id',
            authenticateMiddleware([{"jwt":["SUPER_ADMIN","ADMIN"]}]),
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
        const argsInfoPostController_toggleActive: Record<string, TsoaRoute.ParameterSchema> = {
                id: {"in":"path","name":"id","required":true,"dataType":"double"},
        };
        app.put('/info-posts/:id/toggle-active',
            authenticateMiddleware([{"jwt":["SUPER_ADMIN","ADMIN"]}]),
            ...(fetchMiddlewares<RequestHandler>(InfoPostController)),
            ...(fetchMiddlewares<RequestHandler>(InfoPostController.prototype.toggleActive)),

            async function InfoPostController_toggleActive(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsInfoPostController_toggleActive, request, response });

                const controller = new InfoPostController();

              await templateService.apiHandler({
                methodName: 'toggleActive',
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
        };
        app.delete('/info-posts/:id',
            authenticateMiddleware([{"jwt":["SUPER_ADMIN","ADMIN"]}]),
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
        const argsEGovController_create: Record<string, TsoaRoute.ParameterSchema> = {
                body: {"in":"body","name":"body","required":true,"ref":"CreateEGovRequest"},
        };
        app.post('/egov',
            ...(fetchMiddlewares<RequestHandler>(EGovController)),
            ...(fetchMiddlewares<RequestHandler>(EGovController.prototype.create)),

            async function EGovController_create(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsEGovController_create, request, response });

                const controller = new EGovController();

              await templateService.apiHandler({
                methodName: 'create',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 201,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsEGovController_getAll: Record<string, TsoaRoute.ParameterSchema> = {
        };
        app.get('/egov',
            authenticateMiddleware([{"jwt":["SUPER_ADMIN","ADMIN"]}]),
            ...(fetchMiddlewares<RequestHandler>(EGovController)),
            ...(fetchMiddlewares<RequestHandler>(EGovController.prototype.getAll)),

            async function EGovController_getAll(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsEGovController_getAll, request, response });

                const controller = new EGovController();

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
        const argsEGovController_getById: Record<string, TsoaRoute.ParameterSchema> = {
                id: {"in":"path","name":"id","required":true,"dataType":"double"},
        };
        app.get('/egov/:id',
            authenticateMiddleware([{"jwt":["SUPER_ADMIN","ADMIN"]}]),
            ...(fetchMiddlewares<RequestHandler>(EGovController)),
            ...(fetchMiddlewares<RequestHandler>(EGovController.prototype.getById)),

            async function EGovController_getById(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsEGovController_getById, request, response });

                const controller = new EGovController();

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
        const argsEGovController_update: Record<string, TsoaRoute.ParameterSchema> = {
                id: {"in":"path","name":"id","required":true,"dataType":"double"},
                body: {"in":"body","name":"body","required":true,"ref":"UpdateEGovRequest"},
        };
        app.put('/egov/:id',
            authenticateMiddleware([{"jwt":["SUPER_ADMIN","ADMIN"]}]),
            ...(fetchMiddlewares<RequestHandler>(EGovController)),
            ...(fetchMiddlewares<RequestHandler>(EGovController.prototype.update)),

            async function EGovController_update(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsEGovController_update, request, response });

                const controller = new EGovController();

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
        const argsEGovController_updateStatus: Record<string, TsoaRoute.ParameterSchema> = {
                id: {"in":"path","name":"id","required":true,"dataType":"double"},
                body: {"in":"body","name":"body","required":true,"dataType":"nestedObjectLiteral","nestedProperties":{"status":{"dataType":"string","required":true}}},
        };
        app.patch('/egov/:id/status',
            authenticateMiddleware([{"jwt":["SUPER_ADMIN","ADMIN"]}]),
            ...(fetchMiddlewares<RequestHandler>(EGovController)),
            ...(fetchMiddlewares<RequestHandler>(EGovController.prototype.updateStatus)),

            async function EGovController_updateStatus(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsEGovController_updateStatus, request, response });

                const controller = new EGovController();

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
        const argsEGovController_delete: Record<string, TsoaRoute.ParameterSchema> = {
                id: {"in":"path","name":"id","required":true,"dataType":"double"},
        };
        app.delete('/egov/:id',
            authenticateMiddleware([{"jwt":["SUPER_ADMIN","ADMIN"]}]),
            ...(fetchMiddlewares<RequestHandler>(EGovController)),
            ...(fetchMiddlewares<RequestHandler>(EGovController.prototype.delete)),

            async function EGovController_delete(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsEGovController_delete, request, response });

                const controller = new EGovController();

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
        const argsAuthController_login: Record<string, TsoaRoute.ParameterSchema> = {
                body: {"in":"body","name":"body","required":true,"ref":"LoginRequest"},
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
        const argsAuthController_getProfile: Record<string, TsoaRoute.ParameterSchema> = {
                request: {"in":"request","name":"request","required":true,"dataType":"object"},
        };
        app.get('/auth/profile',
            authenticateMiddleware([{"jwt":[]}]),
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
                body: {"in":"body","name":"body","required":true,"ref":"UpdateProfileRequest"},
        };
        app.put('/auth/profile',
            authenticateMiddleware([{"jwt":[]}]),
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
        const argsAuthController_changePassword: Record<string, TsoaRoute.ParameterSchema> = {
                request: {"in":"request","name":"request","required":true,"dataType":"object"},
                body: {"in":"body","name":"body","required":true,"ref":"ChangePasswordRequest"},
        };
        app.put('/auth/change-password',
            authenticateMiddleware([{"jwt":[]}]),
            ...(fetchMiddlewares<RequestHandler>(AuthController)),
            ...(fetchMiddlewares<RequestHandler>(AuthController.prototype.changePassword)),

            async function AuthController_changePassword(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsAuthController_changePassword, request, response });

                const controller = new AuthController();

              await templateService.apiHandler({
                methodName: 'changePassword',
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
        const argsAuthController_logout: Record<string, TsoaRoute.ParameterSchema> = {
                request: {"in":"request","name":"request","required":true,"dataType":"object"},
        };
        app.post('/auth/logout',
            authenticateMiddleware([{"jwt":[]}]),
            ...(fetchMiddlewares<RequestHandler>(AuthController)),
            ...(fetchMiddlewares<RequestHandler>(AuthController.prototype.logout)),

            async function AuthController_logout(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsAuthController_logout, request, response });

                const controller = new AuthController();

              await templateService.apiHandler({
                methodName: 'logout',
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
        const argsApplicationDocController_create: Record<string, TsoaRoute.ParameterSchema> = {
                body: {"in":"body","name":"body","required":true,"ref":"CreateApplicationDocRequest"},
        };
        app.post('/application-docs',
            ...(fetchMiddlewares<RequestHandler>(ApplicationDocController)),
            ...(fetchMiddlewares<RequestHandler>(ApplicationDocController.prototype.create)),

            async function ApplicationDocController_create(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsApplicationDocController_create, request, response });

                const controller = new ApplicationDocController();

              await templateService.apiHandler({
                methodName: 'create',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 201,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsApplicationDocController_getAll: Record<string, TsoaRoute.ParameterSchema> = {
        };
        app.get('/application-docs',
            authenticateMiddleware([{"jwt":["SUPER_ADMIN","ADMIN"]}]),
            ...(fetchMiddlewares<RequestHandler>(ApplicationDocController)),
            ...(fetchMiddlewares<RequestHandler>(ApplicationDocController.prototype.getAll)),

            async function ApplicationDocController_getAll(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsApplicationDocController_getAll, request, response });

                const controller = new ApplicationDocController();

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
        const argsApplicationDocController_getById: Record<string, TsoaRoute.ParameterSchema> = {
                id: {"in":"path","name":"id","required":true,"dataType":"double"},
        };
        app.get('/application-docs/:id',
            authenticateMiddleware([{"jwt":["SUPER_ADMIN","ADMIN"]}]),
            ...(fetchMiddlewares<RequestHandler>(ApplicationDocController)),
            ...(fetchMiddlewares<RequestHandler>(ApplicationDocController.prototype.getById)),

            async function ApplicationDocController_getById(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsApplicationDocController_getById, request, response });

                const controller = new ApplicationDocController();

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
        const argsApplicationDocController_update: Record<string, TsoaRoute.ParameterSchema> = {
                id: {"in":"path","name":"id","required":true,"dataType":"double"},
                body: {"in":"body","name":"body","required":true,"ref":"UpdateApplicationDocRequest"},
        };
        app.put('/application-docs/:id',
            authenticateMiddleware([{"jwt":["SUPER_ADMIN","ADMIN"]}]),
            ...(fetchMiddlewares<RequestHandler>(ApplicationDocController)),
            ...(fetchMiddlewares<RequestHandler>(ApplicationDocController.prototype.update)),

            async function ApplicationDocController_update(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsApplicationDocController_update, request, response });

                const controller = new ApplicationDocController();

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
        const argsApplicationDocController_updateStatus: Record<string, TsoaRoute.ParameterSchema> = {
                id: {"in":"path","name":"id","required":true,"dataType":"double"},
                body: {"in":"body","name":"body","required":true,"dataType":"nestedObjectLiteral","nestedProperties":{"status":{"dataType":"string","required":true}}},
        };
        app.patch('/application-docs/:id/status',
            authenticateMiddleware([{"jwt":["SUPER_ADMIN","ADMIN"]}]),
            ...(fetchMiddlewares<RequestHandler>(ApplicationDocController)),
            ...(fetchMiddlewares<RequestHandler>(ApplicationDocController.prototype.updateStatus)),

            async function ApplicationDocController_updateStatus(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsApplicationDocController_updateStatus, request, response });

                const controller = new ApplicationDocController();

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
        const argsApplicationDocController_delete: Record<string, TsoaRoute.ParameterSchema> = {
                id: {"in":"path","name":"id","required":true,"dataType":"double"},
        };
        app.delete('/application-docs/:id',
            authenticateMiddleware([{"jwt":["SUPER_ADMIN","ADMIN"]}]),
            ...(fetchMiddlewares<RequestHandler>(ApplicationDocController)),
            ...(fetchMiddlewares<RequestHandler>(ApplicationDocController.prototype.delete)),

            async function ApplicationDocController_delete(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsApplicationDocController_delete, request, response });

                const controller = new ApplicationDocController();

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
        const argsAdminController_getAllAdmins: Record<string, TsoaRoute.ParameterSchema> = {
        };
        app.get('/admin',
            authenticateMiddleware([{"jwt":["SUPER_ADMIN"]}]),
            ...(fetchMiddlewares<RequestHandler>(AdminController)),
            ...(fetchMiddlewares<RequestHandler>(AdminController.prototype.getAllAdmins)),

            async function AdminController_getAllAdmins(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsAdminController_getAllAdmins, request, response });

                const controller = new AdminController();

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
        const argsAdminController_getAdminById: Record<string, TsoaRoute.ParameterSchema> = {
                id: {"in":"path","name":"id","required":true,"dataType":"double"},
        };
        app.get('/admin/:id',
            authenticateMiddleware([{"jwt":["SUPER_ADMIN"]}]),
            ...(fetchMiddlewares<RequestHandler>(AdminController)),
            ...(fetchMiddlewares<RequestHandler>(AdminController.prototype.getAdminById)),

            async function AdminController_getAdminById(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsAdminController_getAdminById, request, response });

                const controller = new AdminController();

              await templateService.apiHandler({
                methodName: 'getAdminById',
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
        const argsAdminController_createAdmin: Record<string, TsoaRoute.ParameterSchema> = {
                body: {"in":"body","name":"body","required":true,"ref":"CreateAdminBody"},
        };
        app.post('/admin',
            authenticateMiddleware([{"jwt":["SUPER_ADMIN"]}]),
            ...(fetchMiddlewares<RequestHandler>(AdminController)),
            ...(fetchMiddlewares<RequestHandler>(AdminController.prototype.createAdmin)),

            async function AdminController_createAdmin(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsAdminController_createAdmin, request, response });

                const controller = new AdminController();

              await templateService.apiHandler({
                methodName: 'createAdmin',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 201,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsAdminController_updateAdmin: Record<string, TsoaRoute.ParameterSchema> = {
                id: {"in":"path","name":"id","required":true,"dataType":"double"},
                body: {"in":"body","name":"body","required":true,"ref":"UpdateAdminBody"},
        };
        app.put('/admin/:id',
            authenticateMiddleware([{"jwt":["SUPER_ADMIN"]}]),
            ...(fetchMiddlewares<RequestHandler>(AdminController)),
            ...(fetchMiddlewares<RequestHandler>(AdminController.prototype.updateAdmin)),

            async function AdminController_updateAdmin(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsAdminController_updateAdmin, request, response });

                const controller = new AdminController();

              await templateService.apiHandler({
                methodName: 'updateAdmin',
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
        const argsAdminController_activate: Record<string, TsoaRoute.ParameterSchema> = {
                id: {"in":"path","name":"id","required":true,"dataType":"double"},
        };
        app.put('/admin/activate/:id',
            authenticateMiddleware([{"jwt":["SUPER_ADMIN"]}]),
            ...(fetchMiddlewares<RequestHandler>(AdminController)),
            ...(fetchMiddlewares<RequestHandler>(AdminController.prototype.activate)),

            async function AdminController_activate(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsAdminController_activate, request, response });

                const controller = new AdminController();

              await templateService.apiHandler({
                methodName: 'activate',
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
        const argsAdminController_deactivate: Record<string, TsoaRoute.ParameterSchema> = {
                id: {"in":"path","name":"id","required":true,"dataType":"double"},
        };
        app.put('/admin/deactivate/:id',
            authenticateMiddleware([{"jwt":["SUPER_ADMIN"]}]),
            ...(fetchMiddlewares<RequestHandler>(AdminController)),
            ...(fetchMiddlewares<RequestHandler>(AdminController.prototype.deactivate)),

            async function AdminController_deactivate(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsAdminController_deactivate, request, response });

                const controller = new AdminController();

              await templateService.apiHandler({
                methodName: 'deactivate',
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
        const argsAdminController_deleteAdmin: Record<string, TsoaRoute.ParameterSchema> = {
                id: {"in":"path","name":"id","required":true,"dataType":"double"},
        };
        app.delete('/admin/:id',
            authenticateMiddleware([{"jwt":["SUPER_ADMIN"]}]),
            ...(fetchMiddlewares<RequestHandler>(AdminController)),
            ...(fetchMiddlewares<RequestHandler>(AdminController.prototype.deleteAdmin)),

            async function AdminController_deleteAdmin(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsAdminController_deleteAdmin, request, response });

                const controller = new AdminController();

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
