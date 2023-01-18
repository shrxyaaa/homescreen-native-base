import React from 'react'
import { Settings, StyleSheet, View } from 'react-native';
import { Text, Box, HStack,VStack,Heading,Center,Input,Icon,MaterialIcons,NativeBaseProvider,FlatList,Avatar,Spacer } from 'native-base';
import { Ionicons, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
const  Welcome = () => {

        const data = [{
            id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
            firstName: "Aafreen",
            timeStamp: "12:47 PM",
            role: "UX Designer",
            bg:"yellow.100",
            color:"yellow.700",
            bgcolor:"yellow.400",
            avatarUrl: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          }, {
            id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
            firstName: "Sujitha",
            timeStamp: "11:11 PM",
            role: "UX Designer",
            bg:"primary.100",
            color:"primary.700",
            bgcolor:"primary.400",
            avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyEaZqT3fHeNrPGcnjLLX1v_W4mvBlgpwxnA&usqp=CAU"
          }, {
            id: "58694a0f-3da1-471f-bd96-145571e29d72",
            firstName: "Anci",
            timeStamp: "6:22 PM",
            role: "UX Designer",
            bg:"error.100",
            color:"error.700",
            bgcolor:"error.400",
            avatarUrl: "https://miro.medium.com/max/1400/0*0fClPmIScV5pTLoE.jpg"
          }, {
            id: "68694a0f-3da1-431f-bd56-142371e29d72",
            firstName: "Aniket",
            timeStamp: "8:56 PM",
            role: "Developer",
            bg:"success.100",
            color:"success.700",
            bgcolor:"success.400",
            avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr01zI37DYuR8bMV5exWQBSw28C1v_71CAh8d7GP1mplcmTgQA6Q66Oo--QedAN1B4E1k&usqp=CAU"
          }, {
            id: "28694a0f-3da1-471f-bd96-142456e29d72",
            firstName: "Kiara",
            timeStamp: "12:47 PM",
            role: "UX Designer",
            bg:"violet.100",
            color:"violet.700",
            bgcolor:"violet.400",
            avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU"
          }];

          const announce=[
            {
              id: "1",
              msg: "Employees Are Expected To Clock...",
              timeStamp: "1 hour ago",
              icon: "md-time-outline",
              bg:"orange.100",
              iconbg:"amber.300",
              color:"orange"
            }, {
              id: "2",
              msg: "Meeting at 7 PM",
              timeStamp: "3 hours ago",
              icon: "list",
              bg:"error.100",
              iconbg:"error.300",
              color:"red"
             }

          ];


    const Announcements=()=>{

      return <Box mx={3}>
        <HStack px={4} justifyContent="space-between">
         <Heading  fontSize="15" >
      Announcements
    </Heading>
    <Center  _text={{
      color: "tertiary.500",
      fontWeight: "bold",
      underline:"true",
        }}>
          View All
        </Center>
        </HStack>

    <FlatList  horizontal={true} data={announce} renderItem={({
item
}) => <Box   py="2">
<HStack  alignItems="center">
<Box rounded={14} m={3} height={12} width={300} bg={item.bg} >
    
   
<HStack justifyContent="center" >
        <Box my="1.5" rounded={5} justifyContent="center" alignItems="center" size={9} bg={item.iconbg}>
        <Ionicons  name={item.icon} size={26} color={item.color} />
        </Box>
               <VStack p={2} height={12} width={240}  justifyContent="center">
              
               <Box  _text={{
       color: "gray.800",
       fontWeight: "bold",
       fontSize:"13"
         }} >
                 {item.msg}
               </Box >
               <Box _text={{
       color: "gray.600",
       fontWeight: "bold",
       fontSize:"10px"
         }}  >
                 {item.timeStamp}
               </Box >
               </VStack>
       
           </HStack>



</Box>
</HStack>
</Box>} keyExtractor={item => item.id} />
</Box>
    }



    const Welcome=()=>{

      return <Box mx={3}> 

<Text m="auto" color="orange.300"  fontSize="4xl" mt={3} italic bold>Welcome</Text>
    

    <FlatList  horizontal={true} data={data} renderItem={({
item
}) => <Box   py="2">
<HStack  alignItems="center">
<Center borderColor={item.bgcolor} borderWidth={1} rounded={14} m={4} height={32} width={24} bg={item.bg} >
<VStack  justifyContent="space-between">
              <Avatar size="48px" m="auto" source={{
          uri: item.avatarUrl
        }} />
              
                <Center  _text={{
        color: item.color,
        fontWeight: "bold",
        fontSize:"sm"
          }}>
                  {item.firstName}
                </Center>
                <Center _text={{
        color: "gray.500",
        fontWeight: "bold",
        fontSize:"xs"
          }}>{item.role}</Center>
                <Center _text={{
        color: "gray.500",
        fontWeight: "bold",
        fontSize:"xs"
          }}>Joined today</Center>
            </VStack>
</Center>
</HStack>
</Box>} keyExtractor={item => item.id} />
</Box>
    }

        return  <Box    py={5}  width="100%" m={2}  bg="muted.300" borderRadius={14}  _text={{
            color: "white"
          }} shadow={5}>
              <HStack m="auto" mt={16} mb={8} justifyContent="center">
              <Input m={2}  placeholder="Search" variant="filled" height={8} width="65%" 
              borderRadius="10" py="1" px="2"
               InputLeftElement={ <Icon m={2} as={Ionicons} name="search" />} />
              <Box mt={1}><MaterialCommunityIcons name="chat" size={36}   color="#009933" />
              </Box>
              </HStack>
              
      <Announcements />
        <Box bg="muted.100" width="100%"  height={2} />
       <Welcome/> 
</Box>
      };
      export default Welcome