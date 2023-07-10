import ResponseDB from './ResponseModel.js';

export const createResponse = async responseData => {
  try {
    const createdResponse = await ResponseDB.create(responseData);
    return createdResponse;
  } catch (e) {
    throw new Error(e.message);
  }
};

export const getResponseById = async respondId => {
  try {
    const respond = await ResponseDB.findById(respondId);
    return respond;
  } catch (e) {
    throw new Error(e.message);
  }
};

export const getAllResponses = async (page, limit) => {
  try {
    const perPage = parseInt(limit) || 5;
    const skip = ((parseInt(page) || 1) - 1) * perPage;
    const allResponds = await ResponseDB.find().sort({ createdAt: -1 });

    const responds = await ResponseDB.find()
      .sort({ createdAt: -1 })
      .limit(perPage)
      .skip(skip);

    const valueRating =
      allResponds.reduce((sum, response) => sum + Number(response.rating), 0) /
      allResponds.length;
    const roundedValueRating = Number(valueRating.toFixed(1));
    const respondsForHome = allResponds.slice(0, 3);

    const totalFound = await ResponseDB.countDocuments();

    return {
      totalFound,
      responds,
      roundedValueRating,
      respondsForHome,
    };
  } catch (e) {
    throw new Error(e.message);
  }
};

export const updateResponse = async (responseId, responseData) => {
  try {
    const updatedResponse = await ResponseDB.findByIdAndUpdate(
      responseId,
      responseData,
      { new: true }
    );
    return updatedResponse;
  } catch (e) {
    throw new Error(e.message);
  }
};

export const deleteResponse = async responseId => {
  try {
    const deletedResponse = await ResponseDB.findByIdAndDelete(responseId);
    return deletedResponse;
  } catch (e) {
    throw new Error(e.message);
  }
};
