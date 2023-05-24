import { Box, IconButton, List, ListItem, Typography } from '@mui/material';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

function ChoiceCategory() {
  return (
    <Box
      title="choiceCategoryWrapper"
      sx={{
        boxShadow: '0px 5px 20px 0px #0B361D1A',
        marginBottom: '40px'
      }}
    >
      <Box
        title="titleCategory"
        sx={{
          borderBottom: '1px solid #F5F5F5',
          height: '57px',
          display: 'flex',
          alignItems: 'center',
          paddingLeft: '26px',
          fontSize: '14px',
          fontWeight: '700',
          color: '#4F4F4F',
          // fontFamily: 'Roboto'
        }}
      >
        КАТЕГОРІЇ
      </Box>

      <List sx={{
        display: 'flex',
        flexDirection: 'column',
        fontSize: '24px'
      }}
      >
        <ListItem sx={{
          display: 'flex',
          justifyContent: 'spaceAround',
          paddingLeft: '6px'
        }}
        >
          <IconButton sx={{}}>
            <ArrowRightIcon sx={{
              fontSize: 'medium',
              color: '#E0E0E0'
            }}
            />
          </IconButton>
          <Typography sx={{
            fontSize: '14px',
            fontWeight: '400',
            color: '#4F4F4F'
          }}
          >Ліки від кашлю , застуди та грипу
          </Typography>
        </ListItem>
        <ListItem sx={{
          display: 'flex',
          justifyContent: 'spaceAround',
          paddingLeft: '6px'
        }}
        >
          <IconButton sx={{}}>
            <ArrowRightIcon sx={{
              fontSize: 'medium',
              color: '#E0E0E0'
            }}
            />
          </IconButton>
          <Typography sx={{
            fontSize: '14px',
            fontWeight: '400',
            color: '#4F4F4F'
          }}
          >Знеболюючі
          </Typography>
        </ListItem>
        <ListItem sx={{
          display: 'flex',
          justifyContent: 'spaceAround',
          paddingLeft: '6px'
        }}
        >
          <IconButton sx={{}}>
            <ArrowRightIcon sx={{
              fontSize: 'medium',
              color: '#E0E0E0'
            }}
            />
          </IconButton>
          <Typography sx={{
            fontSize: '14px',
            fontWeight: '400',
            color: '#4F4F4F'
          }}
          >Для нервової системи
          </Typography>
        </ListItem>
      </List>
    </Box>
  );
}

export default ChoiceCategory;
