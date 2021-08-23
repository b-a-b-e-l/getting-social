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
    const [comments, setComments] = useState([])
    const [selectedPost, setSelectedPost] = useState()

    useEffect(() => {
      getPosts().then( response => {
        if (response.data.data.length) {
          setPosts(response.data.data.filter(post => post.image))
        }
      })
    }, [])

    const handleGetComments = (postId) => {
      setSelectedPost(postId)
      getComments(postId).then( response => {
        setComments(response.data.data)
        console.log(comments)
    })
    }

    const resetComments= () => {
      setSelectedPost()
      setComments([])
    }


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
         justify="space-between"
         alignItems="flex-start"
        >
        {
        !!posts.length && posts.map(post => (
          <Grid item>
          <PostCard 
          username={post.owner.firstName} 
          lastName={post.owner.lastName}
          photo={post.image}
          description={post.text}
          likes={post.likes}
          avatarPic={post.owner.picture}
          createDate={post.publishDate}
          tags={post.tags}
          onClickComments={() => selectedPost === post.id ? resetComments() : handleGetComments(post.id)}
          comments= {selectedPost === post.id ? comments : []}
          fullGrow= {selectedPost === post.id}
          />
          </Grid>
        ) )
        }
        </Grid>
      </div>
    )
}

export default Dashboard;