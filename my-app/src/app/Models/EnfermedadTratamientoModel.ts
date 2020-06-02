import { Enfermedad } from 'src/app/Models/EnfermedadModel';
import { Tratamiento } from 'src/app/Models/TratamientoModel';

export class EnfermedadTratamiento {
  public id: number;
  public iDenfermedad: string;
  public iDtratamiento: string;
  public enfermedad = new Enfermedad();
  public sintoma = new Tratamiento();
}
