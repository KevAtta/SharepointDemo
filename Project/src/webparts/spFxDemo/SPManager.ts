import { WebPartContext } from "@microsoft/sp-webpart-base";
import { SPHttpClient } from "@microsoft/sp-http";
import { ListaPaesi } from "./components/models";

export default class SPManager {

  _context: WebPartContext;
  constructor(context: WebPartContext) {
    this._context = context;
  }

  public getListItems = async (): Promise<ListaPaesi[]> => {
    const response = await this._context.spHttpClient.get(
      this._context.pageContext.web.absoluteUrl +
        `/_api/web/lists/getbytitle('Paesi')/items?$select=Id,Title`,
      SPHttpClient.configurations.v1
    );

    if (!response.ok) {
      const responseText = await response.text();
      throw new Error(responseText);
    }

    const responseJson = await response.json();

    return responseJson.value as ListaPaesi[];
  };
}
