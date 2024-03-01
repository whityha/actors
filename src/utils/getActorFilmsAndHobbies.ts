import {ACTOR, ATTRIBUTES_GROUP_NAMES, FilmsAndHobbies} from '@/types'
import { getDataByAttributeGroup } from './getDataByAttributeGroup';

export const getActorFilmsAndHobbies = (actorInfo: ACTOR): FilmsAndHobbies => ({
        films: getDataByAttributeGroup(actorInfo.attribute_groups, ATTRIBUTES_GROUP_NAMES.FILMS),
        hobbies: getDataByAttributeGroup(actorInfo.attribute_groups, ATTRIBUTES_GROUP_NAMES.HOBBY),
    })