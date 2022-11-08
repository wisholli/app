import axios from "axios";
import React from "react";
import Users from "./Users/Users";

class FindUsersPage extends React.Component {
  constructor(props) {
    super(props);
    axios
      .get("https://social-network.samuraijs.com/api/1.0/users")
      .then((response) => {
        this.props.setUsers(response.data.items);
      });
  }
  onFollow = (id) => {
    this.props.follow(id);
  };

  onUnFollow = (id) => {
    this.props.unfollow(id);
  };

  render() {
    console.log("test", this.users);
    return (
      <div>
        <div>
          {this.props.users.map((user) => (
            <Users
              photo={user.photos.small}
              followed={user.followed}
              name={user.name}
              status={user.status}
              onFollow={() => this.onFollow(user.id)}
              onUnFollow={() => this.onUnFollow(user.id)}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default FindUsersPage;
