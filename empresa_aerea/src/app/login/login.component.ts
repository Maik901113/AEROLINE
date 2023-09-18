import { Component } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  onLogin() {
    // Aquí puedes realizar la lógica de autenticación, como enviar los datos al servidor
    // y verificar las credenciales. Por ahora, simplemente muestra los datos en la consola.
    console.log('Usuario:', this.username);
    console.log('Contraseña:', this.password);
  }

}
