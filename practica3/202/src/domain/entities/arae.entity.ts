



export class AreaEntity {

    constructor(
      public id: number,
      public tipo : string,
      public area: string,
    ) {}
  
    public static fromObject( object: {[key: string]: any} ): AreaEntity {
      const { id,tipo, area } = object;
      if ( !id ) throw 'Id is required';
      if ( !tipo ) throw 'tipo is required';
      if ( !area ) throw 'descripcion is required';
  
        return new AreaEntity(id,tipo, area)
    }
  
  }
  
  
  