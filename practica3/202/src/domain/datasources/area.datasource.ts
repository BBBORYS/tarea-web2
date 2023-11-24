import { CreateAreaDto, UpdateAreaDto } from '../dtos';
import { AreaEntity } from '../entities/area.entity';



export abstract class AreaDatasource {

  abstract create( createModeloDto: CreateAreaDto ): Promise<AreaEntity>;

  abstract getAll(): Promise<AreaEntity[]>;

  abstract findById( id: number ): Promise<AreaEntity>;
  abstract updateById( updateModeloDto: UpdateAreaDto ): Promise<AreaEntity>;
  abstract deleteById( id: number ): Promise<AreaEntity>;

}