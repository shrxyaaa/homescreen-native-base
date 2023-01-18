import React from 'react'
import { Settings, StyleSheet, Text, View } from 'react-native';
import { Box, HStack,VStack,Heading,Center,Input,Icon,MaterialIcons,NativeBaseProvider,FlatList,Avatar,Spacer } from 'native-base';
import { FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
const  QuickLinks = () => {

        const data = [{
            id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
            title: "Holiday calender",
            link: "",
          }, {
            id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
            title: "Leave Policy",
            link: "",
                    }, {
            id: "58694a0f-3da1-471f-bd96-145571e29d72",
            title: "Payroll Manual",
            link: "",
          }, {
            id: "68694a0f-3da1-431f-bd56-142371e29d72",
            title: "Schedule",
            link: "",
                      }];




        return  <Box   px={3} py={6}   width="96%" m={2}  bg="muted.50" borderRadius={14}  _text={{
            color: "white"
          }} shadow={5}>
              
         <Heading bold fontSize="15" >
          Quick Links
        </Heading>
        <Spacer size={5}/>

        
            <FlatList  horizontal={true} data={data} renderItem={({
      item
    }) => <Box   py="2">
            <HStack  alignItems="center">
              <HStack height={12} rounded={4} mx={3} p={1} bg="primary.100" >
               <Center _text={{
                  color: "muted.700",
                  fontWeight: "bold",
                  fontSize:"xs"
                    }} width={16}>{item.title}</Center> 
               <MaterialCommunityIcons name="arrow-top-right" size={24} color="black" />
              </HStack>
            </HStack>
          </Box>} keyExtractor={item => item.id} />
            </Box>
      };
      export default QuickLinks