import React from "react";
import { useState } from "react";
import {
  Card,
  CardHeader,
  CardActions,
  CardContent,
  Avatar,
  Button,
  Typography,
  Collapse,
} from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import styled, { css, keyframes } from "styled-components";

const growCard = keyframes`
  to {
    width:90vw;
    height:90vh;
  }
`;

const growImage = keyframes`
  to {
    width:100%;
    height:60%;
  }
`;

const CardContainer = styled(Card)`
  position: relative;
  border-radius: 23px;
  margin: 4px;
  padding: 8px;
  animation: ${(props) =>
    props.animate
      ? css`
          ${growCard} 0.3s linear forwards
        `
      : `null`};
`;
const StyledCardMedia = styled.div`
  width: 100%;
  height: 290px;
  background: url("${(props) => props.image}") no-repeat center center;
  background-size: cover;
  animation: ${(props) =>
    props.animate
      ? css`
          ${growImage} 0.3s linear forwards
        `
      : `null`};
`;

const StyledCardContent = styled(CardContent)`
  padding: 0;
`;

const TagList = styled.ul`
  display: inline;
  padding: 0;
  margin: 2px;
`;
const TagListItem = styled.li`
  list-style: none;
  display: inline;
`;

const CommentOwner = styled.span`
  font-weight: 800;
  color: #2794eb;
`;

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
  } = props;

  const fullName = `${username} ${lastName}`;
  const [expanded, setExpanded] = useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleFullPostClick = () => {
    onClickComments();
  };

  return (
    <CardContainer variant="outlined" animate={fullGrow}>
      <CardHeader
        avatar={<Avatar src={avatarPic} alt={fullName} />}
        title={fullName}
        subheader={new Date().toLocaleDateString("en-GB", { createDate })}
      />
      <StyledCardContent>
        <Typography variant="body1" color="textSecondary" component="p">
          {description}
        </Typography>
      </StyledCardContent>
      <StyledCardMedia alt={description} image={photo} animate={fullGrow} />
      <CardActions>
        <FavoriteIcon color="primary" />
        <Typography variant="body2" color="textSecondary" component="p">
          {likes} like this post
        </Typography>
        <Button size="medium" color="secondary" onClick={handleExpandClick}>
          # Tags
        </Button>
        <Button
          size="medium"
          color="secondary"
          variant="outlined"
          onClick={handleFullPostClick}
        >
          Comments
        </Button>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <StyledCardContent>
          {!!tags.length &&
            tags.map((tag, index) => (
              <TagList key={`${tag}-${index}`}>
                <TagListItem>#{tag}</TagListItem>
              </TagList>
            ))}
        </StyledCardContent>
      </Collapse>
      <StyledCardContent>
        {!!comments.length &&
          comments.map((comment, index) => (
            <ul key={`${comment}-${index}`}>
              <TagListItem>
                <CommentOwner color="primary">{comment.owner.firstName}: </CommentOwner>
                {comment.message}
              </TagListItem>
            </ul>
          ))}
      </StyledCardContent>
    </CardContainer>
  );
};

export default PostCard;
