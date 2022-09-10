export default function Ssr({data}) {
    return <div>
        <h1>{data.name}</h1>
        <button type="button" onClick={() => {
            throw new Error("Sentry Frontend Error");
        }}>
            Throw error
        </button>
        <img src="https://via.placeholder.com/728x90" />
    </div>
}

export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch(`https://fotf-poc.vercel.app/api/hello`)
    const data = await res.json()

    // Pass data to the page via props
    return { props: { data } }
}

