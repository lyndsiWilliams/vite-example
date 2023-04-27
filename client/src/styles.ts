import styled from "@emotion/styled";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const StyledLeftSpaceForm = styled(StyledForm)`
  margin-left: 100px;
  p {
    text-align: left;
  }
`;

export const StyledRow = styled.div`
  display: flex;
`;

export const StyledColumn = styled.div`
  flex-direction: column;
`;
