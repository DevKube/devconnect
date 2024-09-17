// import React from 'react';
// import {
//   StyleSheet,
//   Dimensions,
//   SafeAreaView,
//   View,
//   TouchableOpacity,
//   TextInput,
//   ScrollView,
//   Text,
//   Image,
// } from 'react-native';
// import FeatherIcon from 'react-native-vector-icons/Feather';

// const tags = ['ios', 'android', 'web', 'ui', 'ux'];
// const stats = [
//   { label: 'College', value: 'NSUT' },
//   { label: 'Hackathons', value: '13' },
//   { label: 'Ratings', value: '4.2' },
// ];
// const items = [
//   {
//     icon: 'figma',
//     label: 'UI/UX Designer',
//     company: 'Checkout my Figma Designs',
//     jobType: '24 Designs',
//     years: '2020-present',
//     testimoni: "Rana's mastery of Figma was \ninvaluable during our hackathon. He quickly turned ideas into polished designs,",
//     rate: 4.5,
//     hack: "HackFest",
//     pos: "Runner-Up",
//     ic2 : "user",
//   },
//   {
//     icon: 'github',
//     label: 'Mid-level Designer',
//     company: 'GitHub',
//     jobType: 'ReactJS',
//     years: '2017-2019',
//     testimoni: "Miller's mastery of Figma was \ninvaluable during our hackathon. He quickly turned ideas into polished designs,",    rate: 4.1,
//     hack: "CodeFest",
//     pos: "Runner-Up",
//     ic2 : "user",
//   },
//   {
//     icon: 'twitter',
//     label: 'Junior Designer',
//     company: 'Twitter',
//     jobType: 'Full Time',
//     years: '2015-2017',
//     testimoni: "Miller's mastery of Figma was \ninvaluable during our hackathon. He quickly turned ideas into polished designs,",    rate: 4.0,
//     hack: "HackFest",
//     pos: "Runner-Up",
//     ic2 : "user",
//   },
// ];
// const CARD_WIDTH = Math.min(Dimensions.get('screen').width * 0.75, 400);

// export default function finder() {
//   return (
//     <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
//       <View style={styles.container}>
//         <View style={styles.header}>
//           <View style={styles.headerAction}>
//             <TouchableOpacity
//               onPress={() => {
//                 // handle onPress
//               }}>
//               <FeatherIcon name="chevron-left" size={24} />
//             </TouchableOpacity>
//           </View>

//           <View style={styles.headerSearch}>
//             <View style={styles.headerSearchIcon}>
//               <FeatherIcon
//                 color="#778599"
//                 name="search"
//                 size={17} />
//             </View>

//             <TextInput
//               autoCapitalize="words"
//               autoComplete="name"
//               placeholder="Search..."
//               placeholderTextColor="#778599"
//               style={styles.headerSearchInput} />
//           </View>

//           <View style={[styles.headerAction, { alignItems: 'flex-end' }]}>
//             <TouchableOpacity
//               onPress={() => {
//                 // handle onPress
//               }}>
//               <FeatherIcon name="more-vertical" size={24} />
//             </TouchableOpacity>
//           </View>
//         </View>

//         <ScrollView>
//           <View style={styles.content}>
//             <View style={styles.profile}>
//               <View style={styles.profileTop}>
//                 <View style={styles.avatar}>
//                   <Image
//                     alt=""
//                     source={{
//                       uri: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
//                     }}
//                     style={styles.avatarImg} />

//                   <View style={styles.avatarNotification} />
//                 </View>

//                 <View style={styles.profileBody}>
//                   <Text style={styles.profileTitle}>{'Mahendra Pratap \nRana'}</Text>

//                   <Text style={styles.profileSubtitle}>
//                     UI/UX Designer

//                     {' · '}

//                     <Text style={{ color: '#266EF1' }}>@rana</Text>
//                   </Text>
//                 </View>
//               </View>

//               <Text style={styles.profileDescription}>
//                 Skilled in user research, wireframing, prototyping, and collaborating with cross-functional teams. Pre Final Year Btech CSE at NSUT
//               </Text>

//               <View style={styles.profileTags}>
//                 {tags.map((tag, index) => (
//                   <TouchableOpacity
//                     key={index}
//                     onPress={() => {
//                       // handle onPress
//                     }}>
//                     <Text style={styles.profileTagsItem}>#{tag}</Text>
//                   </TouchableOpacity>
//                 ))}
//               </View>
//             </View>

//             <View style={styles.stats}>
//               {stats.map(({ label, value }, index) => (
//                 <View
//                   key={index}
//                   style={[
//                     styles.statsItem,
//                     index === 0 && { borderLeftWidth: 0 },
//                   ]}>
//                   <Text style={styles.statsItemText}>{label}</Text>

//                   <Text style={styles.statsItemValue}>{value}</Text>
//                 </View>
//               ))}
//             </View>

