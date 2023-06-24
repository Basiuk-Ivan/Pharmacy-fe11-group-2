import {useSelector} from "react-redux";

export const useAuth = () => {
    const {id} = useSelector(state => state.user);

    return {
        isAuth: !!id,
        id
    };
}