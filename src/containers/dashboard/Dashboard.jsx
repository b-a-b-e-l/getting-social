import { AUTHENTICATED_USER } from '../../constants/localStorage';
import { PUBLIC } from '../../constants/routes';
import { useHistory } from 'react-router-dom';
import { AppBar, Toolbar, Typography, IconButton, Grid } from '@material-ui/core';
import BarHomeIcon from '../../components/BarHomeIcon';
import { Name } from "../../constants/name";
import { getPosts, getComments } from "../../core/api";
import { useEffect, useState } from "react";
import PostCard from '../../components/PostCard';

const Dashboard = () => {
    const history = useHistory()
    const [posts, setPosts] = useState([])
    // const [comments, setComments] = useState([])

    useEffect(() => {
      getPosts().then( response => {
        if (response.data.data.length) {
          setPosts(response.data.data.filter(post => post.image))
        }
      })
    }, [])

    // useEffect(() => {
    //   getComments("60d0fe4f5311236168a10a2c").then( response => {
    //       setComments(response.data.data.message)
    //   })
    // }, [])

    // console.log(comments)


    if(!localStorage.getItem(AUTHENTICATED_USER).length) {
        history.push(PUBLIC.LOGIN)
    } 
    
    return (
        <div>
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" color="#FFF" aria-label="menu">
              <BarHomeIcon />
            </IconButton>
            <Typography variant="h6">
            {Name} 
            </Typography>
          </Toolbar>
        </AppBar>
        <Grid
         container
         direction="row"
         justifyContent="space-between"
         alignItems="flex-start"
        >
        {
        !!posts.length && posts.map(post => (
          <PostCard 
          Username={post.owner.firstName} 
          LastName={post.owner.lastName}
          Photo={post.image}
          Description={post.text}
          Likes={post.likes}
          AvatarPic={post.owner.picture}
          CreateDate={post.publishDate}
          Tags={[post.tags]}
          />
        ) )
        }
        </Grid>
      </div>
    )
}

export default Dashboard;