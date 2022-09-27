import express, { json } from "express";
import cors from "cors";
import agentController from "./Controllers/AgentController";
import clientController from "./Controllers/ClientController";
import clientSociodemographicController from "./Controllers/ClientSociodemographicController";
import concessionaireController from "./Controllers/ConcessionaireController";
import purchaseController from "./Controllers/PurchaseController";
import sociodemographicController from "./Controllers/SociodemographicController";
import vehicleConcessionaireController from "./Controllers/VehicleConcessionaireController";
import vehicleController from "./Controllers/VehicleController";
import { config } from "dotenv";

config();
const app = express();
const port = process.env.PORT || 3000;

app.use(json());
app.use(cors({ origin: true, credentials: true }));
app.use("/api/agent", agentController);
app.use("/api/client", clientController);
app.use("/api/client/sociodemographic", clientSociodemographicController);
app.use("/api/concessionaire", concessionaireController);
app.use("/api/purchase", purchaseController);
app.use("/api/sociodemographic", sociodemographicController);
app.use("/api/vehicle/concessionaire", vehicleConcessionaireController);
app.use("/api/vehicle", vehicleController);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
