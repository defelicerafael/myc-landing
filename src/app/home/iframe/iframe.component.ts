import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';
import { RecaptchaModule } from "ng-recaptcha";

@Component({
  selector: 'app-iframe',
  standalone: true,
  imports: [CommonModule,RecaptchaModule],
  templateUrl: './iframe.component.html',
  styleUrls: ['./iframe.component.css']
})
export class IframeComponent {
  public trustedUrl: any;
  public iframeSource: string = 'https://crm.zoho.com/crm/WebFormServeServlet?rid=2969623e774e74fb2405ae1ddc671627b71357f0248dc6caa7b854c85cfd9b12404549d0a8ee9c388faaf0163833b05cgidd5dff6ea7ca16b1e51a8d69a139967be9dc68ae2a5603599372c9c0a01880f4f';
  public recaptchaOn: boolean = false;
  constructor(private sanitizer: DomSanitizer) {
    this.trustedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.iframeSource);
  }
  resolved(captchaResponse: string) {
    this.recaptchaOn = true;
    console.log(`Resolved captcha with response: ${captchaResponse}`);
  }
  
}
