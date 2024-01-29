import { observable } from 'mobx';
const maxOpacity = 1; // 최대 투명도 값
const minOpacity = 0; // 최소 투명도 값
const opacityStore = observable({
  opacity: 0,
  opacityState: true, // true : 투명도 증가, false : 투명도 감소
  addOpacity(opacity: number) {
    const newOpacity = this.opacity + opacity;
    this.opacity = Math.max(0, Math.min(maxOpacity, newOpacity));
  },
});
export default opacityStore;
