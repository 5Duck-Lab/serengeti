import { makeAutoObservable } from 'mobx';

class SectionRatioStore {
  sectionRatio = {
    first: 0.25,
    second: 0.25,
    third: 0.25,
    fourth: 0.25,
  };

  cumulativeSums = [0, 0.25, 0.5, 0.75, 1];

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }
}

const sectionRatioStore = new SectionRatioStore();
export default sectionRatioStore;
