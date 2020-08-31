import React from 'react';

//Navigation
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//UI Components
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout } from '@ui-kitten/components';

//Screens
import ListCats from './src/screens/ListCats.js'
import AddCats from './src/screens/AddCats'
import EditCats from './src/screens/EditCats'

//Redux
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { store, persistor } from './src/redux/store';

const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ApplicationProvider {...eva} theme={eva.light}>
            <NavigationContainer>
              <Stack.Navigator>
                <Stack.Screen name="ListCats" component={ListCats} options={{headerShown: false}}/>
                <Stack.Screen name="AddCats" component={AddCats} options={{headerShown: false}}/>
                <Stack.Screen name="EditCats" component={EditCats} options={{headerShown: false}}/>
              </Stack.Navigator>
            </NavigationContainer>
        </ApplicationProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
