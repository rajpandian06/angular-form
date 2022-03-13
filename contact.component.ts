import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  alert: boolean = false;
  url: any = 'http://localhost:3000/posts';
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }
  userForm:any = new FormGroup({
    fullname: new FormControl('', [Validators.required, Validators.pattern('^[a-z]+$')]),
    number: new FormControl('', [Validators.required, Validators.pattern('^[7-9]{1}[0-9]{9}$'), Validators.maxLength(10)]),
    email: new FormControl('', [Validators.required, Validators.pattern('^([a-zA-Z0-9]+)@([a-zA-Z0-9]+)\.([a-z]{2,7})$')]),
    feedback: new FormControl('', [Validators.required])
  })

  validate() {
    this.http.post(this.url, this.userForm.value).subscribe((result) =>
     this.alert = true,
     this.userForm.reset()
    )


  }
  get fullname() {
    return this.userForm.get('fullname')
  }
  get number() {
    return this.userForm.get('number')
  }
  get email() {
    return this.userForm.get('email')
  }
  get feedback() {
    return this.userForm.get('feedback')
  }

}
