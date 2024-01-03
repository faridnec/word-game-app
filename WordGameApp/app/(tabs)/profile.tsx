import { View, Text, ListRenderItem, FlatList, StyleSheet, RefreshControl } from 'react-native';
import React, { useEffect, useState } from 'react';
import { getUserLearnings, Set } from '@/data/api';
import Colors from '@/constants/Colors';
import { defaultStyleSheet } from '@/constants/Styles';

const Profile = () => {

    const [sets, setSets] = useState<{ set: Set; score: number; cards_correct: number; cards_wrong: number; id: string; xata: any }[]>([]);
    const [isRefreshing, setIsRefreshing] = useState(false);

      // Load available Sets
    useEffect(() => {
        loadProgress();
    }, []);

    const loadProgress = async () => {
        const data = await getUserLearnings();
        console.log('~ file: sets.tsx:11 ~ loadSets ~ data:', data)
         // Filter out null or undefined sets

        const validSets = data.filter((set: Set | null | undefined) => set !== null && set !== undefined);
        setSets(validSets);
    };

    const renderSetRow: ListRenderItem<{
        set: Set;
        score: number;
        cards_correct: number;
        cards_wrong: number;
        xata: any;
      }> = ({ item }) => {

        if (!item.set || !item.xata) {
          return (
            <View style={styles.setRow}>
              <View style={{flexDirection: 'row'}}>
                <View style={{flex: 1}}>
                  <Text style={styles.rowTitle}>Deleted Session</Text>
                  <Text style={{ color: Colors.darkGrey }}>
                    This session has been deleted
                  </Text>
                </View>
              </View>
            </View>
          );
        }

        return (
          <View style={styles.setRow}>
            <View style={{ flexDirection: 'row' }}>
              <View style={{ flex: 1 }}>
                <Text style={styles.rowTitle}>{item.set.title}</Text>
                <Text style={{ color: Colors.darkGrey }}>
                  Score: {item.score.toFixed(2)}, {item.xata.createdAt.substring(0, 10)}
                </Text>
              </View>
            </View>
          </View>
        );
      };


    const validSets = sets.filter(item => item.set !== null && item.xata !== null);

    return(
        <View style={defaultStyleSheet.container}>
        <Text style={defaultStyleSheet.header}>{sets.length} sessions</Text>
        <FlatList
          data={validSets}
          renderItem={renderSetRow}
          refreshControl={<RefreshControl refreshing={isRefreshing} onRefresh={loadProgress} />}
        />
      </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    setRow: {
      padding: 16,
      backgroundColor: '#fff',
      borderBottomWidth: 1,
      borderBottomColor: Colors.lightGrey,
    },
    rowTitle: {
      fontSize: 16,
      fontWeight: '500',
    },
  });

export default Profile