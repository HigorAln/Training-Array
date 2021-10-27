import { Typography } from '@material-ui/core';
import styled from 'styled-components';

const TextFiel = styled.input`
  width: 95%;
  margin: 15px 0px;
  outline: none;
  background: transparent;
  border: 0;
  border-bottom: 1px solid purple;
  height: 40px;
  font-size: 17px;
  letter-spacing: 1px;
  padding-left: 17px;

  &::placeholder {
    color: #ddd;
  }
`;

export default function Header({ setWrite, write, setNotas }) {
  const addNewNota = (event) => {
    if (event.key === 'Enter') {
      const value = {
        text: write,
        completed: false,
      };
      setNotas((prevState) => [...prevState, value]);
      setWrite('');
    }
  };

  return (
    <>
      <Typography
        variant="h5"
        sx={{ marginTop: '10px', marginLeft: '30px', alignSelf: 'flex-start' }}
      >
        Note
      </Typography>
      <TextFiel
        value={write}
        onChange={(e) => setWrite(e.target.value)}
        onKeyPress={addNewNota}
        placeholder="Write your note here"
      />
    </>
  );
}
