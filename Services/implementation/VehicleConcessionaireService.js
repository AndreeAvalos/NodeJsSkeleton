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
exports.VehicleConcessionaireService = void 0;
const VehicleConcessionaireRepository_1 = require("../../Repositories/implementation/VehicleConcessionaireRepository");
let repository = new VehicleConcessionaireRepository_1.VehicleConcessionaireRepository();
class VehicleConcessionaireService {
    GetAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield repository.GetAll();
        });
    }
    Insert(entity) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield repository.Insert(entity);
        });
    }
    Get(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield repository.Get(id);
        });
    }
}
exports.VehicleConcessionaireService = VehicleConcessionaireService;
