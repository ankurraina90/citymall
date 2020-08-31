import React, {useState} from 'react';
import { SafeAreaView, Alert } from 'react-native';
import { Input, Button } from '@ui-kitten/components';

import Box from '../utils/Box';
import Text from '../utils/Text';
import Header from '../components/Header'
import { useDispatch } from 'react-redux';
import * as state from  '../redux/index';

function AddCats ({ navigation }){
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [breed, setBreed] = useState('');
    const [desc, setDesc] = useState('');

    const onPress = () => {
        if (name === '') Alert.alert('Alert!!', 'Please enter name');
        else if (breed === '') Alert.alert('Alert!!', 'Please enter breed');
        else if (desc === '') Alert.alert('Alert!!', 'Please enter description');
        else {
          dispatch(state.Cats.saveData({ name, breed, desc }));
          navigation.goBack();
        }
      };

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
                        placeholder='Add Title'
                        value={name}
                        onChangeText={nextValue => setName(nextValue)}
                    />
                </Box>
                <Box
                    paddingTop={40}
                    paddingLeft={40}
                    paddingRight={40}
                >
                    <Input
                        placeholder='Add Breed'
                        value={breed}
                        onChangeText={nextValue => setBreed(nextValue)}
                    />
                </Box>
                <Box
                    paddingTop={40}
                    paddingLeft={40}
                    paddingRight={40}
                >
                    <Input
                        placeholder='Add Description'
                        value={desc}
                        onChangeText={nextValue => setDesc(nextValue)}
                        multiline={true}
                        textStyle={{ minHeight: 120 }}
                    />
                </Box>

                <Box flexDirection='row' padding={50} justifyContent='center'>
                    <Box padding={20}>
                        <Button
                            onPress={() => onPress()}
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

export default AddCats