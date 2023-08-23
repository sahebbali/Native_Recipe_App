import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "../screens/WelcomeScreen";
import RecipeListScreen from "../screens/RecipeListScreen";
import RecipeDetailsScreen from "../screens/RecipeDetailsScreen";

const Stack = createNativeStackNavigator();
const AppNavigetor=()=>{
return(
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name='welcome' component={WelcomeScreen}/>
            <Stack.Screen name='RecipeList' component={RecipeListScreen}/>
            <Stack.Screen name='RecipeDetail' component={RecipeDetailsScreen}/>
        </Stack.Navigator>
    </NavigationContainer>
)
}
export default AppNavigetor;