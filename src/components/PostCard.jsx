import React from 'react';
import {useState} from 'react';
import { Card, CardHeader, CardActions, CardContent, Avatar, Button, Typography, Collapse } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import styled, { css, keyframes } from 'styled-components'

const growCard = keyframes`
  to {
    width:90vw;
    height:90vh;
  }
`;

const growImage = keyframes`
  to {
    width:100%;
    height:50%;
  }
`;

const CardContainer = styled(Card)`
position: relative;
border-radius: 23px;
margin: 4px;
padding: 8px;
animation: ${props => props.animate ? css`${growCard} 0.3s linear forwards` : `null`};
`
const StyledCardMedia = styled.div`
width: 100%;
height: 250px;
background: url("${props => props.image}") no-repeat center center;
background-size: cover;
animation: ${props => props.animate ? css`${growImage} 0.3s linear forwards` : `null`};
`

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
        comments,
        fullGrow,
      } = props

    const fullName= `${username} ${lastName}` 
    const [expanded, setExpanded] = useState(false);
    const handleExpandClick = () => {
        setExpanded(!expanded);
      };
   
    const handleFullPostClick = () => {
      onClickComments()
    }


    return (
      <CardContainer variant="outlined" animate={fullGrow}>
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
          <StyledCardMedia
            alt={description}
            image={photo}
            animate={fullGrow}
          />
        <CardActions>
            <FavoriteIcon/>
            <Typography variant="body2" color="textSecondary" component="p">
              {likes} like this post
            </Typography>
          <Button size="medium" color="primary" onClick={handleExpandClick}>
            # Tags
          </Button>
          <Button size="medium" color="primary" onClick={handleFullPostClick}>
            Comments
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
      <CardContent>
      {
        !!comments.length && comments.map(comment => (
          <ul>
            <li>{comment.message}</li>
          </ul>
        ))
        }  
      </CardContent>
      </CardContainer>
    );
  }

  export default PostCard;