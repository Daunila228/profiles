import * as React from 'react';
import Avatar from '@mui/joy/Avatar';
import Chip from '@mui/joy/Chip';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import ButtonGroup from '@mui/joy/ButtonGroup';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import CardActions from '@mui/joy/CardActions';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import SvgIcon from '@mui/joy/SvgIcon';
import { posts } from '../api/postsData';
import { Link } from 'react-router-dom';

function BioCard() {
  return (
    <div style={{display:'flex', flexDirection: 'row', justifyContent: 'center', flexWrap: 'wrap'}}>
      {posts.map(post => (
        <SingleBioCard key={post.id} {...post} />
      ))}
    </div>
  );
}

function SingleBioCard({id, name, avatarSrc, bioText }) {
  return (
    <Card
      sx={{
        width: 320,
        maxWidth: '100%',
        boxShadow: 'lg',
        marginBottom: '1rem',
        marginLeft: '100px',
        marginTop: '50px'
      }}
    >
      <CardContent sx={{ alignItems: 'center', textAlign: 'center' }}>
        <Avatar src={avatarSrc} sx={{ '--Avatar-size': '4rem' }} />
        <Chip
          size="sm"
          variant="soft"
          color="primary"
          sx={{
            mt: -1,
            mb: 1,
            border: '3px solid',
            borderColor: 'background.surface',
          }}
        >
          PRO
        </Chip>
        <Typography level="title-lg">{name}</Typography>
        <Typography level="body-sm" sx={{ maxWidth: '24ch' }}>
          {bioText}
        </Typography>
        <Box
          sx={{
            display: 'flex',
            gap: 2,
            mt: 2,
            '& > button': { borderRadius: '2rem' },
          }}
        >
          <IconButton size="sm" variant="plain" color="neutral">
            <SvgIcon>
            </SvgIcon>
          </IconButton>
        </Box>
      </CardContent>
      <CardOverflow sx={{ bgcolor: 'background.level1' }}>
        <CardActions buttonFlex="1">
          <ButtonGroup variant="outlined" sx={{ bgcolor: 'background.surface' }}>
            <Button color='primary'><Link to={`/profile/${id}`}>Connect</Link></Button>
          </ButtonGroup>
        </CardActions>
      </CardOverflow>
    </Card>
  );
}

export default BioCard;
