import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useAuth } from "../hooks/auth";
import { AppTabRoutes } from "./app.tab.routes";
import { AuthRoutes } from "./auth.routes";
import { LoadAnimation } from "../components/LoadAnimation";

declare global {
  namespace ReactNavigation {
    interface RootParamList {
      Home: string;
      CarDetails: string;
      Scheduling: string;
      SchedulingDetails: string;
      Confirmation: {
        title: string;
        message: string;
        nextScreenRoute: string;
      };
      SignIn: string;
      SignUpFirstStep: string;
      SignUpSecondStep: string;
    }
  }
}

export function Routes() {
  const { user, loading } = useAuth();

  return loading ? (
    <LoadAnimation />
  ) : (
    <NavigationContainer>
      {user.id ? <AppTabRoutes /> : <AuthRoutes />}
    </NavigationContainer>
  );
}
