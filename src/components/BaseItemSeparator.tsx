import React from 'react';
import {View} from 'react-native';

export const BaseItemSeparator = () => {
  return (
    <View
      style={{
        borderBottomWidth: 1,
        opacity: 0.4,
        marginVertical: 8,
        backgroundColor: 'green',
      }}
    />
  );
};
