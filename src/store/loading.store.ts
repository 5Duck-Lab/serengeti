import { makeAutoObservable } from 'mobx';

class LoadingStore {
  loading = 0;

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  setLoading(loading: number): void {
    this.loading = loading;
  }
}

const loadingStore = new LoadingStore();
export default loadingStore;
