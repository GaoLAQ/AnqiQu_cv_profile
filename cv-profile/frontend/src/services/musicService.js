import Api from "@/services/Api";

export default {
  getAllMusic() {
    return Api().get("music");
  },
  addMusic(musicData) {
    return Api().post("music", musicData);
  },
};

// /songs
// /songs/:id
