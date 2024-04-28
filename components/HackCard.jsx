import { StyleSheet, Text, View, Image , TouchableOpacity} from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { FontAwesome6 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const HackCard = ({hack}) => {
  return (
    <View className="mr-4 relative ">
      <Image
        source={hack.image}
        className="w-80 h-60 rounded-3xl"
      />
      <LinearGradient
      colors={['transparent', 'rgba(0,0,0,0.6)']}
      className="absolute p-4 w-full h-full flex justify-between rounded-3xl"
      >
        <View className="flex-row justify-end">
            <TouchableOpacity className="p-3 rounded-full"
            style={{backgroundColor:'rgba(255,255,255,0.3'}}>
                
                <FontAwesome6 name="arrow-right-to-bracket" size={24} color="white" />
        </TouchableOpacity>
        </View>
        <View className="space-y-1">
            <Text className="text-xl font-bold text-gray-300">
                {hack.title}
            </Text>
            <View className="flex-row items-center space-x-2">
        <Ionicons name="people" size={24} color="white" />
            <Text className="text-gray-300 text-sm font-psemibold">{hack.registrations} Registrations</Text>
        </View>
        </View>

      </LinearGradient>
      
    </View>
  )
}

export default HackCard
