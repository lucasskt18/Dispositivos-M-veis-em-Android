import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../screens/HomeScreen';
import RegisterPropertyScreen from '../screens/RegisterPropertyScreen';
import CalculateITBIScreen from '../screens/CalculateITBIScreen';
import ListPropertiesScreen from '../screens/ListPropertiesScreen';
import EditPropertyScreen from '../screens/EditPropertyScreen';

const Stack = createNativeStackNavigator();

// Customizando o tema escuro nativo
const CustomDarkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    background: '#1A1A2E',
    card: '#1A1A2E',
    border: '#1A1A2E',
    primary: '#4E54C8',
  },
};

export default function AppNavigator() {
  return (
    <NavigationContainer theme={CustomDarkTheme}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: '#1A1A2E' },
          animation: 'fade',
          animationDuration: 500,
          presentation: 'transparentModal',
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          name="RegisterProperty"
          component={RegisterPropertyScreen}
          options={{
            animation: 'slide_from_right',
          }}
        />
        <Stack.Screen
          name="CalculateITBI"
          component={CalculateITBIScreen}
          options={{
            animation: 'slide_from_right',
          }}
        />
        <Stack.Screen
          name="ListProperties"
          component={ListPropertiesScreen}
          options={{
            animation: 'slide_from_right',
          }}
        />
        <Stack.Screen
          name="EditProperty"
          component={EditPropertyScreen}
          options={{
            animation: 'slide_from_right',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
} 