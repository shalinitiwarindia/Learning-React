import { useParams } from "react-router-dom"

export const UserDetails = () => {
    const {id} = useParams();
    return <div>User ID: {id}</div>;
}
