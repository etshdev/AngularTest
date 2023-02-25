import { Component, Input, OnInit } from '@angular/core';
import { DriverService } from '../../driver.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Driver } from '../../driver';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Guid } from 'guid-typescript';
     
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
      
  id!: Guid;
  Driver!: Driver;
  form!: FormGroup;
 daata:any;
    
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(
    public DriverService: DriverService,
    private route: ActivatedRoute,
    private router: Router
  ) { 

    
  }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.id = this.route.snapshot.params['driverId'];
    this.DriverService.find(this.id).subscribe((data: Driver)=>{
      this.Driver = data;
    },()=>{},()=>{

      this.form.setValue({
        id:this.id,
        firstName: this.Driver?.firstName,
        lastName: this.Driver?.lastName,
        phoneNumber:this.Driver?.phoneNumber,
        email:this.Driver?.email
    
     });
    }); 
    this.form = new FormGroup({
      id: new FormControl(this.id, [Validators.required]),
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', Validators.required),
      phoneNumber: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required,Validators.email])

    });
  
   
   
  }
  
 
  /**
   * Write code on Method
   *
   * @return response()
   */
  get f(){
    return this.form.controls;
  }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  submit(){
    console.log(this.form.value);
    
    this.DriverService.update(this.id, this.form.value).subscribe((res:any) => {
         console.log('Driver updated successfully!');
         this.router.navigateByUrl('driver/index');
    })
  }
   
}
