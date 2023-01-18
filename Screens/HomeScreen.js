import React from 'react'
import {  Settings, StyleSheet, Text, View } from 'react-native';
import { Box, HStack,VStack,Heading,Center,Input,Icon, ScrollView, } from 'native-base';
import MyTeam from '../Components/MyTeam';
import QuickLinks from '../Components/QuickLinks';
import Celebrations from '../Components/Celebrations';
import MyTasks from '../Components/MyTasks';
import Welcome from '../Components/Welcome';
import Clock from '../Components/Clock';
export default HomeScreen = () => {
    
     

  return (

        <ScrollView>
       <VStack  space={4} alignItems="center">
        <Welcome/>
        <Clock/>
         <MyTeam/> 
        <QuickLinks/>
        <Celebrations/>
        <MyTasks/>
      </VStack>
    </ScrollView>
    
    
  )
}
