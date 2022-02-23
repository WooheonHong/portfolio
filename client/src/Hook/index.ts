export interface IndexAction {
  type: string;
}

export const IdxReducer = (state: number, action: IndexAction): number => {
  switch (action.type) {
    case "INCREMENT":
      if (state === 3) return state;
      return state + 1;
    case "DECREMENT":
      if (state === 0) return state;
      return state - 1;
    default:
      return state;
  }
};
