import { CreateAreaDto, AreaDatasource, AreaEntity, AreaRepository, UpdateAreaDto } from '../../domain';


export class AreaRepositoryImpl implements AreaRepository {

  constructor(
    private readonly datasource: AreaDatasource,
  ) { }


  create( createAreaDto: CreateAreaDto ): Promise<AreaEntity> {
    return this.datasource.create( createAreaDto );
  }

  getAll(): Promise<AreaEntity[]> {
    return this.datasource.getAll();
1  }

  findById( id: number ): Promise<AreaEntity> {
    return this.datasource.findById( id );
  }

  updateById( updateAreaDto: UpdateAreaDto ): Promise<AreaEntity> {
    return this.datasource.updateById( updateAreaDto );
  }

  deleteById( id: number ): Promise<AreaEntity> {
    return this.datasource.deleteById( id );
  }

}


