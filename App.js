import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { createStackNavigator } from '@react-navigation/stack';
import MainAppbar from './components/MainAppbar';
import Home from './screens/Home';
import Settings from './screens/Settings';
import Styles from './Styles';
import ThemeContext from './ThemeContext';



export default function App() {
  const Stack = createStackNavigator();

  return (
    <PaperProvider>
      <NavigationContainer>
        <StatusBar backgroundColor='#666' barStyle='light-content' />
        <Stack.Navigator
          initialRouteName='Home'
          screenOptions={{header: (props) =>
            <MainAppbar {...props} backgroundColor='#666' icon='cog' color='#fff' />
          }}
        >
          <Stack.Screen name="Home">
            {()=>
              <Home />
            }
          </Stack.Screen>
          <Stack.Screen name='Settings' component={Settings}/>
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
