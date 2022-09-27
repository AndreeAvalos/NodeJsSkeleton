"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importStar(require("express"));
const cors_1 = __importDefault(require("cors"));
const AgentController_1 = __importDefault(require("./Controllers/AgentController"));
const ClientController_1 = __importDefault(require("./Controllers/ClientController"));
const ClientSociodemographicController_1 = __importDefault(require("./Controllers/ClientSociodemographicController"));
const ConcessionaireController_1 = __importDefault(require("./Controllers/ConcessionaireController"));
const PurchaseController_1 = __importDefault(require("./Controllers/PurchaseController"));
const SociodemographicController_1 = __importDefault(require("./Controllers/SociodemographicController"));
const VehicleConcessionaireController_1 = __importDefault(require("./Controllers/VehicleConcessionaireController"));
const VehicleController_1 = __importDefault(require("./Controllers/VehicleController"));
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
app.use((0, express_1.json)());
app.use((0, cors_1.default)({ origin: true, credentials: true }));
app.use("/api/agent", AgentController_1.default);
app.use("/api/client", ClientController_1.default);
app.use("/api/client/sociodemographic", ClientSociodemographicController_1.default);
app.use("/api/concessionaire", ConcessionaireController_1.default);
app.use("/api/purchase", PurchaseController_1.default);
app.use("/api/sociodemographic", SociodemographicController_1.default);
app.use("/api/vehicle/concessionaire", VehicleConcessionaireController_1.default);
app.use("/api/vehicle", VehicleController_1.default);
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
