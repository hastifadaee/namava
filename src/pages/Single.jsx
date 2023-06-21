import { useEffect, useState } from "react";
import { GetSingle } from "../queries/GetSingle";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { SET } from "../redux/slices/singleMovieSlice";
import { SingleHead } from "../containers/SingleHead";
import { SingleMiddle } from "../containers/SingleMiddle";
import { SingleEnd } from "../containers/SingleEnd";
import { Header } from "../containers/Header";

export const Single = () => {
    const [loading, setLoading] = useState(true);
    const dispatcher = useDispatch();
    const { id, wich } = useParams();
    useEffect(() => {
        getData();
    }, [id]);
    const getData = async () => {
        setLoading(true) ;
        const data = await GetSingle(id, wich);
        dispatcher(SET(data.data.result));
        setLoading(false);
    }
    return (
        loading ? '' :
            <>
                <Header />
                <SingleHead />
                <SingleMiddle />
                <SingleEnd />
            </>
    )

}