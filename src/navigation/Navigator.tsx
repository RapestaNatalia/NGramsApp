import React from 'react';
import {ResultScreen} from '../screens/ResultScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {FormScreen} from '../screens/FormScreen';

export type RootStackParams = {
  Form: undefined;
  Result: string[];
};
export const Navigator = () => {
  const Stack = createNativeStackNavigator<RootStackParams>();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundColor: '#9BBF8D',
        },
      }}>
      <Stack.Screen name="Form" component={FormScreen} />
      <Stack.Screen name="Result" component={ResultScreen} />
    </Stack.Navigator>
  );
};
