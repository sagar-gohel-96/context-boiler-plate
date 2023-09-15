import { UsersContext } from "@/src/contexts/userContext";
import React, { useContext } from "react";

const User = () => {
  const { user } = useContext(UsersContext);
  return (
    <div>
      {user?.map((u) => {
        return <div key={u.id}>{u?.name}</div>;
      })}
    </div>
  );
};

export default User;
