import { Component } from '@angular/core';
import { ServiceGoalsComponent } from './service-goals/service-goals.component';
import { ContainerComponent } from '../../shared/components/container/container.component';
import { EmployeeProfileComponent } from './employee-profile/employee-profile.component';
import { CustomerServiceComponent } from '../home/components/customer-service/customer-service.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    ServiceGoalsComponent,
    ContainerComponent,
    EmployeeProfileComponent,
    CustomerServiceComponent,
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {}
