import React from 'react'
import { SafeAreaView, Text, View } from 'react-native'
import Header from '../components/Header'
import SearchFilter from '../components/SearchFilter'
import CategoriesFilter from '../components/CategoriesFilter'
import RecipeCard from '../components/RecipeCard'

export default function RecipeListScreen() {
  return (
    <SafeAreaView style={{flex: 1, marginHorizontal: 16 }}>
        <Header headerText={" Hi I am Ali"} headerIcon={"bell-o"} />

        <SearchFilter icon="search" placeholder={"enter your fav recipe"} />

        <View>
            <Text style={{fontSize: 22, fontWeight:"bold" }}>Categories</Text>
            <CategoriesFilter />
        </View>
        <View>
            <Text style={{fontSize: 22, fontWeight:"bold" }}>Recipes</Text>
            <RecipeCard />
        </View>
    </SafeAreaView>
  )
}
