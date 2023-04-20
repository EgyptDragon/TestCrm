import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Auth } from 'src/app/interfaces/auth.interface';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  login = new FormGroup({
    mail: new FormControl('', {
      validators: [
        Validators.required,
        Validators.email,
      ]
    }),
    password: new FormControl('', {
      validators: [
        Validators.required,
      ]
    }),
  });

  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.authService.isLoggedIn().subscribe(isLogged => {
      if (isLogged) {
        this.router.navigateByUrl('');
      }
    });
  }

  onSubmit(): void {
    const auth: Auth =
    {
      mail: this.login.value.mail,
      password: this.login.value.password
    };
    if (this.login.valid) {

      this.authService.log(auth).subscribe(data => {
        this.authService.createSession(data.longLivedToken, data.shortLivedToken);
        this.router.navigateByUrl('');
      });
    }

  }

}
