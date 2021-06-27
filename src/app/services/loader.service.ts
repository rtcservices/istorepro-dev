import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LoaderStatusModel, LoaderStatusModelImpl } from '../models/loader-status.model';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  private loaderSource = new BehaviorSubject<LoaderStatusModel>(new LoaderStatusModelImpl());
  currentStatus = this.loaderSource.asObservable();

  constructor() { }

  private changeLoaderStatus(loader: LoaderStatusModel) {
    this.loaderSource.next(loader);
  }

  show(loadingText = '') {
    const loader: LoaderStatusModel = { isLoading: true, loadingText: loadingText };
    this.changeLoaderStatus(loader);
  }

  hide() {
    const loader: LoaderStatusModel = { isLoading: false, loadingText: '' };
    this.changeLoaderStatus(loader);
  }

}
