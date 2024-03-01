export interface ActorList {
    actors: Actor[]
}

export interface Actor {
    attribute_groups: [];
    product_id: number;
    name: string;
    images: {
        popup: string;
        thumb: string;
    }[] | [];
}