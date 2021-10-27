/* eslint-disable import/extensions */

import { Box, Container } from '@material-ui/core';
import { useState } from 'react';
import Body from '../../components/Body';
import Header from '../../components/Header';

const mok = [
  { text: 'study nextjs', completed: false },
  { text: 'Participate in the promotion on twitter', completed: false },
];

export default function Home() {
  const [write, setWrite] = useState('');
  const [notas, setNotas] = useState(mok);

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          width: '100%',
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            width: '500px',
            height: '650px',
            boxShadow: '0 0 10px rgba(130, 61, 139, 0.6)',
            borderRadius: '10px',
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
          }}
        >
          <Header setWrite={setWrite} write={write} setNotas={setNotas} />
          <Body notas={notas} setNotas={setNotas} />
        </Box>
      </Box>
    </Container>
  );
}
