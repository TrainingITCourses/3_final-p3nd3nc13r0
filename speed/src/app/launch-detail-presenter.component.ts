import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Launch } from './store/models/launch';
import { Store } from '@ngrx/store';
import { State } from './store/index';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-launch-detail-presenter',
  templateUrl: './launch-detail-presenter.component.html',
  styleUrls: ['./launch-detail-presenter.component.css']
})
export class LaunchDetailPresenterComponent implements OnInit {

  public launch: Launch;

  constructor(private activatedRoute: ActivatedRoute, private store: Store<State> ) { }

  ngOnInit() {
    console.log('onInit LaunchDetailPresenterComponent');
    
    this.store.select('launch').subscribe(launchesState => {
      const id = this.activatedRoute.snapshot.params['id'];
      this.launch = launchesState.launches.filter(
        l => l.id.toString() === id
      )[0];
    });
  }

}
