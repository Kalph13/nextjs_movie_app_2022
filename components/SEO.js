import Head from 'next/head'

/* SEO Can Include All the Information for SEO (Tags, Meta Descriptions, etc.) */

const SEO = ({ title }) => {
    return (
        <Head>
            <title>{title} | NextJS Movies</title>
        </Head>
    );
};

export default SEO;