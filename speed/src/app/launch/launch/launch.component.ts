import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { State } from '../../store/index';

@Component({
  selector: 'app-launch',
  templateUrl: './launch.component.html',
  styleUrls: ['./launch.component.css']
})
export class LaunchComponent implements OnInit {
  public launch;
  public statuses;

  constructor(
    private activatedRoute: ActivatedRoute,
    private store: Store<State>
  ) {}

  ngOnInit() {
    this.store.select('launch').subscribe(launchesState => {
      const id = this.activatedRoute.snapshot.params['id'];
      this.launch = launchesState.launches.filter(
        l => l.id.toString() === id
      )[0];
    });
  }
}
