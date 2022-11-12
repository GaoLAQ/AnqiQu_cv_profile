import Api from "@/services/Api";

export default {
  getAllMusic() {
    return Api().get("music");
  },
  addMusic(musicData) {
    return Api().post("music", musicData);
  },
  showSingleMusic(musicId) {
    return Api().get(`music/${musicId}`);
  },
  editSingleMusic(musicId, musicData) {
    console.log("checking service", musicId, musicData);
    return Api().put(`music/${musicId}`, musicData);
  },
  deleteSingleMusic(musicId) {
    return Api().delete(`music/${musicId}`);
  },
};

// /songs
// /songs/:id
