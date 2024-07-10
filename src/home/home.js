import React from "react";
import eagle from "../image/eagle.jpg";
import Career from "./career";

export default function Home(){

    const careerList = [
        { title : "제목1", subTitle : "부제목1", date : "날짜1", comment : "댓글1"},
        { title : "제목2", subTitle : "부제목2", date : "날짜2", comment : "댓글2"},
        { title : "제목3", subTitle : "부제목3", date : "날짜3", comment : "댓글3"}
    ]

    return (
        <div className="w-full max-w-3-xl mx-auto py-12 px4 sm:px-5 lg:px8">
            <div className="flex flex-col items-center space-y-6">
                <div className="flex flex-col items-center space-y-2">
                    <span className="flex overflow-hidden rounded-full w-24 h-24 ring-2 ring-primary">
                        <img alt="User Profile" src={eagle}/>
                    </span>
                    <div className="text-center">
                        <h1 className="text-4xl font-bold"> 박지성 </h1>
                        <p className="text-cyan-500"> 
                            대학생
                        </p>
                    </div>
                    <div className="text-center max-w-xl">
                        <p className="text-stone-400">
                            물이악소이위지 물이선소이불위지 <br></br>
                            나쁜 일이 작다하여 해서는 안 되고 좋은 일이 사소하다하여 넘어가서는 안 된다
                        </p>
                    </div>
                </div>
            </div>
            <div className="mt-12 space-y-16">
                <div>
                    <h2 className="text-2xl font-bold mb-4"> 경력 </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {careerList.map((option) => (
                            <Career 
                                title={option.title} 
                                subTitle={option.subTitle}
                                date={option.date}
                                comment={option.comment}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
