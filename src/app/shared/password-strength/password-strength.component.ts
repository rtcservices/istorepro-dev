import { ChangeDetectionStrategy } from '@angular/core';
import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges
} from '@angular/core';
import { AbstractControl, FormControl, Validators } from '@angular/forms';

enum Colors {
  primary = 'primary',
  accent = 'accent',
  warn = 'warn'
}

enum Criteria {
  at_least_eight_chars,
  at_least_one_lower_case_char,
  at_least_one_upper_case_char,
  at_least_one_digit_char,
  at_least_one_special_char
}

@Component({
  selector: 'ibe-password-strength',
  templateUrl: './password-strength.component.html',
  styleUrls: ['./password-strength.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PasswordStrengthComponent implements OnInit, OnChanges {
  @Input()
  password!: string;

  @Input()
  validators: Criteria[] = [
    Criteria.at_least_eight_chars,
    Criteria.at_least_one_lower_case_char,
    Criteria.at_least_one_upper_case_char,
    Criteria.at_least_one_digit_char,
    Criteria.at_least_one_special_char
  ];

  @Input()
  externalError!: boolean;

  @Output()
  onStrengthChanged: EventEmitter<number> = new EventEmitter<number>();

  criteriaMap = new Map<Criteria, RegExp>();

  containAtLeastEightChars!: boolean;
  containAtLeastOneLowerCaseLetter!: boolean;
  containAtLeastOneUpperCaseLetter!: boolean;
  containAtLeastOneDigit!: boolean;
  containAtLeastOneSpecialChar!: boolean;

  passwordFormControl: AbstractControl;

  private _strength!: number;

  private _color!: string;

  constructor() {
    const rgx = {
      eightChars: RegExp(/^.{8,63}$/),
      lowerCase: RegExp(/^(?=.*?[a-z])/),
      upperCase: RegExp(/^(?=.*?[A-Z])/),
      digit: RegExp(/^(?=.*?[0-9])/),
      specialChar: RegExp(/^(?=.*?[" !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"])/)
    };
    this.criteriaMap.set(Criteria.at_least_eight_chars, rgx['eightChars']);
    this.criteriaMap.set(
      Criteria.at_least_one_lower_case_char,
      rgx['lowerCase']
    );
    this.criteriaMap.set(
      Criteria.at_least_one_upper_case_char,
      rgx['upperCase']
    );
    this.criteriaMap.set(Criteria.at_least_one_digit_char, rgx['digit']);
    this.criteriaMap.set(
      Criteria.at_least_one_special_char,
      rgx['specialChar']
    );
    this.passwordFormControl = new FormControl('', [
      Validators.pattern(rgx['eightChars']),
      Validators.pattern(rgx['lowerCase']),
      Validators.pattern(rgx['upperCase']),
      Validators.pattern(rgx['digit']),
      Validators.pattern(rgx['specialChar'])
    ]);
  }

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.externalError && changes.externalError.firstChange) {
      this._color = Colors.primary;
      return;
    }
    if (changes.externalError && changes.externalError.currentValue) {
      this._color = Colors.warn;
      return;
    }
    this.password && this.password.length > 0
      ? this.calculatePasswordStrength()
      : this.reset();
  }

  get strength(): number {
    return this._strength ? this._strength : 0;
  }

  get color(): string {
    if (this._strength <= 20) {
      return Colors.warn;
    } else if (this._strength <= 80) {
      return Colors.primary;
    } else {
      return Colors.accent;
    }
  }

  private _containAtLeastEightChars(): boolean {
    this.containAtLeastEightChars = this.password.length >= 8;
    return this.containAtLeastEightChars;
  }

  private _containAtLeastOneLowerCaseLetter(): boolean {
    this.containAtLeastOneLowerCaseLetter =
      this.criteriaMap
        .get(Criteria.at_least_one_lower_case_char)
        ?.test(this.password) || false;
    return this.containAtLeastOneLowerCaseLetter;
  }

  private _containAtLeastOneUpperCaseLetter(): boolean {
    this.containAtLeastOneUpperCaseLetter =
      this.criteriaMap
        .get(Criteria.at_least_one_upper_case_char)
        ?.test(this.password) || false;
    return this.containAtLeastOneUpperCaseLetter;
  }

  private _containAtLeastOneDigit(): boolean {
    this.containAtLeastOneDigit =
      this.criteriaMap
        .get(Criteria.at_least_one_digit_char)
        ?.test(this.password) || false;
    return this.containAtLeastOneDigit;
  }

  private _containAtLeastOneSpecialChar(): boolean {
    this.containAtLeastOneSpecialChar =
      this.criteriaMap
        .get(Criteria.at_least_one_special_char)
        ?.test(this.password) || false;
    return this.containAtLeastOneSpecialChar;
  }

  calculatePasswordStrength() {
    const requirements: Array<boolean> = [];
    const unit = 100 / 5;

    requirements.push(
      this._containAtLeastEightChars(),
      this._containAtLeastOneLowerCaseLetter(),
      this._containAtLeastOneUpperCaseLetter(),
      this._containAtLeastOneDigit(),
      this._containAtLeastOneSpecialChar()
    );

    this._strength = requirements.filter((v) => v).length * unit;
    this.onStrengthChanged.emit(this.strength);
  }

  reset() {
    this._strength = 0;
    this.containAtLeastEightChars =
      this.containAtLeastOneLowerCaseLetter =
      this.containAtLeastOneUpperCaseLetter =
      this.containAtLeastOneDigit =
      this.containAtLeastOneSpecialChar =
        false;
  }
}
