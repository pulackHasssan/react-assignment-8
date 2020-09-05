import React from 'react';
import './Post.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

const Post = (props) => {
    const { title, body, id } = props.post;

    const useStyles = makeStyles({
        root: {
            minWidth: 275,
        },
        title: {
            fontSize: 20,
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
                        {title}
                    </Typography>
                    <Typography variant="body2" component="p">
                        {body}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Link to={`/post/${id}`}> <Button variant='contained' color='primary'>See More</Button></Link>
                </CardActions>
            </Card>
        </div>
    );
};

export default Post;    