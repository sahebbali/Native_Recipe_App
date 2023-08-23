import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "../screens/WelcomeScreen";

const Stack = createNativeStackNavigator();
const AppNavigetor=()=>{
return(
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name='welcome' component={WelcomeScreen}/>
        </Stack.Navigator>
    </NavigationContainer>
)
}
export default AppNavigetor;