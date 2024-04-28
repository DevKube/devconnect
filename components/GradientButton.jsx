import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'

const GradientButton = (props) => {
  return (
   <LinearGradient
   colors={['rgba(9,181,211,0.9)', 'rgba(58,131,244,0.9)']}
   end={{x:1, y:1}}
    start={{x:0.1, y:0.2}}
    className={`rounded-full ${props.containerClass}`}
   >

    <TouchableOpacity className={`p-2 px-3 mr-2 ${props.buttonClass}`}>
        <Text className={`font-psemibold`}>{props.value}</Text>
    </TouchableOpacity>

   </LinearGradient>
  )
}

export default GradientButton

const styles = StyleSheet.create({})