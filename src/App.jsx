import ModalTest from "./components/custom-modal-popup/modal-test";
import TabTest from "./components/custom-tabs/tab-test";
import GithubProfileFinder from "./components/github-profile-finder";
import ImageSlider from "./components/image-slider";
import LightDarkMode from "./components/light-dark-mode";
import LoadMoreData from "./components/load-more-data";
import QRCodeGenerator from "./components/qr-code-generator";
import ScrollIndicator from "./components/scroll-indicator";
import SearchAutoComplete from "./components/search-autocomplete-with-api";
import TicTacToe from "./components/tic-tac-tow";
import TreeView from "./components/tree-view";
import menus from "./components/tree-view/data";
import RandomColor from "./components/random-color";
import StarRating from "./components/star-rating";
import FeatureFlagGlobalState from "./components/feature-flag/context";
import FeatureFlags from "./components/feature-flag";
import UseFetchHookTest from "./components/use-fetch/test";
import UseOnclickOutsideTest from "./components/use-outside-click/test";
import UseWindowResizeTest from "./components/use-window-resize/test";


export default function App() {
  return (<>
    {/* Random Color Genertor component */}
   {/* <RandomColor/> */ }

   {/* Star Rating Component */}
   {/* <StarRating noOfStars={10}/> */}

   {/* Image Slider Component */}
   {/* <ImageSlider url={"https://picsum.photos/v2/list"} limit={"6"} page={"1"}/> */}

   {/* load more data */}
   {/* <LoadMoreData/> */}

    {/* Tree View Component */}
    {/* <TreeView menus={menus} /> */}

    {/* QR Code generator component */}
     {/* <QRCodeGenerator/>  */}

     {/* Light to dark mode and vice and versa */}
      {/* <LightDarkMode/> */}

      {/* Scroll Indicator component */}
      {/* <ScrollIndicator url={'https://dummyjson.com/products?limit=100'}/> */}
      
      {/* custom tab index */}
      {/* <TabTest/> */}

      {/* custom modal component */}
      {/* <ModalTest/> */}

      {/* Github profile finder */}
      {/* <GithubProfileFinder/> */}

      {/* Search Autocomplete user's list */}
      {/* <SearchAutoComplete/> */}

      {/* Tic tac toe game */}
      {/* <TicTacToe/> */}

      {/* Feature Flag Implementation */}

      {/* <FeatureFlagGlobalState>
        <FeatureFlags/>
      </FeatureFlagGlobalState> */}
      
      {/* Use fetch custom hook */}
      {/* <UseFetchHookTest/> */}

      {/* Use Onclick outside hook */}
      {/* <UseOnclickOutsideTest/> */}

      {/* window resize custom hook */}
      {/* <UseWindowResizeTest/> */}
  </>)
}