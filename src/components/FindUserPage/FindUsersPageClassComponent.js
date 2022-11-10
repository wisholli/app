import axios from "axios";
import React from "react";
import Users from "./Users/Users";
import style from "./Users/Users.module.css";

class FindUsersPage extends React.Component {
  componentDidMount() {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount);
      });
  }

  onFollow = (id) => {
    this.props.follow(id);
  };

  onUnFollow = (id) => {
    this.props.unfollow(id);
  };

  onpageChange = (currentPage) => {
    this.props.setCurrentPage(currentPage);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
      });
  };

  render() {
    let pagesCount = Math.ceil(
      this.props.totalUsersCount / this.props.pageSize
    );

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }
    return (
      <div>
        <div>
          {pages.map((p) => (
            <span
              className={this.props.currentPage === p && style.selectedPage}
              onClick={() => this.onpageChange(p)}
            >
              {p}
            </span>
          ))}
        </div>
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
