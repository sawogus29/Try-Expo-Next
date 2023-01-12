// import { StyleSheet, Button } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text } from 'react-native';

// import CategoriesScreen from './CategoriesScreen';
// import MealsOverviewScreen from './MealsOverviewScreen';

// const Stack = createNativeStackNavigator();

function App() {
  return (
    <>
      <Text>hello next!</Text>
      {/* <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: '#351401' },
            headerTintColor: 'white',
            contentStyle: { backgroundColor: '#3f2f25' },
          }}
        >
          <Stack.Screen
            name="MealsCategories"
            component={CategoriesScreen}
            options={{
              title: 'All Categories',
            }}
          />
          <Stack.Screen name="MealsOverview" component={MealsOverviewScreen} />
        </Stack.Navigator>
      </NavigationContainer> */}
    </>
  );
}

export default App;
