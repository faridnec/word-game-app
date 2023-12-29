import { View, Text, ListRenderItem} from 'react-native'
import React, { useEffect, useState } from 'react'
import { getMySets, getSets, Set } from '@/data/api';
import { defaultStyleSheet } from '@/constants/Styles';
import { FlatList } from 'react-native-gesture-handler';

const Page = () => {

    const [sets, setSets] = useState<Set[]>([]);
    const [isRefreshing, setIsRefreshing] = useState(false);

    // Load available Sets
    useEffect(() => {
        loadSets();
    }, []);
    
    const loadSets = async () => {
        const data = await getMySets();
        console.log("🚀 ~ file: sets.tsx:19 ~ loadSets ~ data:", data)
        // setSets(data);
    };

    const renderSetRow: ListRenderItem<Set> = ({ item }) => {
        return(
            <View>
                <Text>Test</Text>
            </View>
        )
    }

    return(
        <View style={defaultStyleSheet.container}>
            <FlatList data={sets}  renderItem={renderSetRow} />
        </View>

        // <View>
        //     <Text>Sets</Text>
        // </View>
    )
}

export default Page