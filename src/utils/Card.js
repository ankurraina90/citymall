import Box from './Box';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import Text from './Text'

export default function Card({ name, breed, desc, onPress }) {
  const Button_Click = () => onPress();
  return (  
        <Box
          flexDirection='column'
          padding={20}
        >
          <TouchableOpacity onPress={Button_Click}>
            <Box flexDirection='row' padding={2}>
              <Box flexDirection='column' padding={2}>
                <Text padding={2}>Name : </Text>
                <Text padding={2}>Breed:</Text>
                <Text padding={2}>Description:</Text>
              </Box>
              <Box flexDirection='column' padding={2}>
                <Text padding={2}> {name}</Text>
                <Text padding={2}> {breed}</Text>
                <Text padding={2}> {desc}</Text>
              </Box>
            </Box> 
          </TouchableOpacity>
        </Box> 
      ) 
  }
