const getNoticesByCategory = require('./getNoticesByCategory');
const addNewNoticesController = require('./addNewNoticesController');
const noticesByIdController = require('./noticesByIdController');
const deleteNoticesController = require('./deleteNoticesController');
const addToFavoriteNoticesController = require('./addToFavoriteNoticesController ');
const getFavoriteNotices = require('./getFavoriteNotices');
const removeFromFavoriteNotices = require('./removeFromFavoriteNotices');
module.exports = {
  getNoticesByCategory,
  addNewNoticesController,
  noticesByIdController,
  deleteNoticesController,
  addToFavoriteNoticesController,
  getFavoriteNotices,
  removeFromFavoriteNotices,
};