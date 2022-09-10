import {useEffect, useState} from "react";

export default function Fotf() {
    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        window.__INITIAL_STATE__
            .then((data) => {
                setData(data)
            })
            .catch(e => { 
                console.error("Error loading", e);
                setData({name: 'Error loading'}) 
            })
            .finally(() => setLoading(false))
    }, [])

    if (isLoading) return <p>Loading...</p>
    if (!data) return <p>No profile data</p>

    return (
        <div>
            <h1>{data.name}</h1>
            <button type="button" onClick={() => {
                throw new Error("Sentry Frontend Error");
            }}>
                Throw error
            </button>
            <img src="https://via.placeholder.com/1024x1024" />
        </div>
    )

}

