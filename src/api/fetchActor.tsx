import  {ACTOR_LINK} from "@/constants"

export const fetchActor = async (id: string): Promise<any> => {
    return await fetch(`${ACTOR_LINK}${id}`, {
                headers: {
                    Accept: "text/html,application/xml;q=0.9image/webp;v=b3;q=0.7"
                }
            })
            .then((resp) => resp.json())
}