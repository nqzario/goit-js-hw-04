const profile = {
    username: "Jacob",
    playTime: 300,

    getInfo() {
        const message = `${this.username} has ${this.playTime} active hours!`;
        return message;
    },
    changeUsername(newName) {
        this.username = newName;
    },
    updatePlayTime(hours) {
        this.playTime += hours;
    }
}

//!  ===========================================================================

console.log(profile.getInfo()); // "Jacob has 300 active hours!"

profile.changeUsername("Marco");
console.log(profile.getInfo()); // "Marco has 300 active hours!"

profile.updatePlayTime(20);
console.log(profile.getInfo()); // "Marco has 320 active hours!"

