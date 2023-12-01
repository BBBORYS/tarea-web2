import { Request, Response } from 'express';
import { prisma } from '../../data/postgres';
import { CreateAsistenteDto, UpdateAsistenteDto } from '../../domain/dtos';


export class AsistenteController {
  //* DI
  constructor() { }
  public getAsistente = async( req: Request, res: Response ) => {
    const asistentes = await prisma.asistente.findMany();
    return res.json( asistentes );
  };
  public getAsistenteById = async( req: Request, res: Response ) => {
    const id = +req.params.id;
    if ( isNaN( id ) ) return res.status( 400 ).json( { error: 'id argument is not a number' } );

    const asistentes = await prisma.asistente.findFirst({
      where: { id }
    });
    
    ( asistentes )
      ? res.json( )
      : res.status( 404 ).json( { error: `asistente with id ${ id } not found` } );
  };
  public createAsistente = async( req: Request, res: Response ) => {
    
    const [error, createAsistenteDto] = CreateAsistenteDto.create(req.body);
    if ( error ) return res.status(400).json({ error });

    


  };
  public updateasistente = async (req: Request, res: Response) => {
    const id = +req.params.id;
    const [error, updateAsistenteDto] = UpdateAsistenteDto.create({ ...req.body, id });
    if (error) return res.status(400).json({ error });

    const asistentes = await prisma.asistente.findFirst({
      where: { id }
    });
    if (!asistentes) return res.status(404).json({ error: `asistente with id ${id} not found` });
    const updateasistente = await prisma.asistente.update({
      where: { id },
      data: updateAsistenteDto!.values
    });
    res.json(updateasistente);
  };


  public deleteasistente = async (req: Request, res: Response) => {
    const id = +req.params.id;
    const asistentes = await prisma.asistente.findFirst({
      where: { id }
    });

    if (!asistentes) return res.status(404).json({ error: `asistente with id${id} not found` });
    const deleted = await prisma.asistente.delete({
      where: { id }
    });
    (deleted)
      ? res.json(deleted)
      : res.status(400).json({ error: `asistente with id ${id} not found` });
  };
}