//             <View style={styles.contentActions}>
//               <TouchableOpacity
//                 onPress={() => {
//                   // handle onPress
//                 }}
//                 style={{ flex: 1, paddingHorizontal: 6 }}>
//                 <View style={styles.btn}>
//                   <Text style={styles.btnText}>Contact</Text>
//                 </View>
//               </TouchableOpacity>

//               <TouchableOpacity
//                 onPress={() => {
//                   // handle onPress
//                 }}
//                 style={{ flex: 1, paddingHorizontal: 6 }}>
//                 <View style={styles.btnPrimary}>
//                   <Text style={styles.btnPrimaryText}>Send Request</Text>
//                 </View>
//               </TouchableOpacity>
//             </View>
//           </View>

//           <View style={styles.list}>
//             <View style={styles.listHeader}>
//               <Text style={styles.listTitle}>My Skillset</Text>

//               <TouchableOpacity
//                 onPress={() => {
//                   // handle onPress
//                 }}>
//                 <Text style={styles.listAction}>View All</Text>
//               </TouchableOpacity>
//             </View>

//             <ScrollView
//               contentContainerStyle={styles.listContent}
//               horizontal={true}
//               showsHorizontalScrollIndicator={false}>
//               {items.map(({ icon, label, company, jobType, years }, index) => (
//                 <TouchableOpacity
//                   key={index}
//                   onPress={() => {
//                     // handle onPress
//                   }}>
//                   <View style={styles.card}>
//                     <View style={styles.cardTop}>
//                       <View style={styles.cardIcon}>
//                         <FeatherIcon
//                           color="#000"
//                           name={icon}
//                           size={24} />
//                       </View>

//                       <View style={styles.cardBody}>
//                         <Text style={styles.cardTitle}>{label}</Text>

//                         <Text style={styles.cardSubtitle}>{company}</Text>
//                       </View>
//                     </View>

//                     <View style={styles.cardFooter}>
//                       <Text style={styles.cardFooterText}>{jobType}</Text>

//                       <Text style={styles.cardFooterText}>{years}</Text>
//                     </View>
//                   </View>
//                 </TouchableOpacity>
//               ))}
//             </ScrollView>
//           </View>

//           <View style={styles.list}>
//             <View style={styles.listHeader}>
//               <Text style={styles.listTitle}>Past Hackathons</Text>

//               <TouchableOpacity
//                 onPress={() => {
//                   // handle onPress
//                 }}>
//                 <Text style={styles.listAction}>View All</Text>
//               </TouchableOpacity>
//             </View>

//             <ScrollView
//               contentContainerStyle={styles.listContent}
//               horizontal={true}
//               showsHorizontalScrollIndicator={false}>
//               {items.map(({ testimoni,rate, hack, ic2, pos }, index) => (
//                 <TouchableOpacity
//                   key={index}
//                   onPress={() => {
//                     // handle onPress
//                   }}>
//                   <View style={styles.card}>
//                     <View style={styles.cardTop}>
//                       <View style={styles.cardIcon}>
//                         <FeatherIcon
//                           color="#000"
//                           name={ic2}
//                           size={24} />
//                       </View>

//                       <View style={styles.cardBody}>
//                         <Text style={styles.cardTitle}>{hack}</Text>

//                         <Text style={styles.cardSubtitle}>{testimoni}</Text>
//                       </View>
//                     </View>

//                     <View style={styles.cardFooter}>
//                       <Text style={styles.cardFooterText}>{pos}</Text>

