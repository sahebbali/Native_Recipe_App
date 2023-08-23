import { Text, View } from "react-native";


const RecipeDetailsScreen=({navigation, route})=>{
    const {item} = route.params;
    return(
        <View>
            <Text>{item} </Text>
        </View>
    )
}
export default RecipeDetailsScreen;