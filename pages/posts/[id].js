import { getAllPostIds, getPostData, getSortedPostsData} from '../../lib/posts';
import Layout from '../../components/Layout';
import Blogs from '../../components/Blogs';
import PostLayout from '../../components/layouts/Post';

export async function getStaticPaths() {
    const paths = getAllPostIds();
    return {
      paths,
      fallback: false,
    };
}

export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id);
    const allPostsData = getSortedPostsData();

    return {
      props: {
        postData,
        allPostsData
      },
    };
}
  
export default function Post({ postData, allPostsData }) {
    const filteredPosts = allPostsData.filter(post => post.id !== postData.id);

    return (
        <Layout
            metaDescription={postData.description}
            pageTitle={postData.title}
        >
            <PostLayout postData={postData} />

            <div className='bg-gray-100'>
                <Blogs posts={filteredPosts} heading='More Posts' showEmail={false}/>
            </div>
        </Layout>
    );
}