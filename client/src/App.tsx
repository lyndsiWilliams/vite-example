import { useReducer, Reducer, useState, useEffect } from "react";
import EditWithForm from "./components/EditWithForm";
import Button from "@mui/material/Button";
import DataDisplay from "./components/DataDisplay";
import EditWithJSON from "./components/EditWithJSON";
import { formReducer } from "./state/formReducer";
import { ReducerActionType, IFormResponseData, ActionType } from "./types";
import { StyledRow, StyledColumn } from "./styles";
import "./App.css";
import { defaultFormData } from "./constants";
import _ from "lodash";

function App() {
  const [formData, setFormData] = useReducer<
    Reducer<Partial<IFormResponseData> | null, ReducerActionType>
  >(formReducer, defaultFormData);
  const [editJSON, setEditJSON] = useState<boolean>(false);
  const [JSONdata, setJSONdata] = useState<string>(
    JSON.stringify(defaultFormData, null, "\t")
  );

  const internalOnchange = (
    type: number,
    payload: { name: string; value: string }
  ) => setFormData({ type, payload });

  const handleSubmit = () => {
    if (
      formData &&
      formData !== defaultFormData &&
      _.isEqual(JSON.parse(JSONdata), formData)
    ) {
      console.log("no match", formData, JSONdata);
      setFormData({
        type: ActionType.updateData,
        payload: formData,
      });
      setJSONdata(JSON.stringify(formData, null, 2));
    } else if (_.isEqual(JSON.parse(JSONdata), defaultFormData) === false) {
      console.log("false JSON--");
      setFormData({
        type: ActionType.updateData,
        payload: JSON.parse(JSONdata),
      });
    } else {
      console.log("yes match", formData, JSONdata);
      console.log("outta here");
    }
  };

  return (
    <StyledRow>
      <StyledColumn>
        <Button variant="contained" onClick={() => setEditJSON(!editJSON)}>
          {editJSON ? "Edit with form" : "Edit JSON directly"}
        </Button>
        {editJSON ? (
          <EditWithJSON JSONdata={JSONdata} setJSONdata={setJSONdata} />
        ) : (
          <EditWithForm
            formData={formData}
            internalOnchange={internalOnchange}
          />
        )}
        <Button variant="contained" onClick={() => handleSubmit()}>
          Submit changes
        </Button>
      </StyledColumn>
      <DataDisplay formData={formData} />
    </StyledRow>
  );
}

export default App;
