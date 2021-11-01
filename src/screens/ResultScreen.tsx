import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {styles} from '../theme/appTheme';
import {constants} from '../constants/constants';
import {BaseFlatListItem} from '../components/BaseFlatListItem';
import {BaseItemSeparator} from '../components/BaseItemSeparator';
import {BaseHeaderTitle} from '../components/BaseHeaderTitle';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParams} from '../navigation/Navigator';

interface Props extends NativeStackScreenProps<RootStackParams, 'Result'> {}

export const ResultScreen = ({route}: any) => {
  const ngrams = route.params;

  return (
    <View style={stylesScreen.mainScreen}>
      <FlatList
        testID="result-n-grams"
        data={ngrams}
        renderItem={({item}) => <BaseFlatListItem listItem={item} />}
        keyExtractor={item => item}
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
