import { Component, OnInit } from '@angular/core';
import { DriverService } from '../../driver.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Driver } from '../../driver';
import { Guid } from 'guid-typescript';
    
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
     
  id!: Guid;
  driver!: Driver;
    
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(
    public driverService: DriverService,
    private route: ActivatedRoute,
    private router: Router
   ) { }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.id = this.route.snapshot.params['driverId'];
        
    this.driverService.find(this.id).subscribe((data: Driver)=>{
      this.driver = data;
    });
  }
    
}