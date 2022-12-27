declare interface ISpFxDemoWebPartStrings {
  title: string;
  PropertyPaneDescription: string;
  BasicGroupName: string;
  DescriptionFieldLabel: string;
  AppLocalEnvironmentSharePoint: string;
  AppLocalEnvironmentTeams: string;
  AppSharePointEnvironment: string;
  AppTeamsTabEnvironment: string;
}

declare module "SpFxDemoWebPartStrings" {
  const strings: ISpFxDemoWebPartStrings;
  export = strings;
}
