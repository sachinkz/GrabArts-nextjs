export const feeds = [
    {
      id: "6c84fb90-12c4-11e1-840d-7b25c5ee775a",
      video:false,
      name: "William Smith",
      postUrl:'https://i.ytimg.com/vi/arsUo3Mr6uQ/maxresdefault.jpg',
      email: "williamsmith@example.com",
      caption: "Meeting Tomorrow",
      date: "2023-10-22T09:00:00",
      read: true,
      labels: ["meeting", "work", "important"],
    },
    {
      id: "6c84fb90-12c4sdfsse1-840d-7b25c5ee775a",
      video:true,
      name: "William Smith",
      postUrl:'https://utfs.io/f/c76cdfe4-ee76-4a17-a73b-9bb4304a8e30-1uswaj.mp4',
      email: "williamsmith@example.com",
      caption: "Meeting Tomorrow",
      date: "2023-10-22T09:00:00",
      read: true,
      labels: ["meeting", "work", "important"],
    },
    {
      id: "6c84fb90-12c4sdfe1-840d-7b25c5ee775a",
      video:true,
      name: "William Smith",
      postUrl:'https://utfs.io/f/c76cdfe4-ee76-4a17-a73b-9bb4304a8e30-1uswaj.mp4',
      email: "williamsmith@example.com",
      caption: "Meeting Tomorrow",
      date: "2023-10-22T09:00:00",
      read: true,
      labels: ["meeting", "work", "important"],
    },
    {
      id: "6c84fb90-12c4e1-840d-7b25c5ee775a",
      video:false,
      name: "William Smith",
      postUrl:'https://www.sketchthephotos.com/wp-content/uploads/2020/05/handmade-sketch-pencil-sketch-sketch-artist-pencil-sketch-artist-10_orig-1-730x1024.jpg',
      email: "williamsmith@example.com",
      caption: "Meeting Tomorrow",
      date: "2023-10-22T09:00:00",
      read: true,
      labels: ["meeting", "work", "important"],
    },
    {
      id: "6c84fb90-12c4-11e1-840d-7b2ee775a",
      video:false,
      name: "William Smith",
      postUrl:'https://i.ytimg.com/vi/8BjTC6r98ek/maxresdefault.jpg',
      email: "williamsmith@example.com",
      caption: "Meeting Tomorrow",
      date: "2023-10-22T09:00:00",
      read: true,
      labels: ["meeting", "work", "important"],
    },
    {
      id: "6c84f0-12c4-11e1-840d-7b25c5ee775a",
      video:false,
      name: "William Smith",
      postUrl:'https://www.pencilperceptions.com/wp-content/uploads/2022/08/20220827_083319-scaled.jpg',
      email: "williamsmith@example.com",
      caption: "Meeting Tomorrow",
      date: "2023-10-22T09:00:00",
      read: true,
      labels: ["meeting", "work", "important"],
    },
    
  ]
  
  export type Feed = {
    id: string;
    video:boolean;
    name: string;
    postUrl: string;
    email: string;
    caption: string;
    date: string;
    read: boolean;
    labels: string[];
    openComments?: boolean; // Add the new property here
  };
  
  export const accounts = [
    {
      label: "Alicia Koch",
      email: "alicia@example.com",
      icon: (
        <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <title>Vercel</title>
          <path d="M24 22.525H0l12-21.05 12 21.05z" fill="currentColor" />
        </svg>
      ),
    },
    {
      label: "Alicia Koch",
      email: "alicia@gmail.com",
      icon: (
        <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <title>Gmail</title>
          <path
            d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"
            fill="currentColor"
          />
        </svg>
      ),
    },
    {
      label: "Alicia Koch",
      email: "alicia@me.com",
      icon: (
        <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <title>iCloud</title>
          <path
            d="M13.762 4.29a6.51 6.51 0 0 0-5.669 3.332 3.571 3.571 0 0 0-1.558-.36 3.571 3.571 0 0 0-3.516 3A4.918 4.918 0 0 0 0 14.796a4.918 4.918 0 0 0 4.92 4.914 4.93 4.93 0 0 0 .617-.045h14.42c2.305-.272 4.041-2.258 4.043-4.589v-.009a4.594 4.594 0 0 0-3.727-4.508 6.51 6.51 0 0 0-6.511-6.27z"
            fill="currentColor"
          />
        </svg>
      ),
    },
  ]
  
  export type Account = (typeof accounts)[number]
  
  export const contacts = [
    {
      name: "Emma Johnson",
      email: "emma.johnson@example.com",
    },
    {
      name: "Liam Wilson",
      email: "liam.wilson@example.com",
    },
    {
      name: "Olivia Davis",
      email: "olivia.davis@example.com",
    },
    {
      name: "Noah Martinez",
      email: "noah.martinez@example.com",
    },
    {
      name: "Ava Taylor",
      email: "ava.taylor@example.com",
    },
    {
      name: "Lucas Brown",
      email: "lucas.brown@example.com",
    },
    {
      name: "Sophia Smith",
      email: "sophia.smith@example.com",
    },
    {
      name: "Ethan Wilson",
      email: "ethan.wilson@example.com",
    },
    {
      name: "Isabella Jackson",
      email: "isabella.jackson@example.com",
    },
    {
      name: "Mia Clark",
      email: "mia.clark@example.com",
    },
    {
      name: "Mason Lee",
      email: "mason.lee@example.com",
    },
    {
      name: "Layla Harris",
      email: "layla.harris@example.com",
    },
    {
      name: "William Anderson",
      email: "william.anderson@example.com",
    },
    {
      name: "Ella White",
      email: "ella.white@example.com",
    },
    {
      name: "James Thomas",
      email: "james.thomas@example.com",
    },
    {
      name: "Harper Lewis",
      email: "harper.lewis@example.com",
    },
    {
      name: "Benjamin Moore",
      email: "benjamin.moore@example.com",
    },
    {
      name: "Aria Hall",
      email: "aria.hall@example.com",
    },
    {
      name: "Henry Turner",
      email: "henry.turner@example.com",
    },
    {
      name: "Scarlett Adams",
      email: "scarlett.adams@example.com",
    },
  ]
  
  export type Contact = (typeof contacts)[number]