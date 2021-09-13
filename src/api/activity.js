import request from "@/utils/request";

const getActivityList = function (data) {
    return request({
        url: "/manage/Activity/getActivityList",
        method: "post",
        data
    });
};

const getActivityInfo = function (data) {
    return request({
        url: "/manage/Activity/getActivityInfo",
        method: "post",
        data
    });
};

// 编辑活动
const editActivity = function (data) {
    return request({
        url: "/manage/Activity/editActivity",
        method: "post",
        data
    });
}

// 编辑活动
const getActivityWorksByAId = function (data) {
    return request({
        url: "/manage/Activity/getActivityWorksByAId",
        method: "post",
        data
    });
}

const getActivityWorkInfo = function (data) {
    return request({
        url: "/manage/Activity/getActivityWorkInfo",
        method: "post",
        data
    });
}

const examineActivityWork = function (data) {
    return request({
        url: "/manage/Activity/examineActivityWork",
        method: "post",
        data
    });
}

const activityApi = {
    getActivityList,
    getActivityInfo,
    editActivity,
    getActivityWorksByAId,
    getActivityWorkInfo,
    examineActivityWork
}

export default activityApi