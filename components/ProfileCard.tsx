/**
 * This components is used both in the profile page, and in the page where banker can view all the client profiles.
 */

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

type ProfileCardProps = {
    imageLink: string;
    name: string;
    description: string;
}

const ProfileCard = ( { imageLink, name, description }: ProfileCardProps ) => {
    
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                alt={name}
                height="140"
                image={imageLink}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
            </CardContent>
            <CardActions>
                {/* chat only if current user's role is a banker */}
                {/* <Button size="small">Chat</Button> */}
                {/* able to add more buttons */}
            </CardActions>
        </Card>
    );

}

export default ProfileCard;