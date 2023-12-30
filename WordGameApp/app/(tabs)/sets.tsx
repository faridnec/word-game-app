import { View, Text, ListRenderItem, StyleSheet, TouchableOpacity, RefreshControl} from 'react-native'
import React, { useEffect, useState } from 'react'
import { getMySets, Set } from '@/data/api';
import { defaultStyleSheet } from '@/constants/Styles';
import { FlatList } from 'react-native-gesture-handler';
import { Link } from 'expo-router';

const Page = () => {

    const [sets, setSets] = useState<{ id: string; set: Set; canEdit: boolean }[]>([]);
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

    const renderSetRow: ListRenderItem<{ id: string; set: Set; canEdit: boolean }> = ({
        item: { set, canEdit },
      }) => {
        
        return (
            <View>
                <Text>Test</Text>
            </View>
          );
      }


    return(
        <View style={styles.container}>
        {!sets.length && (
          <Link href={'/(tabs)/search'} asChild>
            <TouchableOpacity style={{}}>
              <Text style={{ textAlign: 'center', padding: 20, color: '#3f3f3f' }}>
                Add your first set!
              </Text>
            </TouchableOpacity>
          </Link>
        )}
  
        <FlatList
          data={sets}
          renderItem={renderSetRow}
          refreshControl={<RefreshControl refreshing={isRefreshing} onRefresh={loadSets} />}
        />
      </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    setRow: {
      margin: 8,
      padding: 16,
      backgroundColor: '#fff',
      borderRadius: 8,
    },
    rowTitle: {
      fontSize: 16,
      fontWeight: '500',
    },
  });

export default Page