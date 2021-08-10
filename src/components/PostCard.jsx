import {useState} from 'react';
import { Card, CardActionArea, CardHeader, CardActions, CardContent, CardMedia, Avatar, Button, Typography, Collapse } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import styled from 'styled-components';


const CardContainer = styled(Card)`
border-radius: 23px;
margin: 4px;
padding: 8px;
`
// const PostPhoto = styled(CardMedia)`
// object-fit: cover;
// `

const PostCard = (props) => {
    const { 
        Username, 
        LastName,
        Photo, 
        Description,
        Likes,
        AvatarPic,
        CreateDate,
        Tags,
      } = props

    const fullName= `${Username} ${LastName}` 
    const [expanded, setExpanded] = useState(false);
    const handleExpandClick = () => {
        setExpanded(!expanded);
      };


    return (
      <CardContainer variant="outlined">
        <CardHeader
        avatar={
          <Avatar src={AvatarPic} alt={Username}/>
        }
        title={fullName}
        subheader={new Date().toLocaleDateString("en-GB", {CreateDate})}
        />
       <CardContent>
       <Typography variant="body1" color="textSecondary" component="p">
        {Description}
       </Typography>
       </CardContent>
        <CardActionArea>
          <CardMedia
            component="img"
            alt={Description}
            height="250px"
            image={Photo}
            title={Description}
          />
        </CardActionArea>
        <CardActions>
            <FavoriteIcon/>
            <Typography variant="body2" color="textSecondary" component="p">
              {Likes} like this post
            </Typography>
          <Button size="medium" color="primary" onClick={handleExpandClick}>
            # Tags
          </Button>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
        {
        !!Tags.length && Tags.map(tag => (
          <ul>
            <li>{tag}</li>
          </ul>
        ))
        }
        </CardContent>
      </Collapse>
      </CardContainer>
    );
  }

  export default PostCard;