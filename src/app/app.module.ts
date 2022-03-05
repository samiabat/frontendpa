import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InspectionComponent } from './inspection/inspection.component';
import { ShowInspectionComponent } from './inspection/show-inspection/show-inspection.component';
import { AddEditInspectionComponent } from './inspection/add-edit-inspection/add-edit-inspection.component';
import { InspectionApiService } from './inspection-api.service';
import { CompanyComponent } from './company/company/company.component';
import { AddEditCompanyComponent } from './company/company/add-edit-company/add-edit-company.component';
import { ShowCompanyComponent } from './company/company/show-company/show-company.component';

@NgModule({
  declarations: [
    AppComponent,
    InspectionComponent,
    ShowInspectionComponent,
    AddEditInspectionComponent,
    CompanyComponent,
    AddEditCompanyComponent,
    ShowCompanyComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [InspectionApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
