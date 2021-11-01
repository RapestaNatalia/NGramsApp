import 'react-native';
import React from 'react';
import { BaseHeaderTitle } from '../../src/components/BaseHeaderTitle';
import {render} from '@testing-library/react-native';

it('Render component BaseHeaderTitle',()=>{
    const title = 'This is a title';
    const {getByText} =render(<BaseHeaderTitle title={title}/>);
    const element = getByText(title);
    expect(element).not.toBeNull();
})