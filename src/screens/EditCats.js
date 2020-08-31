import React from 'react';
import { SafeAreaView } from 'react-native';
import { Input, Button } from '@ui-kitten/components';

import Box from '../utils/Box'
import Text from '../utils/Text'
import Header from '../components/Header'

function EditCats ({ navigation }){
    const [value, setValue] = React.useState('');
    return(
        <>
            <Box as={SafeAreaView} backgroundColor='white' flex={1}>
                <Header />

                <Box
                    paddingTop={40}
                    paddingLeft={40}
                    paddingRight={40}
                >
                    <Input
                        placeholder='Add Name'
                        value={value}
                        onChangeText={nextValue => setValue(nextValue)}
                    />
                </Box>
                <Box
                    paddingTop={40}
                    paddingLeft={40}
                    paddingRight={40}
                >
                    <Input
                        placeholder='Add Breed'
                        value={value}
                        onChangeText={nextValue => setValue(nextValue)}
                    />
                </Box>
                <Box
                    paddingTop={40}
                    paddingLeft={40}
                    paddingRight={40}
                >
                    <Input
                        placeholder='Add Description'
                        value={value}
                        onChangeText={nextValue => setValue(nextValue)}
                        multiline={true}
                        textStyle={{ minHeight: 120 }}
                    />
                </Box>

                <Box flexDirection='row' padding={50} justifyContent='center'>
                    <Box padding={20}>
                        <Button
                            onPress={() => navigation.goBack()}
                        >
                            Done
                        </Button>
                    </Box>
                    <Box padding={20}>
                        <Button
                            onPress={() => navigation.goBack()}
                            status='danger'
                        >
                            Cancel
                        </Button>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default EditCats