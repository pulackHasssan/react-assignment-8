import React from 'react';
import './Comment.css';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const Comment = (props) => {
    const { name, email, body } = props.comment;

    // const [photos, setPhotos] = useState([]);

    // useEffect(()=>{
    //     const url = `https://jsonplaceholder.typicode.com/photos/`
    //     fetch(url)
    //     .then(res => res.json())
    //     .then(data => setPhotos(data))
    //   }
    //   ,[])

    //const photoDetails = photos.find(photoObject => photoObject.id === id)){

    const useStyles = makeStyles((theme: Theme) =>
        createStyles({
            root: {
                width: '100%',
                backgroundColor: theme.palette.background.paper,
            },

        }),
    );
    const classes = useStyles();

    return (
        <List className={classes.root}>
            <ListItem alignItems="flex-start">
                <ListItemAvatar>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                </ListItemAvatar>
                <ListItemText
                    primary={name}
                    secondary={
                        <React.Fragment>
                            <Typography
                                component="span"
                                variant="body2"
                                color="textPrimary"
                            >
                                {email} <br />
                            </Typography>
                            {body}
                        </React.Fragment>
                    }
                />
            </ListItem>
            <Divider variant="inset" component="li" />
        </List>
    );
};

export default Comment;