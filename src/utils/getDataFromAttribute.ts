import {ACTOR, INFO_ATTRIBUTES_NAMES} from '@/types'
type ATTRIBUTES_GROUP = ACTOR['attribute_groups'][number]['attribute']

interface ATTRIBUTE {    
    name: INFO_ATTRIBUTES_NAMES,
    text: string
    
}

interface ACTOR_INFO {
    options: ATTRIBUTE[];
    youtube: string;
    filmtoolz: string;
    kinolift: string;
    pdf: string;
}

export const getDataByAttribute = (array: ATTRIBUTES_GROUP): ACTOR_INFO => {
    const pdf = array.find((group) => group.name === INFO_ATTRIBUTES_NAMES.PDF)?.text || ''
    const look = array.find((group) => group.name === INFO_ATTRIBUTES_NAMES.LOOK)?.text || ''
    const birthday = array.find((group) => group.name === INFO_ATTRIBUTES_NAMES.BIRTHDAY)?.text || ''
    const filmtoolz = array.find((group) => group.name === INFO_ATTRIBUTES_NAMES.FILMTOOLZ)?.text || ''
    const kinolift = array.find((group) => group.name === INFO_ATTRIBUTES_NAMES.KINOLIFT)?.text || ''
    const weight = array.find((group) => group.name === INFO_ATTRIBUTES_NAMES.WEIGHT)?.text || ''
    const height = array.find((group) => group.name === INFO_ATTRIBUTES_NAMES.HEIGHT)?.text || ''
    const youtube = array.find((group) => group.name === INFO_ATTRIBUTES_NAMES.YOUTUBE_ID)?.text || ''
    return {
        options: [
            {
                name: INFO_ATTRIBUTES_NAMES.LOOK,
                text: look
            },
            {
                name: INFO_ATTRIBUTES_NAMES.BIRTHDAY,
                text: birthday
            },
            {
                name: INFO_ATTRIBUTES_NAMES.WEIGHT,
                text: weight
            },
            {
                name: INFO_ATTRIBUTES_NAMES.HEIGHT,
                text: height
            }
        ],
        youtube,
        kinolift,
        filmtoolz,
        pdf
    }
}   