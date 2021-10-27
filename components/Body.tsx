import { Box } from '@material-ui/core';
import { DeleteForever, Check } from '@material-ui/icons';

export default function Body({ notas, setNotas }) {
  const handleRemove = (index: number) => {
    notas.splice(index, 1);
    setNotas([...notas]);
  };

  const handleCheck = (index) => {
    const newNota = notas;
    newNota[index].completed = true;
    setNotas([...newNota]);
  };
  return (
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        padding: '0px 10px',
        height: '100%',
        flexDirection: 'column',
      }}
    >
      {notas.map((element, index) => (
        <>
          {element.completed ? (
            <Box
              sx={{
                width: '100%',
                padding: '5px',
                margin: '5px',
                border: '1px solid rgba(107, 17, 118, 0.8)',
                borderRadius: '10px',
                display: 'flex',
                justifyContent: 'space-between',
                filter: 'opacity(20%)',
                alignItems: 'center',
              }}
            >
              <p>{element.text}</p>
              <Box>
                <Check
                  sx={{
                    cursor: 'pointer',
                    color: 'orange',
                    marginRight: '10px',
                  }}
                  onClick={() => handleCheck(index)}
                />
                <DeleteForever
                  sx={{
                    color: `purple`,
                    cursor: 'pointer',
                    marginRight: '10px',
                  }}
                  onClick={() => handleRemove(index)}
                />
              </Box>
            </Box>
          ) : (
            <Box
              sx={{
                width: '100%',
                padding: '5px',
                margin: '5px',
                border: '1px solid rgba(107, 17, 118, 0.8)',
                borderRadius: '10px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <p>{element.text}</p>
              <Box>
                <Check
                  sx={{
                    cursor: 'pointer',
                    color: 'orange',
                    marginRight: '10px',
                  }}
                  onClick={() => handleCheck(index)}
                />
                <DeleteForever
                  sx={{
                    color: `purple`,
                    cursor: 'pointer',
                    marginRight: '10px',
                  }}
                  onClick={() => handleRemove(index)}
                />
              </Box>
            </Box>
          )}
        </>
      ))}
    </Box>
  );
}
