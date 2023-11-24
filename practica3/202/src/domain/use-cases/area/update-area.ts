import { UpdateAreaDto } from '../../dtos';
import { AreaEntity } from '../../entities/area.entity';
import { AreaRepository } from '../../repositories/area.repository';


export interface UpdateAreaUseCase {
  execute( dto: UpdateAreaDto ): Promise<AreaEntity>
}


export class UpdateArea implements UpdateAreaUseCase {
  
  constructor(
    private readonly repository: AreaRepository,
  ) {}
  
  execute( dto: UpdateAreaDto ): Promise<AreaEntity> {
    return this.repository.updateById(dto);
  }

}

