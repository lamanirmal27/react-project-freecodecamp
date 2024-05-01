const dummyApiResponse = {
  showLightAndDarkMode: true,
  showTicTacToeBoard: true,
  showRandomColorGenerator: true,
  showSearchAutoComplete: true,
  showTreeView: false,
};

function featureFlagsDataServiceCall() {
  return new Promise((resolve, reject) => {
    if (dummyApiResponse) setTimeout(() => resolve(dummyApiResponse), 500);
    else reject("Some error occured!! please try again later");
  });
}

export default featureFlagsDataServiceCall;
