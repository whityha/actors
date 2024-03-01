export enum ATTRIBUTES_GROUP_NAMES {
    HOBBY = 'Хобби',
    FILMS = 'Фильмография',
    INFO = 'Основная информация',
    ROLES = 'Актеры в афишах',
    VIDEOS = 'Видео визитки'
}

export enum INFO_ATTRIBUTES_NAMES {
    PDF = 'pdf',
    WEIGHT = 'Вес',
    YOUTUBE_ID = 'ID видео-визитки на youtube',
    LOOK = 'Внешность',
    FILMTOOLZ = 'filmtoolz',
    KINOLIFT = 'kinolift',
    PORTFOLIO = 'Портфолио',
    BIRTHDAY = 'Дата рождения',
    HEIGHT = 'Рост'
}

export interface ACTOR {
    product_id: number;
    products: ACTOR_IN_ACTORS[]
    heading_title: string;
    attribute_groups: {
        name: ATTRIBUTES_GROUP_NAMES;
        attribute_group_id: string
        attribute: {
            attribute_id: string;
            name: string;
            text: string;
        }[];
    }[];
    description: string;
    thumb: string;
    images: {
        popup: string;
        thumb: string;
    }[];
}

export interface ACTOR_IN_ACTORS {
    attribute_groups: any[];
    description: string;
    name: string;
    product_id: string;
    images: {
        popup: string;
        thumb: string;
    }[];
}

export type ATTRIBUTES_GROUPS = ACTOR['attribute_groups']
export type ATTRIBUTES_GROUP = ACTOR['attribute_groups'][number]
export type FilmsAndHobbies = {
    films?: ATTRIBUTES_GROUP,
    hobbies?: ATTRIBUTES_GROUP
}