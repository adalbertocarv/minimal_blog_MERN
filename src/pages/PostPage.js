
import { useEffect, useState } from "react";
import { useParams } from "react-router";

export default function PostPage() {
    const [postInfo,setPostInfo] = useState();
    const {id} = useParams();

    useEffect(() => {
        console.log(id);
        fetch(`http://localhost:4000/post/${id}`).then(response => {
            response.json(postInfo => {

            });
        });
    }, [])
    return (
        <div>Post page here</div>
    );
}