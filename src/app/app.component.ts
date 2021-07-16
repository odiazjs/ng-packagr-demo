import { MockService } from './services/mock.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-packager-demo';
  constructor(public mockService: MockService) {

  }

  ngOnInit() {
    this.mockService.getRequestInstance()
      .subscribe(result => {
        console.log(result)
      })
  }
}
