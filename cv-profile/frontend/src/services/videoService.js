import Api from "@/services/Api";

export default {
  getAllVideo() {
    return Api().get("video");
  },
  addVideo(videoData) {
    return Api().post("video", videoData);
  },
};
