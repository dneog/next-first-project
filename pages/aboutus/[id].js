import {getPosts} from '../userData/data';

export default function Post({post}){
    return(
        <>
            {post.map((posts)=> (
                <div key={posts.id}>
                    <h2>{posts.name}</h2>
                    <h2>{posts.role}</h2>
                </div>
            ))}
        </>
    )
}

export async function getStaticProps({params}){
    const {id} = params
    const post= getPosts(id)
    return{
        props: {post}
    }
}

export async function getStaticPaths(){
    const posts= getPosts()

    const paths= posts.map(post=> ({
        params : {id: post.id.toString()}
    })
    )
    return{
        paths,
        fallback: false
    }
}