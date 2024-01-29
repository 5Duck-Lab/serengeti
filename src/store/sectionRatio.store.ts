import { makeAutoObservable } from 'mobx';

class SectionRatioStore {
  sectionRatio = {
    first: 0.1,
    second: 0.1,
    third: 0.2,
    fourth: 0.1,
    fifth: 0.1,
    sixth: 0.1,
    seventh: 0.1,
    eighth: 0.2,
  };

  cumulativeSums = [cumulativeSum(this.sectionRatio)];

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }
}

const sectionRatioStore = new SectionRatioStore();
export default sectionRatioStore;

function cumulativeSum(sectionRatio: Record<string, number>) {
  // 누적합을 저장할 배열
  const cumulativeSumArray: number[] = [0];

  for (const key in sectionRatio) {
    cumulativeSumArray.push(cumulativeSumArray[cumulativeSumArray.length - 1] + sectionRatio[key]);
  }

  console.log(cumulativeSumArray);
  return cumulativeSumArray;
}
