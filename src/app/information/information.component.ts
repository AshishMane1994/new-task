import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { InfoServicesService } from '../info-services.service';
import { Info } from '../info';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';
@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})
export class InformationComponent implements OnInit{
  user:any[]=[]
  userformdata!:FormGroup
  submitted = false;
  data: any;
  user1!: Info;
  firstname:any
  middlename:any
  lastname:any
  gender:any
  birthdate:any
  city:any
  state:any
  country:any
  zip:any
  id: any;
  heading="Add Data"
  hide=true
  hide1=true

  constructor(private modalService: NgbModal, private infoServices:InfoServicesService,private formbuilder:FormBuilder) {}

 
ngOnInit(): void {
this.getdata()
this.userformdata=this.formbuilder.group({
  firstname:["",[
    Validators.required,
  ]],
  middlename:["",[
    Validators.required,
  ]],
  lastname:["",[
    Validators.required,
  ]],
  gender:["",[
    Validators.required,
    
  ]],
  birthdate:["",[
    Validators.required,
    
  ]],
  city:["",[
    Validators.required,
    
  ]],
  state:["",[
    Validators.required,
    
  ]],
  country:["",[
    Validators.required,
    
  ]],
  zip:["",[
    Validators.required,
    
  ]],

})

}

get f() {
  return this.userformdata.controls;
}
	openWindowCustomClass(content:any) {
		this.modalService.open(content, { size: 'lg' });
    this.heading="Add Data"
    this.hide=true
    this.hide1=false


	}
	editdateamodel(content:any,item:any) {
    this.modalService.open(content, { size: 'lg' });
    this.heading="Edit Data"
    this.hide=false
    this.hide1=true
    this.id=item.id
    this.firstname=item.firstname
    this.middlename=item.middlename
    this.lastname=item.lastname
    this.gender=item.gender
    this.birthdate=item.birthdate
    this.city=item.city
    this.state=item.state
    this.country=item.country
    this.zip=item.zip
	}
getdata(){
  this.infoServices.getuserData().subscribe((res)=>{
this.user=res
console.log(this.user)
  })
}

submitformdata(user:any){
 this.user1=this.userformdata.value
  this.infoServices.createdata(this.user1).subscribe((res:any)=>{
console.log(res);
alert("sucssesfully data added")
this.getdata()
this.modalService.dismissAll()
this.userformdata.reset()
  })
  
}

editdata(user:any){
  this.user1=this.userformdata.value
  this.infoServices.updateuser(this.user1).subscribe((res:any)=>{
console.log(res);
  })}

deletedata(item:any){
  console.log(item.id);
  
this.infoServices.deletedatauser(item.id).subscribe((res)=>{
console.log(res);
this.getdata()
})
alert("are you want to delete the data")
}
}
