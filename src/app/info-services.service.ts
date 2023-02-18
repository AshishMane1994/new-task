import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Info } from './info';

@Injectable({
  providedIn: 'root'
})
export class InfoServicesService {
 private apiUrl= "https://devservices.qpathways.com/otc/test/user"
  constructor(private http:HttpClient) { }

getuserData():Observable<any>{
   return this.http.get(this.apiUrl)
}
// post data
createdata(data:any):Observable<any>{
  // devservices.qpathways.com/otc/test/user/save
  return this.http.post<Info>(`${this.apiUrl}/save`,data)
}
updateuser(data:any,id:any):Observable<any>{
  // devservices.qpathways.com/otc/test/user/save
  return this.http.put<Info>(`${this.apiUrl}/update`,data)
}
// delete
deletedatauser(id:any):Observable<any>{
  return this.http.delete(`${this.apiUrl}/delete/${id}`)
}
}
