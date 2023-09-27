
import type { APIRoute } from "astro";
import { XataClient } from "../../../../xata";

const client = new XataClient({ apiKey: import.meta.env.XATA_API_KEY })
export const DELETE: APIRoute = async ({ params, request }) => {
    const id = params.id

    if (!id) {
        return new Response(JSON.stringify({ err: 'id is required' }), {
            status: 400
        })

    }

    const deleteJob = await client.db.job.delete(id)
    return new Response(
        JSON.stringify(deleteJob), {
        status: 200,
        headers: {
            "Content-Type": "application/json"
        }
    }
    );

}

export const PUT: APIRoute = async ({ params, request }) => {
    const id = params.id

    if (!id) {
        return new Response(JSON.stringify({ err: 'id is required' }), {
            status: 400
        })

    }

    const job = await request.json()
    const updateJob = await client.db.job.update(id, job)
    return new Response(
        JSON.stringify(updateJob), {
        status: 200,
        headers: {
            "Content-Type": "application/json"
        }
    }
    );

}
