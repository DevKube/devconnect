import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { FlatList, Image, RefreshControl, Text, View, StyleSheet, ScrollView, Touchable, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";
import SearchInput from "../../components/SearchInput";
import { images } from "../../constants";
import LottieView from "lottie-react-native";
import { Entypo } from '@expo/vector-icons';
import GradientButton from "../../components/GradientButton";
import HackCard from "../../components/HackCard";
import { Ionicons } from '@expo/vector-icons';
import { Linking } from 'react-native';


const openURL = async (url) => {
  // Check if the URL can be handled
  const supported = await Linking.canOpenURL(url);
  if (supported) {
    // Open the URL if it is supported
    await Linking.openURL(url);
  } else {
    // Alert the user if the URL is not supported
    Alert.alert(`Don't know how to open this URL: ${url}`);
  }
};


const themes = ['Blockchain',  'Cybersecurity', 'Cloud Computing', 'Web Development', 'Mobile Development', 'AI']
const featured = [
  {
    id:1,
    title: 'HackFest',
    image: require('../../assets/images/hack1.webp'),
    registrations: 100,
    stars: 4
  },
  {
    id:2,
    title: 'Innovate X',
    image: require('../../assets/images/hack2.webp'),
    registrations: 250,
    stars: 4
  },
  {
    id:3,
    title: 'Code Cubicle',
    image: require('../../assets/images/hack3.webp'),
    registrations: 1000,
    stars: 4
  },
  {
    id:4,
    title: 'NMIT Hacks',
    image: require('../../assets/images/hack4.webp'),
    registrations: 100,
    stars: 4
  },
  {
    id:5,
    title: 'Aventus',
    image: require('../../assets/images/hack5.webp'),
    registrations: 1000,
    stars: 4
  },
  {
    id:6,
    title: 'HackBlocks ',
    image: require('../../assets/images/hack6.webp'),
    registrations: 250,
    stars: 4
  },
]
const nearhack = [
  {
    id:1,
    title: 'HackWithDelhi',
    image: require('../../assets/images/ha2.webp'),
    location: "Greater Noida",
    stars: 4,
    url: "https://hackwithdelhi.devfolio.co/"
  },
  {
    id:2,
    title: 'Sui Overflow',
    image: require('../../assets/images/ha3.webp'),
    location: "NCR - Online",
    stars: 4,
    url: "https://sui-overflow.devfolio.co/"
  },
]
const home = () => {
  const [activeTheme, setActiveTheme] = useState('Blockchain')
  const [activeHack, setActiveHack] = useState(null)
  return (
    <SafeAreaView className="bg-primary w-full flex-1">
        <ScrollView>
        <View className="flex my-6 px-4 space-y-6">
            <View className="flex justify-between items-start flex-row mb-6">
              <View>
                <Text className="font-pmedium text-lg text-gray-100 mb-3">
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

            {/* themes ScrollView */}

            <View className="pl-4 flex">
          <ScrollView horizontal showsHorizontalScrollIndicator={false} className="flex-grow">
  
            {themes.map((theme, index) => {

                if(theme==activeTheme){
                  //gradient theme
                  return(
                    <GradientButton value={theme} key={theme} containerClass="mr-2"
                    />
                  )
            }
            else{
              return(
                <TouchableOpacity 
                onPress={() => setActiveTheme(theme)}
                  key={theme} 
                  className={`bg-purple-300 p-2 px-3 rounded-full ${index < themes.length - 1 ? 'mr-2' : ''}`}>
                  <Text className="font-pmedium">{theme}</Text>
                </TouchableOpacity>
              )
            }
            })}
                
          </ScrollView>
          </View>

            {/* Hackathon Slider */}
            <View className="mt-3 space-y-4">
              <Text className="ml-4 text-lg font-bold text-white">
                Featured Hackathons
              </Text>
              <View className="pl-4 flex">
          <ScrollView horizontal showsHorizontalScrollIndicator={false} className="flex-grow">
            {
              featured.map((item, index) => {
                return(
                  // hack card
                 
                  <HackCard key={index} hack={item}/>
                  
                )
              })
            }
          </ScrollView>
          </View>
            </View>

            {/* Other Hacks */}
            <View className="mt-3">
                <View className="flex-row justify-between items-center mb-2">
                  <Text className="ml-4 text-lg font-bold text-gray-300">
                    Trending Nearby Hackathons 
                  </Text>
                <TouchableOpacity className="mr-4">
                  <Text className="text-purple-200 font-bold">
                    See All
                  </Text>
                </TouchableOpacity>
                </View>
                <ScrollView style={{height:320}} showsVerticalScrollIndicator={false}>
                {
                  nearhack.map((item, index) => {
                    return(
                      <TouchableOpacity
                      onPress={() => setActiveHack(item.id)}
                      className="mx-4 p-2 mb-2 flex-row"
                      key={index}>
                        <Image source={item.image} className="w-20 h-20 rounded-2xl" />
                        <View className="flex-1 flex justify-center pl-3 space-y-3">
                          <Text className="font-psemibold text-gray-300">{item.title}</Text>
                          <View className="flex-row space-x-3">
                            {/* <View className="flex-row space-x-1">
                              <Text className="text-xs text-gray-600">{item.stars}</Text>
                            </View> */}
                            <View className="flex-row space-x-2">
                            <Entypo name="location" size={15} color="white" />
                              <Text className="text-xs text-gray-400">{item.location} </Text>
                            </View>
                          </View>
                        </View>
                        <View className="flex justify-center items-center">
                        <GradientButton value="Preview" buttonClass="py-2 px-5" onPress={() => openURL(item.url)} />
                        </View>
                      </TouchableOpacity>
                     
                    )
                  })
                }
                </ScrollView>
            </View>
          </View>
      
        </ScrollView>
        <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  )
}

export default home

const styles = StyleSheet.create({})