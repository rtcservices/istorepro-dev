import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

import { AuthService } from '../../../services/auth.service';
import { LoaderService } from '../../../services/loader.service';
import { SiteTranslateService } from '../../../services/site-translate.service';
import { TitleService } from '../../../services/title.service';

@Component({
  selector: 'rtc-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  submitted = false;
  loginInvalid = false;
  homeUrl = '/setup';
  forgotPasswordUrl = '/auth/forgot-password';
  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private translate: TranslateService,
    private authService: AuthService,
    private siteTranslateService: SiteTranslateService,
    private titleService: TitleService,
    private loader: LoaderService
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
          this.loader.show();
          this.router.navigate([this.homeUrl]);
          setTimeout(() => {
            this.loader.hide();
          }, 1500);

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
  gotoForgotPasswordPage(): void {
    this.loader.show();
    setTimeout(() => {
      this.router.navigate([this.forgotPasswordUrl]);
      this.loader.hide();
    }, 500);
  }
}
