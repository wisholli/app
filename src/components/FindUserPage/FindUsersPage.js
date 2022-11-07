import React from "react";
import Users from "./Users/Users";

const FindUsersPage = (props) => {
  if (props.users.length === 0) {
    props.setUsers([
      {
        id: 1,
        avatarUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQsu34yqIKdjK5cAWEcuUq3ryD30iiqd2ArQ&usqp=CAU",
        followed: true,
        name: "Dmitry",
        location: {
          country: "Ukraine",
          city: "Kiev",
        },
        status: "I like play football",
      },
      {
        id: 2,
        avatarUrl:
          "https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/man-person-icon.png",
        followed: false,
        name: "Artem",
        location: {
          country: "USA",
          city: "California",
        },
        status: "Are you ok?",
      },
      {
        id: 3,
        avatarUrl:
          "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80",
        followed: true,
        name: "Tanya",
        location: {
          country: "Ukraine",
          city: "Sumy",
        },
        status: "I'm boss",
      },
      {
        id: 4,
        avatarUrl:
          "https://www.incimages.com/uploaded_files/image/1920x1080/getty_481292845_77896.jpg",
        followed: true,
        name: "Lukas",
        location: {
          country: "Germany",
          city: "Berlin",
        },
        status: "I like hot girl",
      },
    ]);
  }

  let onFollow = (id) => {
    props.follow(id);
  };

  let onUnFollow = (id) => {
    props.unfollow(id);
  };

  let users = props.users.map((user) => (
    <Users
      avatarUrl={user.avatarUrl}
      followed={user.followed}
      name={user.name}
      location={user.location}
      status={user.status}
      onFollow={() => onFollow(user.id)}
      onUnFollow={() => onUnFollow(user.id)}
    />
  ));

  if (props.users.length === 0) {
    return null;
  }

  return <div>{users}</div>;
};

export default FindUsersPage;
