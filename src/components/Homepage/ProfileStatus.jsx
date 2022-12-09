import React from "react";
import Preloader from "../common/Preloader/Preloader";

class ProfileStatus extends React.Component {
  state = { editMode: false, status: this.props.status };

  activateEditMode = () => {
    this.setState({ editMode: true });
  };

  deactivateEditMode = () => {
    this.setState({ editMode: false });
    this.props.updateStatus(this.state.status);
  };

  onStatusChange = (e) => {
    this.setState({ status: e.currentTarget.value });
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.status !== this.props.status) {
      this.setState({ status: this.props.status });
    }
  }

  render() {
    if (!this.props.status) {
      <Preloader />;
    }
    return (
      <div>
        {!this.state.editMode ? (
          <div>
            <span onDoubleClick={this.activateEditMode}>
              {!this.props.status ? "---" : this.props.status}
            </span>
          </div>
        ) : (
          <div>
            <input
              onChange={this.onStatusChange}
              value={this.state.status}
              autoFocus={true}
              onBlur={this.deactivateEditMode}
            />
          </div>
        )}
      </div>
    );
  }
}

export default ProfileStatus;
