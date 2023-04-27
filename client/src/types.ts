export interface IFormResponseData {
  name?: string;
  title?: string;
  favorite_number?: string;
  favorite_primary_color?: string;
}

interface IReducerPayload {
  name: string;
  value?: string;
}

export enum ActionType {
  inputChange,
  updateData,
}

export type ReducerActionType =
  | { type: ActionType.inputChange, payload: IReducerPayload }
  | { type: ActionType.updateData, payload: Partial<IFormResponseData> }