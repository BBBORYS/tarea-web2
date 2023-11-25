import { AreaEntity } from '../../entities/area.entity';
import { AreaRepository } from '../../repositories/area.repository';


export interface GetAreaUseCase {
  execute( id: number ): Promise<AreaEntity>
}


export class GetArea implements GetAreaUseCase {
  
  constructor(
    private readonly repository: AreaRepository,
  ) {}
  
  execute( id: number ): Promise<AreaEntity> {
    return this.repository.findById(id);
  }

}

