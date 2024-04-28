import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, SafeAreaView } from 'react-native'
import { Link, router } from 'expo-router';
import LottieView from 'lottie-react-native';
import CustomButton from '../components/CustomButton';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
    <StatusBar style="auto" />
    <View style={styles.hero}>
    <LottieView source={require('../assets/animations/sphere.json')}
                 autoPlay loop style={styles.heroImage}
                 />
    </View>
    <View style={styles.content}>
      <View style={styles.contentHeader}>
        <Text style={styles.title}>
        Join Forces with Peers Near and Far{'\n'}with{' '}
          <View style={styles.appName}>
            <Text style={styles.appNameText}>DevConnect</Text>
          </View>
        </Text>
        <Text style={styles.text}>
        A platform for students to connect, collaborate, and build together
        </Text>
      </View>

      <CustomButton
            title="Get Started"
            handlePress={() => router.push('/sign-in')}
            containerStyles="w-full mt-7"
          />
 
    </View>
  </SafeAreaView>
);
}

const styles = StyleSheet.create({
container: {
  flex: 1,
  backgroundColor: '#161622',
},
title: {
  fontSize: 28,
  fontWeight: '500',
  fontFamily: 'Poppins-SemiBold',
  color: '#bee9eb',
  textAlign: 'center',
  marginBottom: 12,
  lineHeight: 40,
},
text: {
  fontSize: 15,
  lineHeight: 24,
  fontWeight: '400',
  color: '#9992a7',
  textAlign: 'center',
},
/** Hero */
hero: {
  margin: 12,
  borderRadius: 16,
  padding: 16,
},
heroImage: {
  width: '100%',
  height: 400,
},
/** Content */
content: {
  flex: 1,
  justifyContent: 'space-between',
  paddingVertical: 24,
  paddingHorizontal: 24,
},
contentHeader: {
  paddingHorizontal: 24,
},
appName: {
  backgroundColor: '#fff2dd',
  transform: [
    {
      rotate: '-5deg',
    },
  ],
  paddingHorizontal: 6,
},
appNameText: {
  fontSize: 28,
  fontWeight: '700',
  color: '#281b52',
},
/** Button */
button: {
  backgroundColor: '#56409e',
  paddingVertical: 12,
  paddingHorizontal: 14,
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 12,
},
buttonText: {
  fontSize: 15,
  fontWeight: '500',
  color: '#fff',
},
});



      // <View style={styles.container}>
    //   <Text className="text-3xl font-pblack">DevConnect</Text>
    //   <StatusBar style="auto" />
    //     <Link href="/home">Home</Link>
    // </View>