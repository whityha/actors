import { POSTERS_LINK } from "@/constants"

export const fetchPosters = async (): Promise<any> => {
    return await fetch(`${POSTERS_LINK}`, {
                headers: {
                    Accept: "text/html,application/xml;q=0.9image/webp;v=b3;q=0.7"
                }
            })
            .then((resp) => resp.json())
}