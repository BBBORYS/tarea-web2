import { Router } from 'express';
import { asistenteController } from './controller';

export class AsistenteRoutes {
  static get routes(): Router {
    const router = Router();
    const AsistenteController = new asistenteController();
    router.get('/', AsistenteController.getAsistente);
    router.get('/:id', AsistenteController.getAsistenteById );
    router.post('/', AsistenteController.createAsistente );
    router.put('/:id', AsistenteController.updateAsistente );
    router.delete('/:id', AsistenteController.deleteAsistente );
    return router;
  }
}
