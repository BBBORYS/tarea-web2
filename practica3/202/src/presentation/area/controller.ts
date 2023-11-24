import { Request, Response } from 'express';
import { CreateAreaDto, UpdateAreaDto } from '../../domain/dtos';
import { CreateArea, DeleteArea, GetArea, GetAreas, AreaRepository, UpdateArea } from '../../domain';


export class AreasController {

  //* DI
  constructor(
    private readonly areaRepository: AreaRepository,
  ) { }


  public getAreas = ( req: Request, res: Response ) => {

    new GetAreas( this.areaRepository )
      .execute()
      .then( areas => res.json( areas ) )
      .catch( error => res.status( 400 ).json( { error } ) );

  };

  public getAreaById = ( req: Request, res: Response ) => {
    const id = +req.params.id;

    new GetArea( this.areaRepository )
      .execute( id )
      .then( area => res.json( area ) )
      .catch( error => res.status( 400 ).json( { error } ) );

  };

  public createArea = ( req: Request, res: Response ) => {
    const [ error, createAreaDto ] = CreateAreaDto.create( req.body );
    if ( error ) return res.status( 400 ).json( { error } );

    new CreateArea ( this.areaRepository )
      .execute( createAreaDto! )
      .then( area => res.json( area ) )
      .catch( error => res.status( 400 ).json( { error } ) );


  };

  public updateArea = ( req: Request, res: Response ) => {
    const id = +req.params.id;
    const [ error, updateAreaDto ] = UpdateAreaDto.create( { ...req.body, id } );
    if ( error ) return res.status( 400 ).json( { error } );

    new UpdateArea( this.areaRepository )
      .execute( updateAreaDto! )
      .then( carea => res.json( carea ) )
      .catch( error => res.status( 400 ).json( { error } ) );

  };


  public deleteArea = ( req: Request, res: Response ) => {
    const id = +req.params.id;

    new DeleteArea( this.areaRepository )
      .execute( id )
      .then( area => res.json( area ) )
      .catch( error => res.status( 400 ).json( { error } ) );

  };



} 