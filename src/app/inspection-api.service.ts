import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InspectionApiService {

  readonly inspectionAPIUrl = "https://localhost:7240/api";

  constructor(private http:HttpClient) { }

  getInspectionList():Observable<any[]> {
    return this.http.get<any>(this.inspectionAPIUrl + '/inspections');
  }

  addInspection(data:any) {
    return this.http.post(this.inspectionAPIUrl + '/inspections', data);
  }

  updateInspection(id:number|string, data:any) {
    return this.http.put(this.inspectionAPIUrl + `/inspections/${id}`, data);
  }

  deleteInspection(id:number|string) {
    return this.http.delete(this.inspectionAPIUrl + `/inspections/${id}`);
  }

  // Inspection Types
  getInspectionTypesList():Observable<any[]> {
    return this.http.get<any>(this.inspectionAPIUrl + '/inspectionTypes');
  }

  addInspectionTypes(data:any) {
    return this.http.post(this.inspectionAPIUrl + '/inspectionTypes', data);
  }

  updateInspectionTypes(id:number|string, data:any) {
    return this.http.put(this.inspectionAPIUrl + `/inspectionTypes/${id}`, data);
  }

  deleteInspectionTypes(id:number|string) {
    return this.http.delete(this.inspectionAPIUrl + `/inspectionTypes/${id}`);
  }

  // Statuses
  getStatusList():Observable<any[]> {
    return this.http.get<any>(this.inspectionAPIUrl + '/status');
  }

  addStatus(data:any) {
    return this.http.post(this.inspectionAPIUrl + '/status', data);
  }

  updateStatus(id:number|string, data:any) {
    return this.http.put(this.inspectionAPIUrl + `/status/${id}`, data);
  }

  deleteStatus(id:number|string) {
    return this.http.delete(this.inspectionAPIUrl + `/status/${id}`);
  }
  //Company
  addCompany(data:any) {
    return this.http.post(this.inspectionAPIUrl + '/Company', data);
  }

  updateCompany(id:number|string, data:any) {
    return this.http.put(this.inspectionAPIUrl + `/Company/${id}`, data);
  }
  deleteCompany(id:number|string) {
    return this.http.delete(this.inspectionAPIUrl + `/Company/${id}`);
  }
  getCompanyList():Observable<any[]> {
    return this.http.get<any>(this.inspectionAPIUrl + '/Company');
  }
  //Person
  addPerson(data:any) {
    return this.http.post(this.inspectionAPIUrl + '/Person', data);
  }

  updatePerson(id:number|string, data:any) {
    return this.http.put(this.inspectionAPIUrl + `/Person/${id}`, data);
  }

  deletePerson(id:number|string) {
    return this.http.delete(this.inspectionAPIUrl + `/Person/${id}`);
  }
  getPersonList():Observable<any[]> {
    return this.http.get<any>(this.inspectionAPIUrl + '/Person');
  }

  //Project
  addProject(data:any) {
    return this.http.post(this.inspectionAPIUrl + '/Project', data);
  }

  updateProject(id:number|string, data:any) {
    return this.http.put(this.inspectionAPIUrl + `/Project/${id}`, data);
  }

  deleteProject(id:number|string) {
    return this.http.delete(this.inspectionAPIUrl + `/Project/${id}`);
  }
  getProjectList():Observable<any[]> {
    return this.http.get<any>(this.inspectionAPIUrl + '/Project');
  }

  // plan
  addPlan(data:any) {
    return this.http.post(this.inspectionAPIUrl + '/Plan', data);
  }

  updatePlan(id:number|string, data:any) {
    return this.http.put(this.inspectionAPIUrl + `/Plan/${id}`, data);
  }

  deletePlan(id:number|string) {
    return this.http.delete(this.inspectionAPIUrl + `/Plan/${id}`);
  }
  getPlanList():Observable<any[]> {
    return this.http.get<any>(this.inspectionAPIUrl + '/Plan');
  }

}
