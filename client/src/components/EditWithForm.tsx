import { Dispatch } from "react";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { StyledForm } from "../styles";
import { ActionType, ReducerActionType } from "../types";
import { colorOptions } from "../constants";

const EditWithForm = ({
  setFormData,
}: {
  setFormData: Dispatch<ReducerActionType>;
}) => {
  const internalOnchange = (
    type: number,
    payload: { name: string; value: string }
  ) => setFormData({ type, payload });

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
        select
        onChange={(event) => {
          internalOnchange(ActionType.inputChange, {
            name: event.target.name,
            value: event.target.value,
          });
        }}
      >
        {colorOptions.map((option, i) => (
          <MenuItem key={i} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
    </StyledForm>
  );
};

export default EditWithForm;
