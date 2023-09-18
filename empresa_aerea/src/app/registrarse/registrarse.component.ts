import { Component } from '@angular/core';


@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.css']
})
export class RegistrarseComponent{
  formData = {
    nombre: '',
    apellidos: '',
    correo: '',
    telefono: '',
    ciudad:'',
    pais:'',
  };
  mostrarError: boolean = false;

  submitted = false;
  onSubmit() {
    if (!this.formData.nombre || !this.formData.apellidos || !this.formData.correo || !this.formData.ciudad || !this.formData.pais || !this.formData.telefono){
      this.mostrarError = true;
    }else{
      this.submitted = true;
      console.log('Datos del formulario:', this.formData);
      alert("Su Registro: \n Nombre: "+this.formData.nombre+"\n Apellido: "+ this.formData.apellidos+ "\n Mail: "+this.formData.correo+"\n Telefono: "+this.formData.telefono+"\n Pais: "+this.formData.pais+"\n Ciudad: "+this.formData.ciudad+"\n\t *Ha sido exitoso*")
    } 
    }
      
}



   
