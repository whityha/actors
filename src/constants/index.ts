export const YOUTUBE_LINK = 'https://www.youtube.com/@ilyanovikov7486/'

export const ACTORS_LINK = import.meta.env.VITE_ACTORS_LINK
export const ACTOR_LINK = import.meta.env.VITE_ACTOR_LINK
export const POSTERS_LINK = import.meta.env.VITE_POSTERS_LINK


export const TELEPHONE = '+7 (903) 969-55-09'
export const EMAIL = 'info@abnagency.ru'
export const TELEGRAM = 'https://t.me/misternovikov'
export const WHATS_APP = 'https://wa.me/79039695509'
export const APPEAL = 'https://youtu.be/Ay3ljTMQeoY'
export const PDF_ALL_ACTORS = '/assets/PDF/Шахматка итог.pdf'

export const NEW_LINE_DELIMITER = ';'

export const LINKS = [
    {
        id: 0,
        name: 'АКТЕРЫ',
        link: '#actors'
    },
    {
        id: 1,
        name: 'АФИШИ',
        link: '#posters'
    },
    {
        id: 2,
        name: 'ВИЗИТКИ',
        link: '#cards'
    },
    {
        id: 3,
        name: 'КОНТАКТЫ',
        link: '#footer'
    }
]

export enum MEDIA_QUERY {
    mobile = 576,
    medium = 768,
    large = 992,
    big = 1200,
    max = 1400
}

export type LINK = typeof LINKS[number]