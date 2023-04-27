import { Dispatch, SetStateAction } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { StyledForm } from "../styles";
import { ActionType, ReducerActionType, IFormResponseData } from "../types";
import _ from "lodash";

const EditWithJSON = ({
  JSONdata,
  setJSONdata,
  formData,
  setFormData,
}: {
  JSONdata: string;
  setJSONdata: Dispatch<SetStateAction<string>>;
  formData: Partial<IFormResponseData> | null;
  setFormData: Dispatch<ReducerActionType>;
}) => {
  const handleSubmit = () => {
    if (_.isEqual(JSON.parse(JSONdata), formData) === false) {
      setFormData({
        type: ActionType.updateData,
        payload: JSON.parse(JSONdata),
      });
    }
  };

  return (
    <>
      <StyledForm>
        <TextField
          id="outlined-multiline-flexible"
          label="Edit JSON"
          multiline
          defaultValue={JSONdata}
          sx={{ margin: "20px", width: "320px" }}
          onChange={(event) => setJSONdata(event.target.value)}
        />
      </StyledForm>
      <Button variant="contained" onClick={() => handleSubmit()}>
        Submit changes
      </Button>
    </>
  );
};

export default EditWithJSON;
