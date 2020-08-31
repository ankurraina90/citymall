import React from 'react';
import { SafeAreaView, ActionSheetIOS } from 'react-native';

//UI Components
import FlatList from 'flatlist-react';
import { Button } from '@ui-kitten/components';
import Box from '../utils/Box'
import Text from '../utils/Text'
import Card from '../utils/Card'
import Header from '../components/Header'

//Redux 
import { useSelector, useDispatch } from 'react-redux';
import * as state from  '../redux/index';

function ListCats ({ navigation }){
    const dispatch = useDispatch();
    const ListCats = useSelector(state.Cats.select_Cats);
    const onPress = (item, index) =>
        ActionSheetIOS.showActionSheetWithOptions(
            {
            options: ["Cancel", "Edit", "Delete"],
                destructiveButtonIndex: 2,
                cancelButtonIndex: 0
            },
            buttonIndex => {
            if(buttonIndex === 2){
                dispatch(state.Cats.deleteData(index));
                }
            }
        );

        renderItem = (item, index) => {
            return (
                <Box key={index}>
                    <Card 
                        name={item.name}
                        breed={item.breed}
                        desc={item.desc}
                        onPress={() => onPress(item, index)}
                    />
                </Box>
            );
          }
    return(
        <Box as={SafeAreaView} backgroundColor='white' flex={1}>
            <Header />

            <Box padding={30}>
                <FlatList
                    list={ListCats}
                    renderItem={renderItem}
                    renderWhenEmpty={() => <Text>List is empty, add content using button</Text>}
                />
            </Box>

            <Box
                flexDirection='column'
                marginTop={70}
                marginRight={110}
                marginLeft={110}
            >
                <Button
                    title='ADD CATS'
                    onPress={() => navigation.navigate('AddCats')}
                >
                    Add Cats
                </Button>
            
            </Box>
        </Box>
    )
}

export default ListCats