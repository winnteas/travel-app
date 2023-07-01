import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Landing from './pages/Landing';
import Question1 from './pages/Question1';
import Question2 from './pages/Question2';
import Question3 from './pages/Question3';
import Question4 from './pages/Question4';
import Home from './pages/Home';
import Auth from './pages/Auth';

import * as React from 'react';
import {
  MD3LightTheme as DefaultTheme,
  PaperProvider,
} from 'react-native-paper';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    fontColour: '#6f6f6f',
    darkGrey: '#1A1A1A',
    onSurfaceVariant: 'grey',
    background: '#F2F2F2',
  },
};

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: true,
          headerTitle: ''
        }}
      >
        <Stack.Screen
          name="Landing"
          component={Landing}
        />
        <Stack.Screen
          name="Question1"
          component={Question1}
        />
        <Stack.Screen
          name="Question2"
          component={Question2}
        />
        <Stack.Screen
          name="Question3"
          component={Question3}
        />
        <Stack.Screen
          name="Question4"
          component={Question4}
        />
        <Stack.Screen
          name="Home"
          component={Home}
        />
        <Stack.Screen
          name="Auth"
          component={Auth}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
