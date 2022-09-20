import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Components/home';
import News from './Components/news';



const Stack = createNativeStackNavigator();

const App = () => {

  return (
    <NavigationContainer >
      <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
        <Stack.Screen
          name="home"
          component={Home}
          options={{ title: 'Home' }}
        />
        <Stack.Screen name="News" component={News} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;