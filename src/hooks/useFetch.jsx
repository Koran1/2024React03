import { useEffect, useState } from "react";

function useFetch(url) {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch(url)
            .then(res => {
                return res.json();
            })
            .then(data => {
                setData(data)
            })
            .catch(err => {
                console.error("Error : ", err)
            })
    }, [url]);
    return data;
}

export default useFetch;