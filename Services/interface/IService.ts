export interface IService<T> {
  Insert(entity: T): Promise<T | null>;
  Get(id: number): Promise<T | null>;
  GetAll(): Promise<T[]>;
}
