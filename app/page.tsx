"use client";

import styles from "./page.module.css";
import { UsersContext, UsersProvider } from "../src/contexts/userContext";
import { useEffect, useMemo, useState } from "react";
import User from "./Users";

export default function Home() {
  return (
    <UsersProvider>
      <main className={styles.main}>
        <User />
      </main>
    </UsersProvider>
  );
}
