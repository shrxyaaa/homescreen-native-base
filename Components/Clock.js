import React, { useState } from 'react'
import { Settings, StyleSheet, Text, View } from 'react-native';
import { Box, HStack,VStack,Heading,Center,Input,Icon,MaterialIcons,NativeBaseProvider,FlatList,Avatar,Spacer } from 'native-base';
import { FontAwesome5, Ionicons } from '@expo/vector-icons';
const  Clock = () => {

        
  var date = new Date().getDate();
  var month = new Date().getMonth() + 1;
  var year = new Date().getFullYear();

        return  <Box   px={3} py={2}   width="90%" m={2}  bg="darkBlue.50" borderRadius={16}  _text={{
            color: "white"
          }} >
         
         <HStack justifyContent="space-between">
        
         <Ionicons name="time-sharp" size={58} color="#0077b3" />
                <VStack  justifyContent="center">
                <Box _text={{
        color: "gray.800",
        fontWeight: "bold",
        fontSize:"xs"
          }} >
                  {date + '/' + month + '/' + year}
                </Box >
                <Box  _text={{
        color: "gray.800",
        fontWeight: "bold",
        fontSize:"xs"
          }} >
                  Clock In-hh:mm AM
                </Box >
                <Box _text={{
        color: "gray.800",
        fontWeight: "bold",
        fontSize:"xs"
          }}  >
                  Clock Out-hh:mm PM
                </Box >
                </VStack>
                <Center alignSelf="center" height={8}
                 bg="lightBlue.600" width="25%" 
                 rounded={10}
                 _text={{
                  color: "muted.50",
                  fontWeight: "bold",
                    }}
                  >
                Clock In
              </Center>
              <Icon alignSelf="center"  as={FontAwesome5} name="angle-right" size="xl" />
           
            </HStack>

            </Box>
      };
      export default Clock