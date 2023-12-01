export class CreateAsistenteDto {

    private constructor(
      public readonly nombre: string,
      public readonly descripcion: string,
      public readonly precioBase: number,
      public readonly aforoMaximo: number,
      public readonly duracion: number,
    ) { }
  
    static create(props: { [key: string]: any }): [string?, CreateAsistenteDto?] {
  
      const { nombre, descripcion, precioBase, aforoMaximo, duracion, } = props;
  
      if (!nombre) return ['nombre  property is required', undefined];
      if (!descripcion) return ['descripcion  property is required', undefined];
      if (!precioBase) return ['precioBase  property is required', undefined];
      if (!aforoMaximo) return ['aforoMaximo  property is required', undefined];
      if (!duracion) return ['duracion  property is required', undefined];
  
  
  
      return [undefined, new CreateAsistenteDto(nombre, descripcion, precioBase, aforoMaximo, duracion)];
    }
  
  
  }