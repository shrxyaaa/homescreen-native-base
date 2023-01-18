import React from 'react'
import { Settings, StyleSheet, Text, View } from 'react-native';
import { Box, HStack,VStack,Heading,Center,Input,Icon,MaterialIcons,NativeBaseProvider,FlatList,Avatar,Spacer } from 'native-base';
import { FontAwesome } from '@expo/vector-icons';
const  Celebrations = () => {

        const data = [{
            id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
            firstName: "Aafreen",
            timeStamp: "12:47 PM",
            occasion: "Birthday",
            bg:"success.100",
            color:"success.700",
            avatarUrl: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          }, {
            id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
            firstName: "Sujitha",
            timeStamp: "11:11 PM",
            occasion: "Marriage Anniversary",
            bg:"primary.100",
            color:"primary.700",
            avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyEaZqT3fHeNrPGcnjLLX1v_W4mvBlgpwxnA&usqp=CAU"
          }, {
            id: "58694a0f-3da1-471f-bd96-145571e29d72",
            firstName: "Anci",
            timeStamp: "6:22 PM",
            occasion: "Kid's Birthday",
            bg:"violet.100",
            color:"violet.700",
            avatarUrl: "https://miro.medium.com/max/1400/0*0fClPmIScV5pTLoE.jpg"
          }, {
            id: "68694a0f-3da1-431f-bd56-142371e29d72",
            firstName: "Aniket",
            timeStamp: "8:56 PM",
            occasion: "Work Anniversary",
            bg:"orange.100",
            color:"orange.700",
            avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr01zI37DYuR8bMV5exWQBSw28C1v_71CAh8d7GP1mplcmTgQA6Q66Oo--QedAN1B4E1k&usqp=CAU"
          }];




        return  <Box   px={3} py={6}   width="96%"   bg="muted.50" borderRadius={14}  _text={{
            color: "white"
          }} shadow={5}>
              
         <Heading bold fontSize="15" >
          Celebrations
        </Heading>
        <Spacer size={5}/>
       
            <FlatList data={data}  renderItem={({
      item
    }) => <Box bg={item.bg} my={4} rounded={20}  >
            <HStack height={16}  justifyContent="space-between" p={4}>

                <Center width={20} height={10} 
                  _text={{
                    fontSize:"sm",
                    fontWeight: "bold"
                      }}>
                  {item.occasion}
                </Center>
                
                <Avatar alignSelf="center" size="80px" source={{
          uri: item.avatarUrl
        }} />
                <Center width={32} height={10}  _text={{
      color: item.color,
      fontWeight: "bold",
      fontSize:"lg"  
        }}>
          {item.firstName}
        </Center>
        <Icon alignSelf="center"  as={FontAwesome} name="angle-right" size="xl" />      
            </HStack>
          </Box>} keyExtractor={item => item.id} />

            </Box>
      };
      export default Celebrations