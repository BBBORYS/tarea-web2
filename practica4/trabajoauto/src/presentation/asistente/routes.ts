import { Router } from 'express';
import { AsistenteController } from './controller'


export class AsistenteRoutes {


  static get routes(): Router {

    const router = Router();

    const asistenteController= new AsistenteController();

    router.get('/', asistenteController.getAsistente );
    router.get('/:id', asistenteController.getAsistenteById );
    
    router.post('/', asistenteController.createAsistente );
    router.put('/:id', asistenteController.updateasistente );
    router.delete('/:id', asistenteController.deleteasistente);


    return router;
  }


}

