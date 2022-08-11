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
import Contact from './contact'

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

export default function Promo() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
          <><Card sx={{ maxWidth: 500, my: 5 }}>
          <CardHeader
              title="Exclusive offer for you"
              subheader='Investment Portfolio management' />
          <CardMedia sx={{ height: 250 }}
              component="img"
              height="30"
              image="https://www.privatebank.citibank.com/newcpb-media/media/whatweoffer/Investment-Management.jpg"
              alt="image" />
          <CardContent>
              <Typography variant="body2" color="text.secondary">
                  Citi Investment Management – the Private Bank’s global investment management organization – has designed, delivered and managed customized portfolios and investments for the worldly and wealthy since 1935.
              </Typography>
              <a className="underline text-sm" href="https://www.privatebank.citibank.com/we-offer/investment-management">Learn More</a>
          </CardContent>
          <CardActions disableSpacing>
            <Contact/>
            
              {/* <Button variant="outlined">Get in Touch</Button> */}
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
                      Our discretionary portfolio managers offer global and regional-focused equity, fixed income, multi-asset class investment strategies.
                  </Typography>
                  <Typography paragraph>
                      We can customize these strategies according to your individual requirements, such as your sustainable investment objectives and risk profile.
                  </Typography>
                  <Typography paragraph>
                      Our research, due diligence and oversight provide the foundation for every investment within your portfolio.

                      These include equity, fixed income, multi-asset class and alternative investment strategies from third-party managers who we vet extensively.</Typography>
                  <Typography paragraph>
                      We utilize a core and opportunistic wealth framework, in which we identify a broadly diversified core portfolio based on the long-term plan we create for you using our proprietary asset allocation methodology.</Typography>
              </CardContent>
          </Collapse>
      </Card><Card sx={{ maxWidth: 500 }}>
              <CardHeader
                  avatar={<Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                      J
                  </Avatar>}
                  action={<IconButton aria-label="settings">
                      <MoreVertIcon />
                  </IconButton>}
                  title="Joe Fiorica, Steven Wieting"
                  subheader="August 1, 2022"/>
              <CardMedia sx={{ height: 300 }}
                  component="img"
                  height="10"
                  image="https://www.privatebank.citibank.com/newcpb-media/media/images/insights/5-Takeaways-After-a-Bounce-off-the-Lows-01.jpg"
                  alt="image" />
              <CardContent>
                  <Typography variant="body2" color="text.secondary">
                  The double-digit rally in global equities over the last few weeks reflects market relief following a headline minefield and a sizeable cohort of investors caught on the wrong side of the moderately positive news flow. Here are our 5 takeaways from the recent bounce off:
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
          )}