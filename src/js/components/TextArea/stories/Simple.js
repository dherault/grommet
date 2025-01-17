import React, { useState } from 'react';

import { Box, TextArea } from 'grommet';

const Resize = (props) => {
  const [value, setValue] = useState('');

  const onChange = (event) => setValue(event.target.value);

  return (
    // Uncomment <Grommet> lines when using outside of storybook
    // <Grommet theme={...}>
    <Box align="center" pad="large">
      <TextArea value={value} onChange={onChange} {...props} />
    </Box>
    // </Grommet>
  );
};

export const Simple = () => <Resize resize />;

export default {
  title: 'Input/TextArea/Simple',
};
