import React from 'react';
import {Text, View} from 'react-native';

interface Props {
  listItem: string;
}
export const BaseFlatListItem = ({listItem}: Props) => {
  return (
    <View style={{marginVertical: 10}}>
      <Text>{listItem}</Text>
    </View>
  );
};
