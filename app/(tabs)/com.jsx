import { StyleSheet, Text, View, Alert, FlatList, ScrollView } from 'react-native'
import React from 'react'
import { getAllPosts } from '../../lib/appwrite';
import { useEffect, useState } from 'react';
import useAppwrite from '../../lib/useAppwrite';
import MediaCard from '../../components/MediaCard';


const com = () => {
  const {data : posts} = useAppwrite(getAllPosts);
      return (
        <ScrollView className="h-screen bg-primary">
     <FlatList
        data={posts}
        keyExtractor={(item) => item.$id}
        renderItem={({ item }) => (
          <MediaCard
            title={item.title}
            thumbnail={item.thumbnail}
            media={item.media}
            creator={item.creator.username}
            avatar={item.creator.avatar}
          />
        )}
      />
        </ScrollView>
    
  )
}

export default com

const styles = StyleSheet.create({})