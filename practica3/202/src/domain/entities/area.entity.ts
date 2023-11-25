



export class AreaEntity {

    constructor(
      public id: number,
      public narea: string,
    ) {}
  
    public static fromObject( object: {[key: string]: any} ): AreaEntity {
      const { id,narea } = object;
      if ( !id ) throw 'Id is required';
      
      if ( !narea ) throw 'descripcion is required';
  
        return new AreaEntity(id,narea)
    }
  
  }
  
  
  