import React from 'react';


export default function Hero() {
  return (
    <>
    <div
        className="hero min-h-screen rounded-lg mt-7"
        style={{
                    backgroundImage: "url(https://plus.unsplash.com/premium_photo-1691735666207-be6e91326e3a?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
                }}>
        <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Namastey Nepal</h1>
                    <p className="mb-5">
                        Blood Donation is a platform that helps you to find blood donors in your area. 
                        Rather than going to Blood bank or finding donors through personal networks, Join BloodNepal
                        and find donors near your area.
                    </p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    </>
  )
}
