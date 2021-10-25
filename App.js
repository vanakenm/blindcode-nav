import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function Home(props) {
  let navigation = props.navigation;
  return (
    <View>
      <Text>Home</Text>
      <Button
        title="Go to Detail Bob"
        onPress={() => navigation.navigate('Details', { name: "Bob" })}
        />
      <Button
        title="Go to Detail Rachida"
        onPress={() => navigation.navigate('Details', { name: "Rachida" })}/>
    </View>
  );
}

function Detail(props) {
  let route = props.route;
  let name = route.params.name;
  return (
    <View>
      <Text>Detail for {name}</Text>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Details" component={Detail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

