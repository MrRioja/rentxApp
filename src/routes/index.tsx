import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { StackRoutes } from "./stack.routes";

declare global {
  namespace ReactNavigation {
    interface RootParamList {
      Home: string;
      CarDetails: string;
      Scheduling: string;
      SchedulingDetails: string;
      SchedulingComplete: string;
      SignUpFirstStep: string;
      SignUpSecondStep: string;
    }
  }
}

export function Routes() {
  return (
    <NavigationContainer>
      <StackRoutes />
    </NavigationContainer>
  );
}