//                       <Text style={styles.cardFooterText}>Rating : {rate}</Text>
//                     </View>
//                   </View>
//                 </TouchableOpacity>
//               ))}
//             </ScrollView>
//           </View>
//         </ScrollView>
//       </View>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     padding: 0,
//     flexGrow: 1,
//     flexShrink: 1,
//     flexBasis: 0,
//   },
//   /** Header */
//   header: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'flex-start',
//     paddingVertical: 8,
//     paddingHorizontal: 12,
//     borderBottomWidth: 1,
//     borderColor: '#e3e3e3',
//   },
//   headerAction: {
//     width: 40,
//     alignItems: 'flex-start',
//     justifyContent: 'center',
//   },
//   headerSearch: {
//     position: 'relative',
//     flexGrow: 1,
//     flexShrink: 1,
//     flexBasis: 0,
//     backgroundColor: '#F0F0F0',
//     borderRadius: 12,
//     alignItems: 'center',
//     justifyContent: 'center',
//     flexDirection: 'row',
//   },
//   headerSearchIcon: {
//     position: 'absolute',
//     top: 0,
//     bottom: 0,
//     left: 0,
//     width: 34,
//     alignItems: 'center',
//     justifyContent: 'center',
//     zIndex: 2,
//   },
//   headerSearchInput: {
//     paddingVertical: 8,
//     paddingHorizontal: 12,
//     paddingLeft: 34,
//     width: '100%',
//     fontSize: 16,
//     fontWeight: '500',
//   },
//   /** Content */
//   content: {
//     paddingTop: 12,
//     paddingHorizontal: 24,
//   },
//   contentActions: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     marginTop: 18,
//     marginHorizontal: -6,
//     marginBottom: 0,
//   },
//   /** Profile */
//   profile: {
//     paddingTop: 4,
//     paddingBottom: 16,
//   },
//   profileTop: {
//     flexDirection: 'row',
//     alignItems: 'flex-start',
//     justifyContent: 'space-between',
//     marginBottom: 16,
//   },
//   profileBody: {
//     flexGrow: 1,
//     flexShrink: 1,
//     flexBasis: 0,
//     paddingLeft: 16,
//   },
//   profileTitle: {
//     fontSize: 28,
//     fontWeight: 'bold',
//     lineHeight: 32,
//     color: '#121a26',
//     marginBottom: 6,
//   },
//   profileSubtitle: {
//     fontSize: 15,
//     fontWeight: '600',
//     color: '#778599',
//   },
//   profileDescription: {
//     fontSize: 14,
//     fontWeight: '500',
//     lineHeight: 18,
//     color: '#778599',
//   },
//   profileTags: {
//     marginTop: 8,
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'flex-start',
//   },
//   profileTagsItem: {
//     fontSize: 14,
//     fontWeight: '600',
//     lineHeight: 18,
//     color: '#266ef1',
//     marginRight: 4,
//   },
//   /** Avatar */
//   avatar: {
//     position: 'relative',
//   },
//   avatarImg: {
//     width: 80,
//     height: 80,
//     borderRadius: 9999,
//   },
//   avatarNotification: {
//     position: 'absolute',
//     borderRadius: 9999,
//     borderWidth: 2,
//     borderColor: '#fff',
//     bottom: 0,
//     right: -2,
//     width: 21,
//     height: 21,
//     backgroundColor: '#22C55E',
//   },
//   /** Stats */
//   stats: {
//     backgroundColor: '#fff',
//     flexDirection: 'row',
//     padding: 20,
//     borderRadius: 12,
//     shadowColor: '#90a0ca',
//     shadowOffset: {
//       width: 0,
//       height: 4,
//     },
//     shadowOpacity: 0.2,
//     shadowRadius: 20,
//     elevation: 1,
//   },
//   statsItem: {
//     flexDirection: 'column',
//     alignItems: 'center',
//     justifyContent: 'center',
//     flexGrow: 1,
//     flexShrink: 1,
//     flexBasis: 0,
//     borderLeftWidth: 1,
//     borderColor: 'rgba(189, 189, 189, 0.32)',
//   },
//   statsItemText: {
//     fontSize: 14,
//     fontWeight: '400',
//     lineHeight: 18,
//     color: '#778599',
//     marginBottom: 5,
//   },
//   statsItemValue: {
//     fontSize: 16,
//     fontWeight: '600',
//     lineHeight: 20,
//     color: '#121a26',
//   },
//   /** Button */
//   btn: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//     borderRadius: 8,
//     paddingVertical: 8,
//     paddingHorizontal: 16,
//     borderWidth: 2,
//     backgroundColor: 'transparent',
//     borderColor: '#266EF1',
//   },
//   btnText: {
//     fontSize: 14,
//     lineHeight: 20,
//     fontWeight: '700',
//     color: '#266EF1',
//   },
//   btnPrimary: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//     borderRadius: 8,
//     paddingVertical: 8,
//     paddingHorizontal: 16,
//     borderWidth: 2,
//     backgroundColor: '#266EF1',
//     borderColor: '#266EF1',
//   },
//   btnPrimaryText: {
//     fontSize: 14,
//     lineHeight: 20,
//     fontWeight: '700',
//     color: '#fff',
//   },
//   /** List */
//   list: {
//     marginTop: 16,
//   },
//   listHeader: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     paddingHorizontal: 24,
//   },
//   listTitle: {
//     fontSize: 18,
//     fontWeight: '600',
//     lineHeight: 22,
//     color: '#121a26',
//   },
//   listAction: {
//     fontSize: 14,
//     fontWeight: '500',
//     lineHeight: 20,
//     color: '#778599',
//   },
//   listContent: {
//     paddingVertical: 12,
//     paddingHorizontal: 18,
//   },
//   /** Card */
//   card: {
//     width: CARD_WIDTH,
//     paddingVertical: 16,
//     paddingHorizontal: 20,
//     borderRadius: 12,
//     backgroundColor: '#fff',
//     marginHorizontal: 6,
//     shadowColor: '#90a0ca',
//     shadowOffset: {
//       width: 0,
//       height: 4,
//     },
//     shadowOpacity: 0.2,
//     shadowRadius: 4,
//     elevation: 1,
//   },
//   cardTop: {
//     flexDirection: 'row',
//     alignItems: 'top',
//   },
//   cardIcon: {
//     width: 44,
//     height: 44,
//     borderRadius: 9999,
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: '#eff1f5',
//   },
//   cardBody: {
//     paddingLeft: 12,
//   },
//   cardTitle: {
//     fontSize: 15,
//     fontWeight: '600',
//     lineHeight: 18,
//     color: '#121a26',
//     marginBottom: 4,
//   },
//   cardSubtitle: {
//     fontSize: 14,
//     fontWeight: '500',
//     lineHeight: 18,
//     color: '#778599',
//   },
//   cardFooter: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     marginTop: 18,
//   },
//   cardFooterText: {
//     fontSize: 13,
//     fontWeight: '500',
//     lineHeight: 18,
//     color: '#778599',
//   },
// });

