import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username = "";
  password = "";
  errorpasswordMsg = "";
  errorusernameMsg = "";

   constructor(private auth: AuthService, private router: Router) { }


  ngOnInit(): void {
  }
  
  login() {

    if (this.username.trim().length === 0 && this.password.trim().length === 0 ) {
      this.errorusernameMsg = "Username is required";
      this.errorpasswordMsg = "Password is required";
    }
    else if (this.username.trim().length === 0 && this.password.trim().length !== 0 ) {
      this.errorusernameMsg = "Username is required";
      this.errorpasswordMsg = "";
    } 
    else if (this.password.trim().length === 0 && this.username.trim().length !==0 ) {
      this.errorusernameMsg = "";
      this.errorpasswordMsg = "Password is required";
    } else {
      this.errorpasswordMsg = "";
      this.errorusernameMsg = "";



      this.auth.login(this.username, this.password).subscribe({

        next:data=>
        {
         
          if(data.code==0)
          {
            console.log("Invalid credentials")
          }

          if(data.code==1)
          {
            localStorage.setItem('role',data.object.userRole)
            localStorage.setItem ('token', data.object.jwtToken);
            localStorage.setItem('refreshtoken',data.object.refreshToken);
            this.router.navigate(['/home']);
            console.log(data.object.jwtToken)
          }
          
        }

      });
   
      
    }
  }

}
