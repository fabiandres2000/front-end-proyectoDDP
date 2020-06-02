import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { ContenidoComponent } from './contenido/contenido.component';
import { EnfermedadesComponent } from './enfermedades/enfermedades.component';
import { RouterModule, Routes } from '@angular/router';
import { MedicosComponent } from './medicos/medicos.component';
import { PacientesComponent } from './pacientes/pacientes.component';
import { HttpClientModule } from '@angular/common/http';
import { FormEnfermedadComponent } from './form-enfermedad/form-enfermedad.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormPacienteComponent } from './form-paciente/form-paciente.component';
import { SintomasComponent } from './sintomas/sintomas.component';
import { TratamientosComponent } from './tratamientos/tratamientos.component';
import { EnfermedadSintomaComponent } from './enfermedad-sintoma/enfermedad-sintoma.component';
import { FilterEnfermedadSintomaPipe } from './pipes/filter-enfermedad-sintoma.pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { FilterTratamientoPipe } from './pipes/filter-tratamiento.pipe';
import { FilterSintomaPipe } from './pipes/filter-sintoma.pipe';
import { FilterPacientePipe } from './pipes/filter-paciente.pipe';
import { FilterEnfermedadPipe } from './pipes/filter-enfermedad.pipe';
import { EnfermedadTratamientoComponent } from './enfermedad-tratamiento/enfermedad-tratamiento.component';
import { FilterEnfermedadTratamientoPipe } from './pipes/filter-enfermedad-tratamiento.pipe';
import { AdministradoresComponent } from './administradores/administradores.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'enfermedades', component: EnfermedadesComponent},
  { path: 'medicos', component: MedicosComponent},
  { path: 'pacientes', component: PacientesComponent },
  { path: 'registrarenfermedad', component: FormEnfermedadComponent },
  { path: 'registrarpaciente', component: FormPacienteComponent },
  { path: 'sintomas', component: SintomasComponent },
  { path: 'tratamientos', component: TratamientosComponent },
  { path: 'enfermedadsintoma', component: EnfermedadSintomaComponent },
  { path: 'enfermedadtratamiento', component: EnfermedadTratamientoComponent },
  { path: 'administradores', component: AdministradoresComponent },
];


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    ContenidoComponent,
    EnfermedadesComponent,
    MedicosComponent,
    PacientesComponent,
    FormEnfermedadComponent,
    FormPacienteComponent,
    SintomasComponent,
    TratamientosComponent,
    EnfermedadSintomaComponent,
    FilterEnfermedadSintomaPipe,
    FilterTratamientoPipe,
    FilterSintomaPipe,
    FilterPacientePipe,
    FilterEnfermedadPipe,
    EnfermedadTratamientoComponent,
    FilterEnfermedadTratamientoPipe,
    AdministradoresComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgxPaginationModule
  ],
  exports: [ RouterModule ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
