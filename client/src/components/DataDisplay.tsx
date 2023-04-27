import { defaultFormDataEntries, defaultFormData } from "../constants";
import { StyledLeftSpaceForm } from "../styles";
import { IFormResponseData } from "../types";

const DataDisplay = (props: {
  formData: Partial<IFormResponseData> | null;
}) => {
  const { formData } = props;
  const updatedFormDataEntries = Object.entries(formData || defaultFormData);

  return formData === defaultFormData ? (
    <StyledLeftSpaceForm>
      <h2>Default data</h2>
      {defaultFormDataEntries.map((item) => (
        <p>
          <b>{item[0]}:</b> {item[1]}
        </p>
      ))}
    </StyledLeftSpaceForm>
  ) : (
    <StyledLeftSpaceForm>
      <h2>Updated data</h2>
      {updatedFormDataEntries.map((item) => (
        <p>
          <b>{item[0]}:</b> {item[1]}
        </p>
      ))}
    </StyledLeftSpaceForm>
  );
};

export default DataDisplay;
