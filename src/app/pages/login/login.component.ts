import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { HttpService } from 'src/app/service/http.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private fb: FormBuilder, private http: HttpService, private router: Router, private msg: NzMessageService) { }
  validateForm!: FormGroup;

  submitForm(): void {
    if (this.validateForm.valid) {
      this.http.login(this.validateForm.value)
        .subscribe((res:any)=>{
          if(res.code==200){
            this.msg.success('login success');
            localStorage.setItem('user', JSON.stringify(res.data))
            this.router.navigate(['/'])
          }else{
            this.msg.error(res.msg)
          }
        })
    } else {
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required]]
    });
  }

}
