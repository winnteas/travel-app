import React from 'react'
import {StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const Home = ({navigation}) => {
    return (
        <View style={styles.container}>
          <StatusBar style="auto" />
            <Text>Playlist details</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    }
  });

export default Home