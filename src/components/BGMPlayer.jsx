class BGMManager {
    constructor() {
        if (BGMManager.instance) {
            return BGMManager.instance;
        }
        BGMManager.instance = this;
        this.bgm = new Audio();
        this.bgmSrc = '';
        this.volume = 0.1;
        return this;
    }

    playBGM(src) {
        if (this.bgmSrc === src) {
            this.bgm.play();
            return;
        }
        this.bgm.pause();
        this.bgmSrc = src;
        this.bgm.src = src;
        this.bgm.volume = this.volume;
        this.bgm.loop = false;
        this.bgm.play();
    }

    pauseBGM() {
        this.bgm.pause();
    }
}

export default new BGMManager();
