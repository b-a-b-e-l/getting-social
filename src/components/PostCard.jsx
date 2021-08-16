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
        username, 
        lastName,
        photo, 
        description,
        likes,
        avatarPic,
        createDate,
        tags,
        onClickComments,
      } = props

    const fullName= `${username} ${lastName}` 
    const [expanded, setExpanded] = useState(false);
    const handleExpandClick = () => {
        setExpanded(!expanded);
      };


    return (
      <CardContainer variant="outlined">
        <CardHeader
        avatar={
          <Avatar src={avatarPic} alt={fullName}/>
        }
        title={fullName}
        subheader={new Date().toLocaleDateString("en-GB", {createDate})}
        />
       <CardContent>
       <Typography variant="body1" color="textSecondary" component="p">
        {description}
       </Typography>
       </CardContent>
        <CardActionArea>
          <CardMedia
            component="img"
            alt={description}
            height="250px"
            image={photo}
            title={description}
          />
        </CardActionArea>
        <CardActions>
            <FavoriteIcon/>
            <Typography variant="body2" color="textSecondary" component="p">
              {likes} like this post
            </Typography>
          <Button size="medium" color="primary" onClick={handleExpandClick}>
            # Tags
          </Button>
          <Button size="medium" color="primary" onClick={onClickComments}>
            COMMENTS
          </Button>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
        {
        !!tags.length && tags.map(tag => (
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