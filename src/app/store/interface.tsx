"use server";

export interface User {
  "id": number | null;
  "name": string;
  "username": string;
  "email": string;
  "address": {
    "street": string;
    "suite": string;
    "city": string;
    "zipcode": string;
    "geo": {
      "lat": string;
      "lng": string;
    };
  };
  "phone": string;
  "website": string;
  "company": {
    "name": string;
    "catchPhrase": string;
    "bs": string;
  };
}

//
export enum ThemeApp {
  "light",
  "dark",
}

export interface AppStoreProps {
  users: User[];
  currentUser: User | null;
  setUser: (user: User) => void;
  clearUser: () => void;
  theme: ThemeApp;
}

//

export const initialUserData: User | null = null;

// export interface MockTodo {
//   userId: number | null;
//   id: number;
//   title: string;
//   completed: boolean;
// }
