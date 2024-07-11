import React from "react";

import { Link } from "react-router-dom";

export default function Post(){

    const markdowFiles= [
        {name : "글1", content : "내용1"},
        {name : "글테스트", content : "내용2"}
    ]


    return (
        <div className="flex-1 py-8 px-6">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="col-span-3">
                    <h2 className="text-2xl font-bold mb-4"> 글 </h2>
                    <div className="grid grid-cols-2 md:grid-cols-2 gap-6">
                        {markdowFiles.map((file, index) => (
                            <Link
                                key={index} 
                                to={`/blog/${file.name}`}
                                className="rounded-lg overflow-hidden shadow-md"                            
                            >
                                <div className="p-4">
                                    <h3 className="text-lg font-bold mb-2"> {file.name} </h3>
                                    <p className="text-muted"> {file.content} </p>
                                </div>
                        </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
