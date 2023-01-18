import React from 'react'
import { Settings, StyleSheet, Text, View } from 'react-native';
import { Box, HStack,VStack,Heading,Center,Input,Icon,MaterialIcons,NativeBaseProvider,FlatList,Avatar,Spacer } from 'native-base';
const  MyTasks = () => {

      
  const data = [{
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "Attendence",
    color:"primary.400",
    count: "8",
    }, {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Leave",
    color:"red.300",
    count: "4",
    }, {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Job Offers",
    color:"violet.400",
    count: "10",
    }, {
    id: "68694a0f-3da1-431f-bd56-142371e29d72",
    title: "Interview Schedule",
    color:"orange.200",
    count: "20",
    }];




return  <Box   px={3} py={6}   width="96%" m={2}  bg="muted.50" borderRadius={14}  _text={{
    color: "white"
  }} shadow={5}>
      
 <Heading  bold fontSize="15" >
  My Tasks
</Heading>
<Spacer size={5}/>

    <FlatList data={data}  renderItem={({
item
}) => <Box borderColor={item.color} borderWidth={1} my={4} rounded={20}  >
    <HStack height={16}  justifyContent="space-between" p={4}>

        <Box 
        mx="2"
        width={24} 
       
        _text={{
      color: "gray.800",
      fontWeight: "bold",
     
        }} justifyContent="center" height={10}  color="coolGray.800" bold>
          {item.title}
        </Box>
        <Center width={6} height={10}  color="coolGray.800" bold>
          {item.count}
        </Center>
        
   
        <Center width={32} height={10}  _text={{
      color: "tertiary.500",
      fontWeight: "bold",
      underline:"true",
        }}>
          View
        </Center>
        
    </HStack>
  </Box>} keyExtractor={item => item.id} />

    </Box>
      };
      export default MyTasks