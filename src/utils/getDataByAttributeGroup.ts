import {ATTRIBUTES_GROUP, ATTRIBUTES_GROUPS, ATTRIBUTES_GROUP_NAMES} from '@/types'

export const getDataByAttributeGroup = (array: ATTRIBUTES_GROUPS, name: ATTRIBUTES_GROUP_NAMES): ATTRIBUTES_GROUP | undefined => {
    const data = array.find((group) => group.name === name)
    return data
}   