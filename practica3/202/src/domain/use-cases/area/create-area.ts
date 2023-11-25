import { CreateAreaDto } from '../../dtos';
import { AreaEntity } from '../../entities/area.entity';
import { AreaRepository } from '../../repositories/area.repository';


export interface CreateAreaUseCase {
  execute( dto: CreateAreaDto ): Promise<AreaEntity>
}

// ctrl+ shift + l
export class CreateArea implements CreateAreaUseCase {
  
  constructor(
    private readonly repository: AreaRepository,
  ) {}
  
  execute( dto: CreateAreaDto ): Promise<AreaEntity> {
    return this.repository.create(dto);
  }

}

