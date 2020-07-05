import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.headingContainer}>
        <Text style={[styles.heading, styles.headingColor]}>
          Here are some boxes of different colors
        </Text>
      </View>
      <View style={[styles.container, styles.cyan]}>
        <Text style={[styles.textColor, styles.text]}>Cyan: #2aa198</Text>
      </View>
      <View style={[styles.container, styles.blue]}>
        <Text style={[styles.textColor, styles.text]}>Blue: #268bd2</Text>
      </View>
      <View style={[styles.container, styles.magenta]}>
        <Text style={[styles.textColor, styles.text]}>Magenta: #d33682</Text>
      </View>
      <View style={[styles.container, styles.orange]}>
        <Text style={[styles.textColor, styles.text]}>Orange: #cb4b16</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  cyan: {
    backgroundColor: '#2aa198',
  },
  blue: {
    backgroundColor: '#268bd2',
  },
  magenta: {
    backgroundColor: '#d33682',
  },
  orange: {
    backgroundColor: '#cb4b16',
  },
  heading: {
    fontWeight: 'bold',
  },
  headingColor: {
    color: '#000',
  },
  textColor: {
    color: 'white',
  },
  text: {
    fontWeight: 'bold',
  },
  headingContainer: {
    marginHorizontal: 20,
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 20,
    marginVertical: 5,
    paddingVertical: 10,
  },
  safeArea: {
    flex: 2,
  },
});

export default App;
