import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { InspectionApiService } from 'src/app/inspection-api.service';

@Component({
  selector: 'app-add-edit-company',
  templateUrl: './add-edit-company.component.html',
  styleUrls: ['./add-edit-company.component.css']
})

export class AddEditCompanyComponent implements OnInit {

  companyList$!: Observable<any[]>;
  // statusList$!: Observable<any[]>;
  // inspectionTypesList$!: Observable<any[]>;

  constructor(private service:InspectionApiService) { }

  @Input() company:any;
  id: number = 0;
  name: string = "";
  noOfWorkers: number = 0;

  ngOnInit(): void {
    this.id = this.company.id;
    this.name = this.company.name;
    this.noOfWorkers = this.company.noOfWork;
  }

  addCompany() {
    var company = {
      id: this.id,
      name: this.name,
      noOfWorkers: this.noOfWorkers
    }
    this.service.addCompany(company).subscribe(res => {
      var closeModalBtn = document.getElementById('add-edit-modal-close');
      if(closeModalBtn) {
        closeModalBtn.click();
      }

      var showAddSuccess = document.getElementById('add-success-alert');
      if(showAddSuccess) {
        showAddSuccess.style.display = "block";
      }
      setTimeout(function() {
        if(showAddSuccess) {
          showAddSuccess.style.display = "none"
        }
      }, 4000);
    })
  }

  updateCompany() {
    var company = {
      id: this.id,
      name:this.name,
      noOfWorkers:this.noOfWorkers,
    }
    var id:number = this.id;
    this.service.updateCompany(id,company).subscribe(res => {
      var closeModalBtn = document.getElementById('add-edit-modal-close');
      if(closeModalBtn) {
        closeModalBtn.click();
      }

      var showUpdateSuccess = document.getElementById('update-success-alert');
      if(showUpdateSuccess) {
        showUpdateSuccess.style.display = "block";
      }
      setTimeout(function() {
        if(showUpdateSuccess) {
          showUpdateSuccess.style.display = "none"
        }
      }, 4000);
    })
  }
}
