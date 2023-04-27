import { Dispatch, SetStateAction } from "react";
import TextField from "@mui/material/TextField";
import { StyledForm } from "../styles";
import { defaultFormData } from "../constants";
import _ from "lodash";

const EditWithJSON = ({
  JSONdata,
  setJSONdata,
}: {
  JSONdata: string;
  setJSONdata: Dispatch<SetStateAction<string>>;
}) => {
  console.log("JSONdata", _.isEqual(JSON.parse(JSONdata), defaultFormData));

  return (
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
  );
};

export default EditWithJSON;
