import React from 'react'
import Box from '../utils/Box'
import Text from '../utils/Text'
import { renderBlank } from 'flatlist-react/lib/___subComponents/uiFunctions'

  export default function Header (){
      return(
        <Box 
            flexDirection='row'
            backgroundColor='#3366ff'
            padding={30}
            justifyContent='center'
        >
            <Text
                color='#FFFFFF'
                position='absolute'
                fontSize={32}
                paddingTop={10}
            >
                Cats Keeper
            </Text>
        </Box>
    )
  }
                