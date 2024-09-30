const firstCharUpperCase = require("../firstCharUpperCase");

module.exports = (sliceName) => {
	const typeName = `${firstCharUpperCase(sliceName)}Schema`;

	return `import { buildSlice } from '@/shared/lib/store/buildSlice'
import { PayloadAction } from '@reduxjs/toolkit';
import { ${typeName} } from '../types/${sliceName}Schema';

const initialState: ${typeName} = {
    
};

export const ${sliceName}Slice = buildSlice({
    name: '${sliceName}',
    initialState,
    reducers: {
        template: (state, action: PayloadAction<string>) => {
            
        },
    },
});

export const { actions: ${sliceName}Actions, reducer: ${sliceName}Reducer, useActions: use${sliceName}Actions } = ${sliceName}Slice;`;
};
