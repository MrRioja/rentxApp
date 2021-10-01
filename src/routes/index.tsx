import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useAuth } from "../hooks/auth";
import { AppTabRoutes } from "./app.tab.routes";
import { AuthRoutes } from "./auth.routes";

declare global {
  namespace ReactNavigation {
    interface RootParamList {
      Home: string;
      CarDetails: string;
      Scheduling: string;
      SchedulingDetails: string;
      Confirmation: string;
      SignIn: string;
      SignUpFirstStep: string;
      SignUpSecondStep: string;
    }
  }
}

export function Routes() {
  const { user } = useAuth();

  return (
    <NavigationContainer>
      {user ? <AppTabRoutes /> : <AuthRoutes />}
    </NavigationContainer>
  );
}
