import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { FlatList, Image, RefreshControl, Text, View, StyleSheet, ScrollView, Touchable, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";
import SearchInput from "../../components/SearchInput";
import { images } from "../../constants";
import LottieView from "lottie-react-native";
import { Entypo } from '@expo/vector-icons';



const themes = ['Blockchain', 'Web Development', 'Mobile Development', 'Cybersecurity', 'Cloud Computing',  'AI']

const home = () => {
  return (
    <SafeAreaView className="bg-primary w-full flex-1">

          <View className="flex my-6 px-4 space-y-6">
            <View className="flex justify-between items-start flex-row mb-6">
              <View>
                <Text className="font-pmedium text-sm text-gray-100 mb-3">
                  Welcome Back
                </Text>
                <View className="flex-row space-x-3 justify-center items-center">
                <Entypo name="location" size={24} color="white" />
                <Text className="text-2xl font-psemibold text-white">
                Greater Noida
                </Text>
                </View>
 
              </View>

              <View className="mt-1.5">
              <LottieView source={require('../../assets/animations/sphere.json')}
                 autoPlay loop className="w-9 h-10"
                 resizeMode="contain"
                 />
              
              </View>
            </View>

            <SearchInput />
            <View className="pl-4 flex">
          <ScrollView horizontal showsHorizontalScrollIndicator={false} className="flex-grow">
            {themes.map((theme, index) => (
              <TouchableOpacity 
                key={theme} 
                className={`bg-purple-200 p-2 px-3 rounded-full ${index < themes.length - 1 ? 'mr-2' : ''}`}>
                <Text className="font-pmedium">{theme}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
          </View>
          </View>
      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  )
}

export default home

const styles = StyleSheet.create({})