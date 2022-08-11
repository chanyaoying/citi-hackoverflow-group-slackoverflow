import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';


interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Article() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    //card 1
    <>
          <Card sx={{ maxWidth: 500, my:5 }}>
              <CardHeader
                  avatar={<Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                      C
                  </Avatar>}
                  action={<IconButton aria-label="settings">
                      <MoreVertIcon />
                  </IconButton>}
                  title="Citi Private Bank"
                  subheader="July 27, 2022" />
              <CardMedia sx={{height: 300}}
                  component="img"
                  height="30"
                  image="https://www.privatebank.citibank.com/newcpb-media/media/images/insights/Overcoming-supply-chain-shocks.jpg"
                  alt="image" />
              <CardContent>
                  <Typography variant="body2" color="text.secondary">
                  Supply chain shocks have persisted deep into 2022. Over time, technological advances 
                  and restructuring may help reduce such risks.
                  </Typography>
              </CardContent>
              <CardActions disableSpacing>
                  <IconButton aria-label="add to favorites">
                      <FavoriteIcon />
                  </IconButton>
                  <IconButton aria-label="share">
                      <ShareIcon />
                  </IconButton>
                  <ExpandMore
                      expand={expanded}
                      onClick={handleExpandClick}
                      aria-expanded={expanded}
                      aria-label="show more"
                  >
                      <ExpandMoreIcon />
                  </ExpandMore>
              </CardActions>
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                  <CardContent>
                      <Typography paragraph>
                      When they’re working well, global supply chains are largely out of sight and mind.
For years, we took for granted the complex network of relationships that saw raw materials shifted, transformed into finished goods and then distributed to consumers. 
                      </Typography>
                      <Typography paragraph>
                      But those carefree days are behind us – at least for now – and we are having to navigate an unfamiliar world of snarl-ups, delays and frustration.

Offshore "parking lots" jammed with container ships, a shrinking selection of goods for consumers and rising prices have been among the all-too-visible results.
                      </Typography>
                      <Typography paragraph>
                      Much of the current disruption originated with the arrival  of the COVID pandemic in 2020.

Increased demand for goods over services, a succession of disruptive virus variants, worker shortages and commodity shocks were among the forces that caused  supply chain gridlock.
                      </Typography>
                      <Typography paragraph>
                      For a time, it appeared as if things might be poised to improve this year.

With more than half the year gone, however, hopes for a quick recovery have been dashed.
                      </Typography>
                  </CardContent>
              </Collapse>
          </Card>
          <Card sx={{ maxWidth: 500 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            D
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="David Bailin, Steven Wieting"
        subheader="August 7, 2022"
      />
      <CardMedia sx={{height: 300}}
        component="img"
        height="10"
        image="/attention-investors.jpg"
        alt="image"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        The recent stock market rally suggests there is a recovery underway from a recession 
        that hasn’t happened yet. This is not a recession, nor have we just had one.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
          The July payrolls proves the US is still growing. Non-farm employment jumped by 528,000 in July.
          </Typography>
          <Typography paragraph>
          Tighter financial conditions this year will affect labor markets negatively in 2023. We expect that there 
          are employment declines to come, assuming the Fed does not pause its rapid tightening path. While Friday’s 
          employment data was widely viewed as too strong for the Fed to ignore, recent market action suggests many 
          think that much of the Fed’s work has already been done.
          </Typography>
          <Typography paragraph>
          We are skeptical the Fed will pause its tightening soon. Its 2% inflation target isn’t yet visible
           – primarily because it’s looking backwards and sees a 5.4% increase in the CPI in the first half of 2022.
          </Typography>
          <Typography paragraph>
          We think the Fed will stay resolute in its inflation fight until it sees 
          employment dropping or disorder in credit markets – neither of which are likely 
          in the near term. This makes a shallow recession likely.
          </Typography>
        </CardContent>
      </Collapse>
    </Card></>
  );
}
