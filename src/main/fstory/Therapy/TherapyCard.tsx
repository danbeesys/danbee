import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import Box from '@mui/material/Box';
import styles from './TherapyCard.module.css';


export interface TherapyContent {
    imagePath: string,
    title: string,
    author: string,
    description: string[]
}

const TherapyCard: React.FC<TherapyContent> = (props) => {
    return (
        <Card sx={{ width: "75vw", display: 'flex', margin: '1vh 0' }}>
            <Box sx={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
            <CardMedia
              component="img"
              height="240"
              image={props.imagePath}
              alt={props.title}
              sx={{width:'15%', alignSelf:'center'}}
            />
            <CardContent sx={{width:"90%"}}>
            <CardActionArea sx={{paddingLeft: "1.2vh"}}>
              <Typography gutterBottom component="div" sx={{fontSize:"1.3rem", fontWeight:"1000"}}>
                {props.title}
              </Typography>
              <Typography gutterBottom component="div" sx={{fontSize:"0.8rem", paddingLeft:"1vw"}}>
                {props.author}
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              {props.description.map((e, index) => <Typography key={index} sx={{
                fontSize: '0.8rem',
                fontFamily: 'Arial' // Roboto, Helvetica, Arial, sans-serif
              }}>{e}</Typography>)}
              </Typography>
              </CardActionArea>
            </CardContent>
          </Box>
        </Card>
      );
    }

export default TherapyCard;