function songs(array) {
    class Song {
        constructor(type, name, time) {
            this.type = type
            this.name = name
            this.time = time
        }
    }
    let songList = []
    let numberOfSongs = Number(array.shift())
    let typeOfSongs = array.pop()

    for (let index = 0; index < numberOfSongs; index++) {
        let [type, name, time] = array[index].split('_')
        let currSong = new Song(type, name, time)
        songList.push(currSong)
    }
    if (typeOfSongs === 'all') {
        songList.forEach((s) => console.log(s.name))
    } else {
        let filtered = songList.filter((s) => s.type === typeOfSongs)
        filtered.forEach((s) => console.log(s.name))
    }
}
songs([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite']
)

console.log('---');
songs([4,
    'favourite_DownTown_3:14',
    'listenLater_Andalouse_3:24',
    'favourite_In To The Night_3:58',
    'favourite_Live It Up_3:48',
    'listenLater']
)
console.log('---');
songs([2,
    'like_Replay_3:15',
    'ban_Photoshop_3:48',
    'all']
)

