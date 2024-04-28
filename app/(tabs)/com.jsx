import { StyleSheet, Text, View, Alert } from 'react-native'
import React from 'react'
import { getAllPosts } from '../../lib/appwrite';
import { useEffect, useState } from 'react';
import useAppwrite from '../../lib/useAppwrite';


const com = () => {
  const {data : posts} = useAppwrite(getAllPosts);
  console.log(posts);
      return (
    <View className="h-screen bg-primary">
      <Text>Community</Text>
    </View>
  )
}

export default com

const styles = StyleSheet.create({})