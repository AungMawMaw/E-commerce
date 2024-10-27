import { Component, OnInit, signal } from '@angular/core';
import { EMPTY, finalize, Observable } from 'rxjs';
import { CategoryHeaderComponent } from '../category-header/category-header.component';
import { NewArrivalItemComponent } from '../new-arrival-item/new-arrival-item.component';
import { NewArrival } from '../../models/newArrival.model.service';
import { NewArrivalService } from '../../services/new-arrival.service';
import { AsyncPipe, CommonModule } from '@angular/common';

@Component({
  selector: 'app-new-arrival',
  standalone: true,
  imports: [
    CategoryHeaderComponent,
    NewArrivalItemComponent,
    AsyncPipe,
    CommonModule,
  ],
  templateUrl: './new-arrival.component.html',
  styleUrl: './new-arrival.component.css',
})
export class NewArrivalComponent implements OnInit {
  public newArrivals$: Observable<NewArrival[]> = EMPTY;
  item1: NewArrival | undefined;
  item2: NewArrival | undefined;
  item3: NewArrival | undefined;
  item4: NewArrival | undefined;

  isFetching = signal(true);
  constructor(private newArrivalService: NewArrivalService) {}
  ngOnInit(): void {
    this.newArrivalService
      .loadProduct()
      .pipe(finalize(() => this.isFetching.set(false)))
      .subscribe();
    this.newArrivals$ = this.newArrivalService.newArrivals$;
    this.newArrivals$.subscribe((arrivals) => {
      this.item1 = arrivals[0];
      this.item2 = arrivals[1];
      this.item3 = arrivals[2];
      this.item4 = arrivals[3];
    });
  }
}
