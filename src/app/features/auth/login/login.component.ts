import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

import { AuthService } from '../../../core/services/auth.service';
import { SiteTranslateService } from '../../../core/services/site-translate.service';
import { TitleService } from '../../../core/services/title.service';

@Component({
  selector: 'rtc-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  submitted = false;
  loginInvalid = false;
  homeUrl = '/transactions';
  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private translate: TranslateService,
    private authService: AuthService,
    private siteTranslateService: SiteTranslateService,
    private titleService: TitleService
  ) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const language =
        params.get('lang')!
        || localStorage.getItem('site-lang')
        || this.siteTranslateService.defaultLanguage;
        localStorage.setItem('site-lang', language)
      this.translate.use(language).subscribe((res) => {
        const pageTitle = this.translate.instant(
          'login.title'
        );
        this.titleService.changeTitle(pageTitle);
      });
    });
    this.setLoginFormValues();
  }
  setLoginFormValues() {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(4)]],
      password: ['', [Validators.required, Validators.minLength(4)]]
    });
  }
  get loginFormControl() {
    return this.loginForm.controls;
  }

  async onSubmit(): Promise<void> {
    this.submitted = true;
    this.loginInvalid = false;
    if (this.loginForm.valid) {
      try {
        const username = this.loginForm.get('username')?.value;
        const password = this.loginForm.get('password')?.value;
        const authenticated = await this.authService.login(username, password);
        if (authenticated) {
          const language = username === 'japan' ? 'jp' : 'en';
          this.translate.use(language);
          localStorage.setItem('site-lang', language)
          await this.router.navigate([this.homeUrl]);
        } else {
          this.loginInvalid = true;
        }
      } catch (err) {
        this.loginInvalid = true;
      }
    }
  }
  async onLoginReset(): Promise<void> {
    this.setLoginFormValues();
    this.loginForm.reset(this.loginForm.value);
  }
}
