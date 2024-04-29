import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';


const CategoryPicker = ({ selectedCategory, onCategoryChange }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Category:</Text>
      <Picker
        selectedValue={selectedCategory}
        style={styles.picker}
        onValueChange={(itemValue, itemIndex) => onCategoryChange(itemValue)}
      >
        <Picker.Item label="Finders" value="finders" />
        <Picker.Item label="Hackathons" value="hackathons" />
        <Picker.Item label="Projects" value="Projects" />
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 7,
    marginBottom: 20,
    backgroundColor: '#fff',
    borderRadius: 5,
  },
  label: {
    fontSize: 16,
    paddingLeft: 10,
    paddingTop: 10,
  },
  picker: {
    height: 44,
    width: '100%',
  },
});

export default CategoryPicker;
