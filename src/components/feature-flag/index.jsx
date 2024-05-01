import { useContext } from "react";
import LightDarkMode from "../light-dark-mode";
import RandomColor from "../random-color";
import SearchAutoComplete from "../search-autocomplete-with-api";
import TicTacToe from "../tic-tac-tow";
import TreeView from "../tree-view";
import { FeatureFlagContext } from "./context";
import menus from "../tree-view/data";

export default function FeatureFlags() {
  const { loading, enabledFlags } = useContext(FeatureFlagContext);
  
  const componetsToRender = [
    {
      key: "showLightAndDarkMode",
      component: <LightDarkMode />
    },
    {
      key: "showTicTacToeBoard",
      component: <TicTacToe />
    },
    {
      key: "showRandomColorGenerator",
      component: <RandomColor />
    },
    {
      key: "showSearchAutoComplete",
      component: <SearchAutoComplete />
    },
    {
      key: "showTreeView",
      component: <TreeView menus={menus} />
    }
  ];

  if (loading) {
    return <h1>Loading data please wait</h1>;
  }

  function checkEnabled(getCurrentKey) {
    return enabledFlags[getCurrentKey];
  }

  return (
    <div>
      <h1>Feature Flags</h1>
      {componetsToRender.map((componentItem) =>
        checkEnabled(componentItem.key) ? componentItem.component : null
      )}
    </div>
  );
}
