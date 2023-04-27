import { defaultFormData } from "../constants";
import { StyledLeftSpaceForm } from "../styles";
import { IFormResponseData } from "../types";

const DataDisplay = (props: {
  formData: Partial<IFormResponseData> | null;
}) => {
  const { formData } = props;

  return formData === defaultFormData ? (
    <StyledLeftSpaceForm>
      <h2>Default data</h2>
      {Object.entries(defaultFormData).map((item, i) => (
        <p key={i}>
          <b>{item[0]}:</b> {item[1]}
        </p>
      ))}
    </StyledLeftSpaceForm>
  ) : (
    <StyledLeftSpaceForm>
      <h2>Updated data</h2>
      {Object.entries(formData || defaultFormData).map((item, i) => (
        <p key={i}>
          <b>{item[0]}:</b> {item[1]}
        </p>
      ))}
    </StyledLeftSpaceForm>
  );
};

export default DataDisplay;
