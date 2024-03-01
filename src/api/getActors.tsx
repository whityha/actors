import  {ACTORS_LINK} from "@/constants"

export const getActors = async (): Promise<any> => {    
    
    return await fetch(ACTORS_LINK, {
                headers: {
                    Accept: "text/html,application/xml;q=0.9image/webp;v=b3;q=0.7"
                }
            })
            .then((resp) => resp.json())
            .then(data => data.products.sort((a: any, b: any) => a.product_id - b.product_id))
}