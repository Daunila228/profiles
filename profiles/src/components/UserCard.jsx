import * as React from 'react';
import { useState } from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';

function UserCard({ name, bioText, postCount, subscribers, rating, avatarSrc }) {
  const [isFollowing, setIsFollowing] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [followerCount, setFollowerCount] = useState(subscribers);
  const [likeCount, setLikeCount] = useState(0);

  const handleFollowClick = () => {
    setIsFollowing(!isFollowing);
    if (!isFollowing) {
      setFollowerCount(followerCount + 1);
    } else {
      setFollowerCount(followerCount - 1);
    }
  };

  const handleLikeClick = () => {
    setIsLiked(!isLiked);
    if (!isLiked) {
      setLikeCount(likeCount + 1);
    } else {
      setLikeCount(likeCount - 1);
    }
  };

  return (
    <Box
      sx={{
        width: '100%',
        position: 'relative',
        overflow: { xs: 'auto', sm: 'initial' },
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          display: 'block',
          width: '1px',
          left: '500px',
          top: '-24px',
          bottom: '-24px',
          '&::before': {
            top: '4px',
            display: 'block',
            position: 'absolute',
            right: '0.5rem',
            color: 'text.tertiary',
            fontSize: 'sm',
            fontWeight: 'lg',
          },
          '&::after': {
            top: '4px',
            display: 'block',
            position: 'absolute',
            left: '0.5rem',
            color: 'text.tertiary',
            fontSize: 'sm',
            fontWeight: 'lg',
          },
        }}
      />
      <Card
        orientation="horizontal"
        sx={{
          width: '100%',
          flexWrap: 'wrap',
          [`& > *`]: {
            '--stack-point': '500px',
            minWidth:
              'clamp(0px, (calc(var(--stack-point) - 2 * var(--Card-padding) - 2 * var(--variant-borderWidth, 0px)) + 1px - 100%) * 999, 100%)',
          },
          overflow: 'auto',
          resize: 'horizontal',
          border: '1px solid',
          borderColor: 'primary.main',
        }}
      >
        <AspectRatio flex ratio="1" maxHeight={182} sx={{ minWidth: 182 }}>
          <img
            src={avatarSrc}
            alt={name}
          />
        </AspectRatio>
        <CardContent>
          <Typography fontSize="xl" fontWeight="lg">
            {name}
          </Typography>
          <Typography level="body-sm" fontWeight="lg" textColor="text.tertiary">
            {bioText}
          </Typography>
          <Sheet
            sx={{
              bgcolor: 'background.level1',
              borderRadius: 'sm',
              p: 1.5,
              my: 1.5,
              display: 'flex',
              gap: 2,
              '& > div': { flex: 1 },
            }}
          >
            <div key="articles">
              <Typography level="body-xs" fontWeight="lg">
                Articles
              </Typography>
              <Typography fontWeight="lg">{postCount}</Typography>
            </div>
            <div key="followers">
              <Typography level="body-xs" fontWeight="lg">
                Followers
              </Typography>
              <Typography fontWeight="lg">{followerCount}</Typography>
            </div>
            <div key="rating">
              <Typography level="body-xs" fontWeight="lg">
                Rating
              </Typography>
              <Typography fontWeight="lg">{rating}</Typography>
            </div>
            <div key="likes">
              <Typography level="body-xs" fontWeight="lg">
                Likes
              </Typography>
              <Typography fontWeight="lg">{likeCount}</Typography>
            </div>
          </Sheet>
          <Box sx={{ display: 'flex', gap: 1.5, '& > button': { flex: 1 } }}>
            <Button
              backgroundColor='red'
              color={isLiked ? 'blue' : 'red'}
              onClick={handleLikeClick}
              sx={{
                border: '1px solid red',
                borderColor: 'primary.main',
                color: 'red'
              }}
            >
              {isLiked ? 'Liked' : 'Like'}
            </Button>
            <Button
              variant="solid"
              color="primary"
              sx={{ backgroundColor: isFollowing ? 'transparent' : 'primary.main' }}
              onClick={handleFollowClick}
              sx={{
                border: '1px solid',
                borderColor: 'primary.main',
              }}
            >
              {isFollowing ? 'Following' : 'Follow'}
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}

export default UserCard;
