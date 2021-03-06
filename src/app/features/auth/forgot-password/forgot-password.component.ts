import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

import { AuthService } from '../../../services/auth.service';
import { LoaderService } from '../../../services/loader.service';
import { SiteTranslateService } from '../../../services/site-translate.service';
import { TitleService } from '../../../services/title.service';

@Component({
  selector: 'ibe-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})

export class ForgotPasswordComponent implements OnInit {
  loginUrl = '/auth/login';
  forgotPasswordForm!: FormGroup;
  submitted = false;
  emailInvalid = false;
  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private translate: TranslateService,
    private authService: AuthService,
    private loader: LoaderService,
    private siteTranslateService: SiteTranslateService,
    private titleService: TitleService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const language =
        params.get('lang')!
        || localStorage.getItem('site-lang')
        || this.siteTranslateService.defaultLanguage;
        localStorage.setItem('site-lang', language)
      this.translate.use(language).subscribe((res) => {
        const pageTitle = this.translate.instant(
          'forgotPassword.title'
        );
        this.titleService.changeTitle(pageTitle);
      });
    });
    this.setForgotPasswordFormValues();
  }

  setForgotPasswordFormValues() {
    this.forgotPasswordForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }
  get forgotPasswordFormControl() {
    return this.forgotPasswordForm.controls;
  }

  async onSubmit(): Promise<void> {
    this.submitted = true;
    this.emailInvalid = false;
  }
  gotoLoginPage(): void {
    this.loader.show();
    setTimeout(() => {
      this.router.navigate([this.loginUrl]);
      this.loader.hide();
    }, 500);
  }
}
