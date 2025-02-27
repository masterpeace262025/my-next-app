import Blog1 from "../assect/Images/blog1.png"
import Blog2 from "../assect/Images/blog2.png"
import Blog3 from "../assect/Images/blog3.png"
import AboutImg from "../assect/Images/AboutImg.png"
import { IAbout, IBlog, INavigation } from "../type";

// Blog Data
export const BalogData: IBlog[] = [
    {
        id: 1,
        img: Blog1,
        title: "Hiking through the woods",
        postDate: "Apr 12, 2022",
        dec: "This is Rich Text, which includes both external links and links to internal documents. Links should be handled intelligently or everything might break. Don't forget about media, too! Do your best to render images using an HTML Serializer.",
    },
    {
        id: 2,
        img: Blog2,
        title: "Beach resort vacation,",
        postDate: "Mar 22, 2022",
        dec: "Massa sapien faucibus et molestie ac feugiat sed lectus. Dignissim cras tincidunt lobortis feugiat vivamus at augue. Pharetra pharetra massa massa ultricies. Ut morbi tincidunt augue interdum. Volutpat odio facilisis mauris sit amet massa vitae. In dictum non consectetur a erat nam. Pulvinar pellentesque habitant morbi tristique senectus et."
    },

    {
        id: 3,
        img: Blog3,
        title: "Perilous yoga",
        postDate: "Jan 6, 2022",
        dec: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse…  "

    },
];

// About page data
export const aboutData: IAbout[] = [
    {
        id: 1,
        img: AboutImg,
        title: "Hi, I’m Margaret. Welcome to my safe place where I write about everything I find inspiring and you might find too.",
        subTitle: "“You go girl!” — George Washington",
        dec: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin eu tincidunt porta condimentum mauris interdum facilisis. Maecenas augue netus faucibus lorem. Nulla sed non, elementum mi netus libero. Tempor quam sed nunc fames bibendum id facilisis ipsum commodo. Neque, augue feugiat eu condimentum ut lorem. Faucibus mi tellus, iaculis facilisis sagittis. Viverra hendrerit magna pellentesque at convallis purus amet, pellentesque et. Potenti tempor volutpat massa tortor mauris tincidunt tellus diam pharetra. Viverra praesent lacinia dictum tortor erat risus nulla gravida sed. Platea varius venenatis habitasse est maecenas sapien eu, volutpat. Cursus diam auctor neque ut. Tempor, in tortor odio in mollis sollicitudin"
    }
]

// Navbar data
export const navLinks: INavigation[] = [
    {
        name: "Articles",
        path: "/",
    },
    {
        name: "About",
        path: "/about",
    },
    {
        name: "Contact Me",
        path: "/contact",
    },
    {
        name: "Dashboard",
        path: "/dashboard",
    },
    {
        name: "Quotes",
        path: "/quotes",
    },
    {
        name: "Login",
        path: "/login",
    },
    {
        name: "Registore",
        path: "/registor",
    },
    
];
export const AdminNavLinks: INavigation[] = [
    {
        name: "Nav1",
        path: "/dashboard/admin/nav1",
    },
    {
        name: "Nav2",
        path: "/dashboard/admin/nav2",
    },
    {
        name: "Nav3",
        path: "/dashboard/admin/nav3",
    },
    
];


// sidebar data
export const sideNav: INavigation[] = [
    {
        name: "Back to home",
        path: "/",
    },
    {
        name: "Dashboard",
        path: "/dashboard",
    },
    {
        name: "User",
        path: "/dashboard/user",
    },
    {
        name: "Admin",
        path: "/dashboard/admin",
    },
    {
        name: "Product",
        path: "/dashboard/product",
    },
];