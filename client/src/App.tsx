import { useReducer, Reducer, useState, useEffect } from "react";
import Button from "@mui/material/Button";
import EditWithForm from "./components/EditWithForm";
import EditWithJSON from "./components/EditWithJSON";
import DataDisplay from "./components/DataDisplay";
import { formReducer } from "./state/formReducer";
import { ReducerActionType, IFormResponseData } from "./types";
import { StyledRow, StyledColumn } from "./styles";
import { defaultFormData } from "./constants";
import "./App.css";

function App() {
  const [formData, setFormData] = useReducer<
    Reducer<Partial<IFormResponseData> | null, ReducerActionType>
  >(formReducer, defaultFormData);
  const [editJSON, setEditJSON] = useState<boolean>(false);
  const [JSONdata, setJSONdata] = useState<string>(
    JSON.stringify(defaultFormData, null, "\t")
  );

  useEffect(() => {
    if (JSON.stringify(formData) !== JSONdata) {
      setJSONdata(JSON.stringify(formData, null, 2));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formData]);

  return (
    <StyledRow>
      <StyledColumn>
        <Button variant="contained" onClick={() => setEditJSON(!editJSON)}>
          {editJSON ? "Edit with form" : "Edit JSON directly"}
        </Button>
        {editJSON ? (
          <EditWithJSON
            JSONdata={JSONdata}
            setJSONdata={setJSONdata}
            formData={formData}
            setFormData={setFormData}
          />
        ) : (
          <EditWithForm setFormData={setFormData} />
        )}
      </StyledColumn>
      <DataDisplay formData={formData} />
    </StyledRow>
  );
}

export default App;
