import { ActionType, IFormResponseData, ReducerActionType } from "../types";
import { defaultFormData } from "../constants";

export function formReducer(
  state: Partial<IFormResponseData> | null,
  action: ReducerActionType,
): Partial<IFormResponseData> | null {
  const defaultState = { ...defaultFormData };
  const trimmedState = { ...defaultState, ...(state || null) };

  switch (action.type) {
    case ActionType.inputChange:
      console.log('ts', trimmedState, action.payload)
      return {
        ...trimmedState,
        [action.payload.name]: action.payload.value
      }

    case ActionType.updateData:
      return {
        ...trimmedState,
        ...action.payload,
      }

    default:
      return null;
  }
}
