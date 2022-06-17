import { Request, Response } from "express";

import { ListCategoriesUseCase } from "./listCategoriesUseCase";

class ListCategoriesController {
  constructor(private listCategoriesRepository: ListCategoriesUseCase) {}

  handle(request: Request, response: Response): Response {
    return response.json(this.listCategoriesRepository.execute());
  }
}

export { ListCategoriesController };
