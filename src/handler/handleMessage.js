import { MESSAGES, STATUS } from '#utils/constants.js'

const handleMessage = (rowCount, entity = 'registro') => {
  switch (rowCount) {
    case 1:
      return { status: STATUS.SUCCESS, detail: MESSAGES.UPDATE_SUCCESS(entity) }
    case 0:
      return { status: STATUS.WARNING, detail: MESSAGES.NOT_FOUND(entity) }
    default:
      return { status: STATUS.INFO, detail: MESSAGES.NO_CHANGES(entity) }
  }
}

export default handleMessage
