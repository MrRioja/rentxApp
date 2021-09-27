import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  margin-bottom: 8px;
`;

export const IconContainer = styled.View`
  height: 56px;
  width: 55px;
  justify-content: center;
  align-items: center;
  margin-right: 2px;
  background-color: ${({ theme }) => theme.colors.background_secondary};
`;

export const InputText = styled.TextInput`
  flex: 1;
  padding: 0 23px;
  font-size: ${RFValue(15)}px;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.primary_400};
  background-color: ${({ theme }) => theme.colors.background_secondary};
`;
