import { AreaEntity } from '../../entities/area.entity';
import { AreaRepository } from '../../repositories/area.repository';


export interface DeleteAreaUseCase {
  execute( id: number ): Promise<AreaEntity>
}

export class DeleteArea implements DeleteAreaUseCase {
  
  constructor(
    private readonly repository: AreaRepository,
  ) {}
  
  execute( id: number ): Promise<AreaEntity> {
    return this.repository.deleteById(id);
  }

}

