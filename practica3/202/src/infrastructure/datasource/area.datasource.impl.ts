import { prisma } from '../../data/postgres';
import { CreateAreaDto, AreaDatasource, AreaEntity, UpdateAreaDto } from '../../domain';




export class AreaDatasourceImpl implements AreaDatasource {

  async create( createAreaDto: CreateAreaDto ): Promise<AreaEntity> {
    const area = await prisma.area.create({
      data: createAreaDto!
    });

    return AreaEntity.fromObject( area );
  }

  async getAll(): Promise<AreaEntity[]> {
    const areas = await prisma.area.findMany();
    return areas.map( area => AreaEntity.fromObject(area) );
  }

  async findById( id: number ): Promise<AreaEntity> {
    const area = await prisma.area.findFirst({
      where: { id }
    });

    if ( !area ) throw `Area with id ${ id } not found`;
    return AreaEntity.fromObject(area);
  }

  async updateById( updateAreaDto: UpdateAreaDto ): Promise<AreaEntity> {
    await this.findById( updateAreaDto.id );
    
    const updatedArea = await prisma.area.update({
      where: { id: updateAreaDto.id },
      data: updateAreaDto!.values
    });

    return AreaEntity.fromObject(updatedArea);
  }

  async deleteById( id: number ): Promise<AreaEntity> {
    await this.findById( id );
    const deleted = await prisma.area.delete({
      where: { id }
    });

    return AreaEntity.fromObject( deleted );
  }

}