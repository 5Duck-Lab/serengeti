import { makeAutoObservable } from 'mobx';
import { OnScrollEvent } from 'locomotive-scroll';

export class ScrollStore {
  scrollPosition = 0; // 스크롤 위치
  maxScroll = 0; // 최대 스크롤 길이
  scrollDirection = 'down'; // 현재 스크롤 방향

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  setScrollPosition(position: number) {
    this.scrollPosition = position;
  }

  setMaxScroll(maxHeight: number) {
    this.maxScroll = maxHeight;
  }

  // 스크롤 방향 업데이트
  setScrollDirection(direction: string) {
    this.scrollDirection = direction;
  }

  // Locomotive Scroll 이벤트 핸들러
  handleScroll(locomotiveScrollEvent: OnScrollEvent) {
    this.setScrollPosition(locomotiveScrollEvent.scroll.y);
    this.setMaxScroll(locomotiveScrollEvent.limit.y);
  }
}

const scrollStore = new ScrollStore();
export default scrollStore;
