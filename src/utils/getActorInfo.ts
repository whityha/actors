import {ACTOR, ATTRIBUTES_GROUP_NAMES} from '@/types'
import { getDataByAttributeGroup } from './getDataByAttributeGroup';
import { getDataByAttribute } from './getDataFromAttribute';

export const getActorInfo = (actorInfo: ACTOR): any => {
    const name = actorInfo.heading_title;
    const deleteTags = (str: string): string => {
        let newStr = '';
        if(str.indexOf('<') !== -1 && str.indexOf('>') !== -1) {
            const i = str.indexOf('<');
            const j = str.indexOf('>');
            newStr = `${str.slice(0, i)} ${str.slice(j + 1)}`
            return deleteTags(newStr)
        } else {
            return str
        }
    }
    const description = deleteTags(actorInfo.description)

    const image = actorInfo.thumb
    const info = getDataByAttributeGroup(actorInfo.attribute_groups, ATTRIBUTES_GROUP_NAMES.INFO);
    const videos = getDataByAttributeGroup(actorInfo.attribute_groups, ATTRIBUTES_GROUP_NAMES.VIDEOS)?.attribute;
    const video = getDataByAttribute(info!.attribute).youtube
    return {
        name,
        description,
        image,
        info,
        videos,
        video
    }
}   