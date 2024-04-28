import { useState } from "react";
import { ResizeMode, Video } from "expo-av";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";

import { icons } from "../constants";

const MediaCard = ({ title, creator, avatar, thumbnail, media, caption, category }) => {
  const [play, setPlay] = useState(false);

  return (
    <View className="flex flex-col items-center px-4 mb-14">
      <View className="flex flex-row gap-3 items-start">
        <View className="flex justify-center items-center flex-row flex-1">
          <View className="w-[46px] h-[46px] rounded-lg border border-secondary flex justify-center items-center p-0.5">
            <Image
              source={{ uri: avatar }}
              className="w-full h-full rounded-lg"
              resizeMode="cover"
            />
          </View>

          <View className="flex justify-center flex-1 ml-3">
        <View className="flex-row justify-between items-center w-full">
          <Text
            className="font-psemibold text-sm text-white"
            numberOfLines={1}
          >
            {title}
          </Text>
          <View style={styles.textContainer}>
                <Text
                    style={styles.textStyle}
                    numberOfLines={1}
                >
                    {category}
                </Text>
        </View>

        </View>
        
        <Text
          className="text-xs text-gray-100 font-pregular"
          numberOfLines={1}
        >
          {creator}
        </Text>
      </View>
    </View>

        <View className="pt-2">
          <Image source={icons.menu} className="w-5 h-5" resizeMode="contain" />
        </View>
      </View>

        <Text
              className="text-xs text-gray-100 font-pregular mt-2 w-full"
              numberOfLines={5}
            >
              {caption}
            </Text>

      {play ? (
        <Video
          source={{ uri: media }}
          className="w-full h-60 rounded-xl mt-3"
          resizeMode={ResizeMode.CONTAIN}
          useNativeControls
          shouldPlay
          onPlaybackStatusUpdate={(status) => {
            if (status.didJustFinish) {
              setPlay(false);
            }
          }}
        />
      ) : (
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => setPlay(true)}
          className="w-full h-60 rounded-xl mt-3 relative flex justify-center items-center"
        >
          <Image
            source={{ uri: thumbnail }}
            className="w-full h-full rounded-xl mt-3"
            resizeMode="cover"
          />

          <Image
            source={icons.play}
            className="w-12 h-12 absolute"
            resizeMode="contain"
          />
        </TouchableOpacity>
      )}
    </View>
  );
};
const styles = {
    textContainer: {
      borderWidth: 1,          
      borderColor: '#ad5de3',    
      borderRadius: 5,           
      padding: 3,                
    },
    textStyle: {
      color: '#ad5de3',           
      fontSize: 18,             
      fontWeight: 'bold',       
    },
  };

  
export default MediaCard;