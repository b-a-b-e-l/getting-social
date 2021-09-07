import React, { FunctionComponent } from "react";
import { AUTHENTICATED_USER } from "../../constants/localStorage";
import { PUBLIC } from "../../constants/routes";
import { useHistory } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Grid,
  CircularProgress,
  Box,
} from "@material-ui/core";
import BarHomeIcon from "../../components/BarHomeIcon";
import { Name } from "../../constants/name";
import { getPosts, getComments } from "../../core/api";
import { useEffect, useState } from "react";
import { Post, Comment } from '../../core/types';
import PostCard from "../../components/PostCard";

const Dashboard: FunctionComponent = () => {
  const history = useHistory();
  const [posts, setPosts] = useState<Array<Post>>([]);
  const [comments, setComments] = useState<Array<Comment>>([]);
  const [selectedPost, setSelectedPost] = useState<String>();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    getPosts().then((response) => {
      if (response.data.data.length) {
        setPosts(response.data.data.filter((post: Post) => post.image));
        setLoading(true);
      }
    });
  }, []);

  const handleGetComments = (postId: string) => {
    setSelectedPost(postId);
    getComments(postId).then((response) => {
      setComments(response.data.data);
      console.log(comments);
    });
  };

  const resetComments = () => {
    setSelectedPost(null);
    setComments([]);
  };

  if (!localStorage.getItem(AUTHENTICATED_USER).length) {
    history.push(PUBLIC.LOGIN);
  }

  return (
    <div>
      {loading ? (
        <div>
          <AppBar position="static">
            <Toolbar>
              <IconButton edge="start" color="primary" aria-label="menu">
                <BarHomeIcon />
              </IconButton>
              <Typography variant="h6" color="secondary">
                {Name}
              </Typography>
            </Toolbar>
          </AppBar>
          <Grid container direction="row" justify="space-between" alignItems="flex-start">
            {!!posts.length &&
              posts.map((post) => (
                <Grid item key={post.id}>
                  <PostCard
                    username={post.owner.firstName}
                    lastName={post.owner.lastName}
                    photo={post.image}
                    description={post.text}
                    likes={post.likes}
                    avatarPic={post.owner.picture}
                    createDate={post.publishDate}
                    tags={post.tags}
                    onClickComments={() =>
                      selectedPost === post.id
                        ? resetComments()
                        : handleGetComments(post.id)
                    }
                    comments={selectedPost === post.id ? comments : []}
                    fullGrow={selectedPost === post.id}
                  />
                </Grid>
              ))}
          </Grid>
        </div>
      ) : (
        <Box
          width="100%"
          height="100vh"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <CircularProgress size="4em" />
          <Typography variant="h3" color="secondary">
            {Name}
          </Typography>
        </Box>
      )}
    </div>
  );
};

export default Dashboard;
