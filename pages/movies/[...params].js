import { useRouter } from "next/router";
import SEO from "../../components/SEO";

const Detail = ({ params }) => {
    const router = useRouter();
    const [title, id] = params || [];
    return (
        <div>
            <SEO title={title} />
            <h4>{title}</h4>
        </div>
    );
}

export default Detail;

export function getServerSideProps({params: { params }}) {
    return {
        props: {
            params
        }
    }
};