export interface LoaderStatusModel {
  isLoading: boolean;
  loadingText: string;
}

export class LoaderStatusModelImpl implements LoaderStatusModel {
  isLoading = false;
  loadingText = '';
}
