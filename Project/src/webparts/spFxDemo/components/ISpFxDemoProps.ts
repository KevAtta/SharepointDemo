export interface ISpFxDemoProps {
  isDarkTheme: boolean;
  environmentMessage: string;
  hasTeamsContext: boolean;
  userDisplayName: string;
  SPManager: SPManager;
}

import { WebPartContext } from "@microsoft/sp-webpart-base";
import SPManager from "../SPManager";
