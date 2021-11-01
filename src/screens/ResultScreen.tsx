import React, { useCallback } from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {styles} from '../theme/appTheme';
import {constants} from '../constants/constants';
import {BaseFlatListItem} from '../components/BaseFlatListItem';
import {BaseItemSeparator} from '../components/BaseItemSeparator';
import {BaseHeaderTitle} from '../components/BaseHeaderTitle';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParams} from '../navigation/Navigator';

interface Props extends NativeStackScreenProps<RootStackParams, 'Result'> {}

export const ResultScreen = ({route}: Props) => {
  const ngrams = route.params;
  const renderItem = useCallback(
    ({item}) => <BaseFlatListItem listItem={item} />,
    [],
  );
  const keyExtractor = useCallback(
    (item,index) => item+'-'+index,
    [],
  );
  const ITEM_HEIGTH = 100;
  const getItemLayout = useCallback(
    (data,index) => ({
      length:ITEM_HEIGTH,
      offset: ITEM_HEIGTH * index,
      index
    }),
    []
  )
  return (
    <View style={stylesScreen.mainScreen}>
      <FlatList
        testID="result-n-grams"
        data={ngrams}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        getItemLayout={getItemLayout}
        ListHeaderComponent={() => (
          <BaseHeaderTitle title={constants.listNGrams.title} />
        )}
        ItemSeparatorComponent={() => <BaseItemSeparator />}
        ListEmptyComponent={() => {
          return (
            <Text style={stylesScreen.textNoResult} testID="no-result-n-grams">
              {constants.listNGrams.noResult}
            </Text>
          );
        }}
        maxToRenderPerBatch={20}
      />
    </View>
  );
};
const stylesScreen = StyleSheet.create({
  mainScreen: {
    flex: 1,
    ...styles.globalMargin,
  },
  textNoResult: {
    fontSize: 15,
    color: 'black',
    fontWeight: 'bold',
  },
});
