import { ActionType, IFormResponseData, ReducerActionType } from "../types";

export function formReducer(
  state: Partial<IFormResponseData> | null,
  action: ReducerActionType,
): Partial<IFormResponseData> | null {
  const stateCopy = { ...(state || {}) };

  switch (action.type) {
    case ActionType.inputChange:
      return {
        ...stateCopy,
        [action.payload.name]: action.payload.value
      }

    case ActionType.updateData:
      return {
        ...stateCopy,
        ...action.payload,
      }

    default:
      return null;
  }
}
