import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView } from 'react-native';
import Styles from './src/style/styles';
import { Routes } from './src/routes';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style='dark' />
      <SafeAreaView style={Styles.droidSafeArea}>
        <Routes/>
      </SafeAreaView>
    </NavigationContainer>
  );
}