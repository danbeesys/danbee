import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import Box from '@mui/material/Box';


export interface TherapyContent {
    imagePath: string,
    title: string,
    date: string,
    description: string[]
}

const TherapyCard: React.FC<TherapyContent> = (props) => {
    return (
        <Card sx={{ width: "80vw", display: 'flex', margin: '1vh 0' }}>
            <Box sx={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
            <CardMedia
              component="img"
              height="240"
              image={props.imagePath}
              alt={props.title}
              sx={{width:'15%'}}
            />
            <CardContent sx={{width:"90%"}}>
            <CardActionArea>
              <Typography gutterBottom variant="h5" component="div">
                {props.title}
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              <div>{props.description.map((e, index) => <Typography key={index} sx={{ marginBottom: 2 }}>{e}</Typography>)}</div>
              </Typography>
              </CardActionArea>
            </CardContent>
          </Box>
        </Card>
      );
    }

export default TherapyCard;