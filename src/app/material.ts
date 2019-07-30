import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import {  MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {  MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
// import {MatDatepickerModule} from '@angular/material/datepicker';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
imports: [
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatProgressSpinnerModule
],

exports: [
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatProgressSpinnerModule
],
})

export class MyMaterialModule { }
