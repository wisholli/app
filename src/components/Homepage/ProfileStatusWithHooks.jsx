import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const ProfileStatusWithHooks = (props) => {
  let [editMode, setEditMode] = useState(false);
  let [status, setStatus] = useState(props.status);

  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);

  const activateEditMode = () => {
    setEditMode(true);
  };

  const deactivateEditMode = () => {
    setEditMode(false);
    props.updateStatus(status);
  };

  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value);
  };
  return (
    <div>
      {!editMode ? (
        <div>
          <span onDoubleClick={activateEditMode}>
            {!props.status ? "---" : props.status}
          </span>
        </div>
      ) : (
        <div>
          <input
            onChange={onStatusChange}
            value={status}
            autoFocus={true}
            onBlur={deactivateEditMode}
          />
        </div>
      )}
    </div>
  );
};

export default ProfileStatusWithHooks;
