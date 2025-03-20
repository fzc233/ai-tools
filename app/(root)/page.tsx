import React from "react";
import { UserButton, SignedIn, SignedOut, RedirectToSignIn } from "@clerk/nextjs";

const Home = () => {
    return (
        <div>
            {/* 用户已登录时显示 Home 页面 */}
            <SignedIn>
                <p>Home</p>
                <UserButton afterSignOutUrl="/" />
            </SignedIn>

            {/* 用户未登录时，跳转到 SignIn 页面 */}
            <SignedOut>
                <RedirectToSignIn />
            </SignedOut>
        </div>
    );
};

export default Home;
