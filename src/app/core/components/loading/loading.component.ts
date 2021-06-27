import { Component, OnInit } from '@angular/core';

import { LoaderService } from '../../../services/loader.service';

@Component({
  selector: 'rtc-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {
  loadingText = '';
  isLoading = false;
  constructor(private loader: LoaderService) { }

  ngOnInit(): void {
    this.loader.currentStatus.subscribe(loaderStatus => {
      this.isLoading = loaderStatus.isLoading;
      this.loadingText = loaderStatus.loadingText;
    })
  }

}
