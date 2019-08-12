import { Component, OnInit, ViewChild, Output, EventEmitter, forwardRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { CategoryService } from 'src/app/services/category.service';
import { AngularFireDatabase } from '@angular/fire/database';
import { MatSelect, MatSelectChange } from '@angular/material/select';
import { VERSION } from '@angular/material/core';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => UpdateProfileComponent),
      multi: true
    }
  ]
})
export class UpdateProfileComponent implements OnInit, ControlValueAccessor {

  editProfileForm: FormGroup;
  // countries$;
  countries: any[];
  industries: any[];

  // -------------------------------------
  @ViewChild(MatSelect, {static: false}) matSelect: MatSelect;
  @Output() selectionChange: EventEmitter<MatSelectChange> = new EventEmitter<MatSelectChange>();
  @Output() valueChange: EventEmitter<any> = new EventEmitter<any>();
  version = VERSION;
  // -------------------------------------

  constructor(private formbuilder: FormBuilder, db: AngularFireDatabase, private catservice: CategoryService ) {
      // this.countries$ = dataservice.getCountries();
      db.list('/countries').valueChanges()
        .subscribe(countries => {
          this.countries = countries;
          // console.log(this.countries);
        });

      this.catservice.getIndustries().valueChanges()
        .subscribe(industries => {
          this.industries = industries;
          console.log(this.industries);
        });
     }

  ngOnInit() {
    this.createForm();
  }
  private createForm() {
    this.editProfileForm = this.formbuilder.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      phone: ['', Validators.required],
      city: ['', Validators.required],
      address: ['', Validators.required],
      postalcode: ['', Validators.required],
      country: ['', Validators.required],
      aboutme: ['', Validators.required],
      expertcategory: ['', Validators.required],
      specialization: ['', Validators.required],
      industry: ['', Validators.required]
    });
  }

  getError(el) {
    switch (el) {
      case 'uname':
        if (this.editProfileForm.get('username').hasError('required')) {
          return 'Username required';
        }
        break;
        case 'eml':
          if (this.editProfileForm.get('email').hasError('required')) {
            return 'Email required';
          }
          break;
          case 'fname':
            if (this.editProfileForm.get('firstname').hasError('required')) {
              return 'First name required';
            }
            break;
            case 'lname':
              if (this.editProfileForm.get('lastname').hasError('required')) {
                return 'Last name required';
              }
              break;
              case 'tel':
                if (this.editProfileForm.get('phone').hasError('required')) {
                  return 'Telephone required';
                }
                break;
                case 'town':
                  if (this.editProfileForm.get('city').hasError('required')) {
                    return 'City or Town required';
                  }
                  break;
                  case 'addr':
                    if (this.editProfileForm.get('address').hasError('required')) {
                      return 'Postal address required';
                    }
                    break;
                    case 'code':
                      if (this.editProfileForm.get('postalcode').hasError('required')) {
                        return 'Postal code required';
                      }
                      break;
                      case 'count':
                        if (this.editProfileForm.get('country').hasError('required')) {
                          return 'Country required';
                        }
                        break;
                        case 'about':
                          if (this.editProfileForm.get('aboutme').hasError('required')) {
                            return 'Profile summary required';
                          }
                          break;
                          case 'cat':
                            if (this.editProfileForm.get('expertcategory').hasError('required')) {
                              return 'Expert category required';
                            }
                            break;
                            case 'spec':
                              if (this.editProfileForm.get('specialization').hasError('required')) {
                                return 'Specialization required';
                              }
                              break;
                              case 'indus':
                                if (this.editProfileForm.get('industry').hasError('required')) {
                                  return 'Industry experience required';
                                }
    }
  }
   // Accessing form control using getters
   get username() { return this.editProfileForm.get('username'); }
   get email() { return this.editProfileForm.get('email'); }
   get firstname() { return this.editProfileForm.get('firstname'); }
   get lasttname() { return this.editProfileForm.get('lasttname'); }
   get phone() { return this.editProfileForm.get('phone'); }
   get city() { return this.editProfileForm.get('city'); }
   get address() { return this.editProfileForm.get('address'); }
   get postalcode() { return this.editProfileForm.get('postalcode'); }
   get country() { return this.editProfileForm.get('country'); }
   get aboutme() { return this.editProfileForm.get('aboutme'); }
   get expertcategory() { return this.editProfileForm.get('expertcategory'); }
   get specialization() { return this.editProfileForm.get('specialization'); }
   get industry() { return this.editProfileForm.get('industry'); }

  onSubmit(post) {
    if (this.editProfileForm.invalid) {
      return;
    } else {
      alert('You have successfully updated your profile');
      // this.router.navigate(['/login']);
      }
  }

  // dropdown menu implementaion
  selectionChanged(event: MatSelectChange) {
    this.selectionChange.emit(new MatSelectChange(this.matSelect, event.value));
    this.valueChange.emit(event.value);
    this.onChange(event.value);
    this.onTouched();
  }
  // ControlValueAccessor Implementation
  onChange: any = () => { };
  onTouched: any = () => { };

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }

  writeValue(value: any) {
    // this.value = value;
  }

  setDisabledState(isDisabled: boolean) {
    // this.disabled = isDisabled;
  }

  // upload photo implementation

  /*csvInputChange(fileInputEvent: any) {
    console.log(fileInputEvent.target.files[0]);
  }*/
  onFileSelected(file): void {
    const inputN = file.name;
    console.log(inputN);
  }
}