import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { BlurView } from 'expo-blur';
import { Feather } from '@expo/vector-icons';

const UserProfile = () => {
  return (
    <SafeAreaView className="bg-primary h-full">
        <BlurView intensity={1} style={styles.blurContainer}>
          <View style={styles.header}>
            <Image
              source={{ uri: 'https://via.placeholder.com/50' }}
              style={styles.avatar}
            />
            <View style={styles.headerText}>
              <Text style={styles.name}>Devin @devin321</Text>
              <Text style={styles.title}>Backend Dev || SDE Intern @Zomato</Text>
            </View>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Skills</Text>
            <View style={styles.skillsContainer}>
              {['tRPC', 'Prisma', 'Nextjs', 'MongoDB', 'Langchain', 'React', 'Firebase', 'Nodejs'].map((skill) => (
                <View key={skill} style={styles.skill}>
                  <Text style={styles.skillText}>{skill}</Text>
                </View>
              ))}
            </View>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Projects</Text>
            <View style={styles.projectsContainer}>
              {[1, 2, 3].map((project) => (
                <View key={project} style={styles.project}>
                  <Text style={styles.projectText}>Project</Text>
                </View>
              ))}
            </View>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Contact | Portfolio | CV</Text>
            <View style={styles.socialContainer}>
              {['discord', 'linkedin', 'github', 'twitter', 'book', 'file'].map((icon) => (
                <Feather key={icon} name={icon} size={24} color="#fff" style={styles.socialIcon} />
              ))}
            </View>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Past Hackathon Achievements</Text>
            <View style={styles.hackathonContainer}>
              {[1, 2, 3, 4, 5, 6].map((hack) => (
                <View key={hack} style={styles.hackathon}>
                  <Text style={styles.hackathonText}>Hack Name</Text>
                </View>
              ))}
            </View>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Testimonial</Text>
            <View style={styles.testimonialContainer}>
              {[
                { name: 'Kevin', role: 'HR Manager', rating: 5.0 },
                { name: 'Peter', role: 'HR Intern', rating: 4.2 },
                { name: 'Ravi', role: 'Designer', rating: 4.9 },
              ].map((testimonial) => (
                <View key={testimonial.name} style={styles.testimonial}>
                  <View style={styles.testimonialHeader}>
                    <Text style={styles.testimonialName}>{testimonial.name}</Text>
                    <Text style={styles.testimonialRating}>{testimonial.rating}</Text>
                  </View>
                  <Text style={styles.testimonialRole}>{testimonial.role}</Text>
                  <Text style={styles.testimonialText}>Feedback</Text>
                </View>
              ))}
            </View>
          </View>
        </BlurView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  gradient: {
    flex: 1,
  },
  blurContainer: {
    flex: 1,
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  headerText: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  title: {
    fontSize: 14,
    color: '#ccc',
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  skill: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 15,
    paddingHorizontal: 10,
    paddingVertical: 5,
    margin: 5,
  },
  skillText: {
    color: '#fff',
  },
  projectsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  project: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 10,
    padding: 20,
    width: '30%',
    alignItems: 'center',
  },
  projectText: {
    color: '#fff',
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  socialIcon: {
    opacity: 0.8,
  },
  hackathonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  hackathon: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 10,
    padding: 10,
    width: '48%',
    marginBottom: 10,
    alignItems: 'center',
  },
  hackathonText: {
    color: '#fff',
  },
  testimonialContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  testimonial: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 10,
    padding: 10,
    width: '30%',
  },
  testimonialHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  testimonialName: {
    color: '#fff',
    fontWeight: 'bold',
  },
  testimonialRating: {
    color: '#ffcc00',
  },
  testimonialRole: {
    color: '#ccc',
    fontSize: 12,
    marginBottom: 5,
  },
  testimonialText: {
    color: '#fff',
  },
});

export default UserProfile;