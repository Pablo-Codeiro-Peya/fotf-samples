import {useEffect, useState} from "react";

export default function Csr() {
    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        fetch('./api/hello')
            .then((res) => res.json())
            .then((data) => {
                setData(data)
                setLoading(false)
            })
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
            <img src="https://via.placeholder.com/728x90" />
        </div>
    )

}

