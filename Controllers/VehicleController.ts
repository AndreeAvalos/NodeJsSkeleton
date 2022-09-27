import { Router } from "express";
import { VehicleService } from "../Services/implementation/VehicleService";
const router = Router();
const service = new VehicleService();

router.get("/:id", async function (request, response) {
  try {
    let responseSuccess: ResponseSuccess = {
      data: await service.Get(Number(request.params["id"])),
      status: 200,
    };
    return response.json(responseSuccess);
  } catch (e) {
    console.log("Error: " + e);
    let responseError: ResponseError = {
      error: ["Not Found"],
      status: 404,
    };
    return response.json(responseError);
  }
});

router.get("/", async function (request, response) {
  try {
    let responseSuccess: ResponseSuccess = {
      data: await service.GetAll(),
      status: 200,
    };
    return response.json(responseSuccess);
  } catch (e) {
    console.log("Error: " + e);
    let responseError: ResponseError = {
      error: ["Not Found"],
      status: 404,
    };
    return response.json(responseError);
  }
});

router.post("/", async function (request, response) {
  try {
    let responseSuccess: ResponseSuccess = {
      data: service.Get(request.body),
      status: 201,
    };
    return response.json(responseSuccess);
  } catch (e) {
    console.log("Error: " + e);
    let responseError: ResponseError = {
      error: ["Bad Request"],
      status: 400,
    };
    return response.json(responseError);
  }
});

export default router;
