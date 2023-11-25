import { Router } from 'express';
import { AreasController } from './controller';
import { AreaDatasourceImpl } from '../../infrastructure/datasource/area.datasource.impl';
import { AreaRepositoryImpl } from '../../infrastructure/repositories/area.repository.impl';


export class AreaRoutes {


  static get routes(): Router {

    const router = Router();

    const datasource = new AreaDatasourceImpl();
    const areaRepository = new AreaRepositoryImpl( datasource );
    const areaController = new AreasController(areaRepository);

    router.get('/', areaController.getAreas );
    router.get('/:id', areaController.getAreaById );
    
    router.post('/', areaController.createArea );
    router.put('/:id', areaController.updateArea );
    router.delete('/:id', areaController.deleteArea );


    return router;
  }


}
