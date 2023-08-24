import { FlatList, Image, Pressable, Text, View } from "react-native";
import { colors, recipeList } from "../Constant";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";

const RecipeCard= ()=>{
    const navigation =  useNavigation();
    return(
        <View>
			<FlatList
				data={recipeList}
				renderItem={({ item }) => (
					<Pressable
						onPress={() => navigation.navigate("RecipeDetail", { item: item })}
						style={{
							backgroundColor: colors.COLOR_LIGHT,
							shadowColor: "#000",
							shadowOffset: { width: 0, height: 4 },
							shadowOpacity: 0.1,
							shadowRadius: 7,
							borderRadius: 16,
							paddingHorizontal:20,
							marginHorizontal: 5,
							marginVertical: 16,
							alignItems: "center",
							paddingHorizontal: 4,
							paddingVertical: 16,
						}}
					>
						<Image
							source={item.image}
							style={{ width: 150, height: 150, resizeMode: "center" }}
						/>
						<Text>{item.name}</Text>
						<View style={{ flexDirection: "row", marginTop: 8 }}>
							<Text>{item.time}</Text>
							<Text> | </Text>
							<View style={{ flexDirection: "row" }}>
								<Text style={{ marginRight: 4 }}>{item.rating}</Text>
								<FontAwesome
									name="star"
									size={16}
									color={colors.COLOR_PRIMARY}
								/>
							</View>
						</View>
					</Pressable>
				)}
				numColumns={2}
				columnWrapperStyle={{
					justifyContent: "space-between",
					
				}}
				showsVerticalScrollIndicator={false}
			/>
        
		</View>
    )
}
export default RecipeCard;