import { Component, OnInit } from '@angular/core';
import { DriverService } from '../../driver.service'
import { Driver } from '../../driver';
import { Guid } from 'guid-typescript';
      
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
      
  drivers: Driver[] = [];
    
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(public DriverService: DriverService) { }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.DriverService.getAll().subscribe((data: Driver[])=>{
      this.drivers = data;
      console.log(this.drivers);
    })  
  }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  deletedriver(id:Guid){
    this.DriverService.delete(id).subscribe(res => {
         this.drivers = this.drivers.filter(item => item.id !== id);
         console.log('driver deleted successfully!');
    })
  }
    
}