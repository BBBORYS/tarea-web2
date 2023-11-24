import { AreaEntity } from '../../entities/arae.entity';
import { AreaRepository } from '../../repositories/area.repository';


export interface GetAreasUseCase {
  execute(): Promise<AreaEntity[]>
}


export class GetAreas implements GetAreasUseCase {
  
  constructor(
    private readonly repository: AreaRepository,
  ) {}
  
  execute(): Promise<AreaEntity[]> {
    return this.repository.getAll();
  }

}

