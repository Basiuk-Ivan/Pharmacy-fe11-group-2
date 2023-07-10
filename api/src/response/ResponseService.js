import {
  createResponse,
  getResponseById,
  getAllResponses,
  updateResponse,
  deleteResponse,
} from './ResponceDataAccess.js';

export const createResponseService = async requestData => {
  try {
    const createdResponse = await createResponse(requestData);
    return createdResponse;
  } catch (e) {
    throw new Error(e.message);
  }
};

export const getResponseService = async (page, limit, respondId) => {
  try {
    if (respondId) {
      const respond = await getResponseById(respondId);
      return respond;
    } else {
      const responseList = await getAllResponses(page, limit);
      return responseList;
    }
  } catch (e) {
    throw new Error(e.message);
  }
};

export const updateResponseService = async (responseId, requestData) => {
  try {
    const updatedResponse = await updateResponse(responseId, requestData);
    return updatedResponse;
  } catch (e) {
    throw new Error(e.message);
  }
};

export const deleteResponseService = async responseId => {
  try {
    const deletedResponse = await deleteResponse(responseId);
    return deletedResponse;
  } catch (e) {
    throw new Error(e.message);
  }
};
