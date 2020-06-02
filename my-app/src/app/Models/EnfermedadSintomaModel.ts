import { Enfermedad } from 'src/app/Models/EnfermedadModel';
import { Sintoma } from 'src/app/Models/SintomaModel';

export class EnfermedadSintoma {
  public id: number;
  public iDenfermedad: string;
  public iDsintoma: string;
  public enfermedad = new Enfermedad();
  public sintoma = new Sintoma();
}
