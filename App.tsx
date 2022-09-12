import React from 'react';
import {SafeAreaView} from 'react-native';

import {StyledPage} from './src/pages/StyledPage/StyledPage';
import {ContextPage} from './src/pages/ContextPage/ContextPage';
import {FirebasePage} from './src/pages/FirebasePage/FirebasePage';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StyledPage />
      {/* <ContextPage /> */}
      {/* <FirebasePage /> */}
    </SafeAreaView>
  );
};

export default App;
