"use client";
import { createContext, useEffect, useMemo, useState } from "react";

export type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};

export interface ContextUser {
  user: User[] | undefined;
}
export const UsersContext = createContext<ContextUser>({ user: [] });

export const UsersProvider = (props: any) => {
  const [user, setUser] = useState();

  const getUsers = useMemo(async () => {
    return await fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((result) => setUser(result))
      .catch((error) => console.log("error happened", error));
  }, []);

  useEffect(() => {
    getUsers;
  }, [getUsers]);

  return (
    <UsersContext.Provider value={{ user: user }}>
      {props.children}
    </UsersContext.Provider>
  );
};
