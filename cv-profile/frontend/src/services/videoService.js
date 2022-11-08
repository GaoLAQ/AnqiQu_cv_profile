import Api from "@/services/Api";

export default {
  getAllVideo() {
    return Api().get("videos");
  },
  addVideo(videoData) {
    return Api().post("videos", videoData);
  },
};
