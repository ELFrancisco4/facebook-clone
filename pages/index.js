import Head from "next/head";
import ActivityComponent from "../Components/Feed/Activity/Molecules/ActivityComponent";
import StoryComponent from "../Components/Feed/Story/MainStoryComponent";
import FriendComponent from "../Components/Header/Header-center/Friends/atoms/FriendComponent";
import FriendNavComponent from "../Components/Header/Header-center/Friends/molecules/FriendNavComponent";
import UserFriendsComponent from "../Components/Header/Header-center/Friends/molecules/UserFriendsComponent";
import NotificationComponent from "../Components/Header/Header-right/Notification component/Molecules/NotificationComponent";
import AccountComponent from "../Components/Login Page/atoms/AccountComponent";
import LoginComponent from "../Components/Login Page/Molecules/LoginComponent";

const Home = () => {
  return (
    <div className="main-box">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      {/* <ActivityComponent/> */}
       {/* <LoginComponent />  */}
   {/* <UserFriendsComponent/>  */}
      {/* <FriendComponent/>  */}
     {/* <AccountComponent/> */}
      <UserFriendsComponent/>
     
    </div>
  );
};
export default Home;
