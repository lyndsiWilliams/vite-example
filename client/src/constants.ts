import { IFormResponseData } from "./types"

export const defaultFormData: IFormResponseData = {
  name: 'Default name',
  title: 'Default title',
  favorite_number: '3',
  favorite_primary_color: 'red',
};

export const colorOptions = [
  { value: "red", label: "red" },
  { value: "yellow", label: "yellow" },
  { value: "blue", label: "blue" },
];