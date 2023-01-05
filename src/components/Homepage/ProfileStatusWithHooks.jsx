import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const ProfileStatusWithHooks = ({ propsStatus, updateStatus }) => {
  let [editMode, setEditMode] = useState(false);
  let [status, setStatus] = useState(propsStatus);

  useEffect(() => {
    setStatus(propsStatus);
  }, [propsStatus]);

  const activateEditMode = () => {
    setEditMode(true);
  };

  const deactivateEditMode = () => {
    setEditMode(false);
    updateStatus(status);
  };

  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value);
  };
  return (
    <div>
      {!editMode ? (
        <div>
          <span onDoubleClick={activateEditMode}>
            <b>Status: </b>
            {!propsStatus ? "---" : propsStatus}
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
