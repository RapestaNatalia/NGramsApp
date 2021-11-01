import 'react-native';
import React from 'react';
import { BaseFlatListItem } from '../../src/components/BaseFlatListItem'; 
import {render} from '@testing-library/react-native';

it('Render component BaseFlatListItem',()=>{
    const item = 'Item name';
    const {getByText} =render(<BaseFlatListItem listItem={item}/>);
    const element = getByText(item);
    expect(element).not.toBeNull();
})