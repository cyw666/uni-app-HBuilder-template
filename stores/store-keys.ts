const storePrefix = 'human'
function createName(key: string) {
	return `${storePrefix}-${key}`
}

export const TICKET = createName('ticket')
export const CHANNELID = createName('channelId')
export const PROVINCE_CODE = createName('provinceCode')
export const CITY_CODE = createName('cityCode')
export const SCOPETYPE = createName('scopeType')
export const PROVINCE_TICKET = createName('province-ticket')
export const VOICEFLAG = createName('voiceFlag')
export const VOICEENABLE = createName('voiceEnable')
export const NEW_CONVERSATION = createName('isNewConversation')
export const USER_PHONE = createName('userPhone')
export const AD_LIST = createName('adList')
export const SELECTED_EVALUATE_TIME = createName('selectedEvaluateTime') //评价不满意是否选择原因
export const CHAT_LIST = createName('chatList')
export const IS_TERM_START = createName('isTermStart')
export const LAST_TIME_REQUEST = createName('lastTimeRequest')
