"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ClientService_1 = require("../Services/implementation/ClientService");
const router = (0, express_1.Router)();
const service = new ClientService_1.ClientService();
router.get("/:id", function (request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let responseSuccess = {
                data: yield service.Get(Number(request.params["id"])),
                status: 200,
            };
            return response.json(responseSuccess);
        }
        catch (e) {
            console.log("Error: " + e);
            let responseError = {
                error: ["Not Found"],
                status: 404,
            };
            return response.json(responseError);
        }
    });
});
router.get("/", function (request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let responseSuccess = {
                data: yield service.GetAll(),
                status: 200,
            };
            return response.json(responseSuccess);
        }
        catch (e) {
            console.log("Error: " + e);
            let responseError = {
                error: ["Not Found"],
                status: 404,
            };
            return response.json(responseError);
        }
    });
});
router.post("/", function (request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let responseSuccess = {
                data: service.Get(request.body),
                status: 201,
            };
            return response.json(responseSuccess);
        }
        catch (e) {
            console.log("Error: " + e);
            let responseError = {
                error: ["Bad Request"],
                status: 400,
            };
            return response.json(responseError);
        }
    });
});
exports.default = router;
