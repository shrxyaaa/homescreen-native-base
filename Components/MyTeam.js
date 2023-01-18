import React from 'react'
import { Settings, StyleSheet, Text, View } from 'react-native';
import { Flex,Box, HStack,VStack,Heading,Center,Input,Icon,MaterialIcons,NativeBaseProvider,FlatList,Avatar,Spacer } from 'native-base';
import { MaterialCommunityIcons } from '@expo/vector-icons';
const  MyTeam = () => {

        const data = [{
            id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
            firstName: "Aafreen",
            alias:"Aaf",
            attendence: "Present",
            role: "UX Designer",
             bg:"success.100",
            color:"success.700",
            avatarUrl: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          
        }, {
            id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
            firstName: "Sujitha",
            alias:"Suj",
            attendence: "Present",
            role: "Trainee",
             bg:"primary.100",
            color:"primary.700",
            avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyEaZqT3fHeNrPGcnjLLX1v_W4mvBlgpwxnA&usqp=CAU"
          }, {
            id: "58694a0f-3da1-471f-bd96-145571e29d72",
            firstName: "Anci",
            alias:"Anc",
            attendence: "Absent",
            role: "HR",
             bg:"yellow.100",
            color:"yellow.700",
            avatarUrl: "https://miro.medium.com/max/1400/0*0fClPmIScV5pTLoE.jpg"
          }, {
            id: "68694a0f-3da1-431f-bd56-142371e29d72",
            firstName: "Aniket",
            alias:"Ani",
            attendence: "Present",
            role: "Developer",
             bg:"error.100",
            color:"error.700",
            avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr01zI37DYuR8bMV5exWQBSw28C1v_71CAh8d7GP1mplcmTgQA6Q66Oo--QedAN1B4E1k&usqp=CAU"
          }, {
            id: "28694a0f-3da1-471f-bd96-142456e29d72",
            firstName: "Kiara",
            alias:"Kia",
            attendence: "Present",
            role: "HR",
             bg:"violet.100",
            color:"violet.700",
            avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU"
          }];




        return  <Box   px={3} py={6}   width="96%" m={2}  bg="muted.50" borderRadius={14}  _text={{
            color: "white"
          }} shadow={5}>
              
              <HStack  justifyContent="space-between">
         <Heading  fontSize="15" >
      My Team
    </Heading>
    <Center  _text={{
      color: "tertiary.500",
      fontWeight: "bold",
      underline:"true",
        }}>
          View All
        </Center>
        </HStack>
        <Spacer size={5}/>
        <FlatList  horizontal={true} data={data} renderItem={({
      item
    }) => <Box   py="2">
            <HStack  alignItems="center">
              <Center m={3}  height={10} width={16} rounded={8} bg={item.bg} 
              _text={{
                color:item.color,
                fontWeight: "bold"
              }}
              >
                {item.alias}
              </Center>
            </HStack>
          </Box>} keyExtractor={item => item.id} />

            <Spacer/>
            <FlatList data={data} renderItem={({
      item
    }) => <Box   p="2" >
            <HStack  justifyContent="space-between">
              <Avatar size="48px" source={{
          uri: item.avatarUrl
        }} />
              
                <Box width={20}  justifyContent="center" color="coolGray.800" _text={{
                fontWeight: "bold"
              }}>
                  {item.firstName}
                </Box>
                <Box width={16} justifyContent="center"  color="coolGray.600">
                  {item.role}
                </Box>
                <HStack>
                <Box height={6} my="3" p={2}  justifyContent="center"  fontSize="xs" color="coolGray.800">
                <MaterialCommunityIcons  name="circle" size={8} color="#33cc33" />
              </Box>
              <Box   width={16}   justifyContent="center"  fontSize="xs" color="coolGray.800">
                {item.attendence}
              </Box>
              </HStack>
            </HStack>
          </Box>} keyExtractor={item => item.id} />

            </Box>
      };
      export default MyTeam