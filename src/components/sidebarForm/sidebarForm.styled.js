import styled from "styled-components";

export const StyledSidebarContainer = styled.aside`
  width: 26%;
  height: 100%;
  position: absolute;
  right: 0;
  background-color: rgba(255, 255, 255, 1);
  display: flex;
  flex-flow: column;
  overflow-y: scroll;
`;

export const StyledSidebarContentContainer = styled.div`
  padding: 16px 20px;
  height: 100%;
  display: flex;
  flex-flow: column;
  gap: 32px;
`;

export const StyledSidebarAddFieldContainer = styled.section`
  display: flex;
  flex-flow: column;
  gap: 16px;
`;

export const StyledSidebarHeading = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 12px;
`;

export const StyledSidebarField = styled.article`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StyledSidebarFieldContent = styled.span`
  display: flex;
  gap: 8px;
  align-items: center;
`;

export const StyledAddIcon = styled.img`
  cursor: pointer;
`;

export const StyledToggleFieldsContainer = styled.section`
  display: flex;
  flex-flow: column;
  gap: 18px;
`;

export const StyledToggleField = styled.article`
  display: flex;
  flex-flow: column;
  gap: 12px;
`;
