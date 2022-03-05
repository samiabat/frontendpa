import { InspectionApiService } from 'src/app/inspection-api.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-show-company',
  templateUrl: './show-company.component.html',
  styleUrls: ['./show-company.component.css']
})
export class ShowCompanyComponent implements OnInit {
 // Map to display data associate with foreign keys
 companyList$!:Observable<any[]>;
  inspectionTypesList$!:Observable<any[]>;
  inspectionTypesList:any=[];

  inspectionTypesMap:Map<number, string> = new Map()

  constructor(private service:InspectionApiService) { }


  ngOnInit(): void {
    this.companyList$ = this.service.getCompanyList();
    this.refreshInspectionTypesMap();
  }

  // Variables (properties)
  modalTitle:string = '';
  activateAddEditCompanyComponent:boolean = false;
  company:any;

  modalAdd() {
    this.company = {
      id:0,
      company:null,
      noOfWorkers:0,
    }
    this.modalTitle = "Add Company";
    this.activateAddEditCompanyComponent = true;
  }

  modalEdit(item:any) {
    this.company = item;
    this.modalTitle = "Edit Company";
    this.activateAddEditCompanyComponent = true;
  }

  delete(item:any) {
    if(confirm(`Are you sure you want to delete Company ${item.id}`)) {
      this.service.deleteCompany(item.id).subscribe(res => {
        var closeModalBtn = document.getElementById('add-edit-modal-close');
      if(closeModalBtn) {
        closeModalBtn.click();
      }

      var showDeleteSuccess = document.getElementById('delete-success-alert');
      if(showDeleteSuccess) {
        showDeleteSuccess.style.display = "block";
      }
      setTimeout(function() {
        if(showDeleteSuccess) {
          showDeleteSuccess.style.display = "none"
        }
      }, 4000);
      this.companyList$ = this.service.getCompanyList();
      })
    }
  }

  modalClose() {
    this.activateAddEditCompanyComponent = false;
    this.companyList$ = this.service.getCompanyList();
  }

  refreshInspectionTypesMap() {
    this.service.getInspectionTypesList().subscribe(data => {
      this.inspectionTypesList = data;

      for(let i = 0; i < data.length; i++)
      {
        this.inspectionTypesMap.set(this.inspectionTypesList[i].id, this.inspectionTypesList[i].inspectionName);
      }
    })
  }

}

