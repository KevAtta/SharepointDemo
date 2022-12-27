import * as React from "react";
import styles from "./SpFxDemo.module.scss";
import { ISpFxDemoProps } from "./ISpFxDemoProps";
import { escape } from "@microsoft/sp-lodash-subset";
import { ListaPaesi } from "./models/ListaPaesi";

const SpFxDemo = (props: ISpFxDemoProps) => {
  const [countries, setCountries] = React.useState([]);

  const _getListItems = async (): Promise<ListaPaesi[]> => {
    return await props.SPManager.getListItems();
  };

  const _onGetListItems = async (): Promise<void> => {
    const response: ListaPaesi[] = await _getListItems();
    setCountries(response);
  };

  const onGetListItemsClicked = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    _onGetListItems();
  };

  return (
    <section
      className={`${styles.spFxDemo} ${
        props.hasTeamsContext ? styles.teams : ""
      }`}
    >
      <div className={styles.welcome}>
        <img
          alt=""
          src={
            props.isDarkTheme
              ? require("../assets/welcome-dark.png")
              : require("../assets/welcome-light.png")
          }
          className={styles.welcomeImage}
        />
        <h2>Well done, {escape(props.userDisplayName)}!</h2>
        <div>{props.environmentMessage}</div>
      </div>
      <div>
        <button type="button" onClick={onGetListItemsClicked}>
          Get Countries
        </button>
      </div>
      <div>
        <ul>
          {countries &&
            countries.map((list) => (
              <li key={list.Id}>
                <strong>Id:</strong> {list.Id}, <strong>Title:</strong>
                {list.Title}
              </li>
            ))}
        </ul>
      </div>
    </section>
  );
};

export default SpFxDemo;
