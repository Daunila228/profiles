import React from 'react';
import { useParams } from 'react-router-dom'; 
import UserCard from './UserCard';
import { posts } from '../api/postsData';

function UserCardContainer() {
  const { id } = useParams(); 


  const user = posts.find(user => user.id === parseInt(id));

  return (
    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', flexWrap: 'wrap' }}>
      {user && ( 
        <UserCard
          id={user.id}
          avatarSrc={user.avatarSrc}
          name={user.name}
          bioText={user.bioText}
          postCount={user.postCount}
          subscribers={user.subscribers}
          rating={user.rating}
          likes={user.likes}
        />
      )}
    </div>
  );
}

export default UserCardContainer;
