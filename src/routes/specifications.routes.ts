import { Router } from "express";

import { createSpecificationController } from "../modules/cars/useCases/createSpecification";

const specificationsRouter = Router();

specificationsRouter.post("/", (request, response) => {
  return createSpecificationController.handle(request, response);
});

/*
specificationsRouter.get("/", (request, response) => {
  return response.json(specificationsRepository.list());
});
*/

export { specificationsRouter };
