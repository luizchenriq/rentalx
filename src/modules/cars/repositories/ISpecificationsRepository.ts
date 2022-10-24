import { Specification } from "../entities/Specification";

// DTO - data transfer object
interface ICreateSpecificationDTO {
  name: string;
  description: string;
}

interface ISpecificationsRepository {
  create({ name, description }: ICreateSpecificationDTO): Promise<void>;
  findByName(name: string): Promise<Specification>;
  //list(): Specification[];
}

export { ISpecificationsRepository, ICreateSpecificationDTO };
