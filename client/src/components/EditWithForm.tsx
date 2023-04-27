import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { StyledForm } from "../styles";
import { IFormResponseData, ActionType } from "../types";
import { defaultFormData, colorOptions } from "../constants";

const EditWithForm = ({
  formData,
  internalOnchange,
}: {
  formData: Partial<IFormResponseData> | null;
  internalOnchange: (
    type: number,
    payload: { name: string; value: string }
  ) => void;
}) => {
  console.log("form", formData);
  return (
    <StyledForm>
      <TextField
        id="name"
        name="name"
        label="Name"
        variant="outlined"
        margin="normal"
        onChange={(event) => {
          internalOnchange(ActionType.inputChange, {
            name: event.target.name,
            value: event.target.value,
          });
        }}
      />
      <TextField
        id="title"
        name="title"
        label="Title"
        variant="outlined"
        margin="normal"
        onChange={(event) => {
          internalOnchange(ActionType.inputChange, {
            name: event.target.name,
            value: event.target.value,
          });
        }}
      />
      <TextField
        id="favorite-number"
        name="favorite_number"
        label="Favorite number"
        variant="outlined"
        margin="normal"
        type="number"
        onChange={(event) => {
          internalOnchange(ActionType.inputChange, {
            name: event.target.name,
            value: event.target.value,
          });
        }}
      />
      <TextField
        id="favorite-primary-color"
        name="favorite_primary_color"
        label="Favorite primary color"
        variant="outlined"
        margin="normal"
        defaultValue={defaultFormData.favorite_primary_color}
        select
        onChange={(event) => {
          internalOnchange(ActionType.inputChange, {
            name: event.target.name,
            value: event.target.value,
          });
        }}
      >
        {colorOptions.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
    </StyledForm>
  );
};

export default EditWithForm;
