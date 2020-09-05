import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './SinglePost.css';
import Comment from '../Comment/Comment';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';


const SinglePost = () => {
  const { postId } = useParams();
  const [post, setPost] = useState({});
  const [postComment, setPostComment] = useState([]);

  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;
    fetch(url)
      .then(res => res.json())
      .then(data => setPost(data))
  }, [])

  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/comments?postId=${postId}`;
    fetch(url)
      .then(res => res.json())
      .then(data => setPostComment(data))
  }
    , [])

  const useStyles = makeStyles({
    root: {
      minWidth: 275,
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });
  const classes = useStyles();


  return (
    <div>
      <Card className={classes.root}>
        <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            Post no.: {postId}
          </Typography>
          <Typography variant="h5" component="h2">
            {post.title}
          </Typography>
          <Typography variant="body2" component="p">
            {post.body}
          </Typography>
        </CardContent>

      </Card>
      <div className='comment-container'>
        <h4>comments:</h4>
        {
          postComment.map(comment => <Comment comment={comment}>

          </Comment>)
        }
      </div>
    </div>
  );
};

export default SinglePost;