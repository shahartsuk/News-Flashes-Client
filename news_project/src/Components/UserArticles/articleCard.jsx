import  React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export const ArticleCard = ({Title,LinkImage,Description,WebLink})=> {
 

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={LinkImage}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {Title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         {Description}
        </Typography>
      </CardContent>
      <CardActions>
         <a href={WebLink} target='_blank' >
        <Button size="small">Learn More</Button>
        </a>
      </CardActions>
    </Card>
  );
}