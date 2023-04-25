import { atom } from 'recoil';

export const todoItemsState = atom({
  key: 'todoItemsState',
  default: [],
});

console.log(todoItemsState);

// export const counterPlusOneSelector = selector({
//   key: 'counterPlusOneSelector',
//   get: ({ get }) => {
//     const counter = get(counterState);
//     return counter + 1;
//   },
// });
