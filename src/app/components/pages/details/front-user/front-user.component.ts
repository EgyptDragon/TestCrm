import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-front-user',
  templateUrl: './front-user.component.html',
  styleUrls: ['./front-user.component.scss']
})
export class FrontUserComponent implements OnInit {

  @ViewChild('emailRef') emailRef: ElementRef = {nativeElement: {}};
  //public email: string;
  constructor() {
    //this.email = '';
  }

  ngOnInit(): void {
    //this.email = 'vincent@gmailvincent@gmailvincent@gmailvincent@gmailvincent@gmail.com';
  }

  click(){
    //navigator.clipboard.writeText(this.email);
    const emailRef = this.emailRef.nativeElement as HTMLInputElement;
    emailRef.setSelectionRange(0, 99999);
    console.log(this.emailRef);
    this.emailRef.nativeElement
    document.execCommand('copy');
  }

}
