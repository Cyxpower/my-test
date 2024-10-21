<template>
    <div class="background" @mousemove="resetCursor" @mouseleave="hideCursor">
        <div class="layer1"></div>
        <div class="layer2"></div>
        <div class="layer3"></div>
        <div class="layer4"></div>
        <div class="m-36 h-56">
            <div class="lyrics text-[#38495a] text-center text-2xl "> </div>
        </div>
        <div class="title">
            
            <div class="music-name">正在播放：{{ truncatedMusicName }}-{{ truncatedAuthor }}<span v-show="bgMusic.loop">
                    (单曲循环)</span></div>
            <div v-show="!bgMusic.loop" class="justify-center flex text-[#38495a] text-5xl mt-8"><span
                    v-if="currentSongIndex !== songs.length - 1">下一首：{{ nextMusicName ? nextMusicName : '' }}-{{
                        nextMusicAuthor ? nextMusicAuthor : '' }}</span> <span v-else>下一首：{{ songs[0].name
    }}-{{ songs[0].author }} </span> </div>
            <div class="player-container">
                <div class="justify-center flex text-[#38495a] ">
                    <h1>星空音乐({{ bgMusic.loop ? '单曲' : '列表' }}循环模式)</h1>
                </div>
            </div>
            <!-- 底部的进度条部分，更宽并且占据整个宽度 -->
            <div v-show="hideTemp" class="fixed bottom-0 left-0 right-0 bg-transparent px-32 py-8">
                <div class="flex items-center justify-center text-gray-500  ">
                    <div class="flex flex-1 items-center justify-center ">
                        <div class="" style="width: 380px;">
                            <span class="text-5xl">{{ currentTime }}/{{ totalDurationMinutes }}:{{
                                totalDurationSeconds }}</span>
                        </div>
                        <div class="flex mr-16">
                            <div class="flex"> <button @click="previousSong"><van-icon name="arrow-left" size="48"
                                        color="gray"></van-icon></button>
                                <button @click="toggleMusic"><van-icon
                                        :name="isPlaying ? 'pause-circle-o' : 'play-circle-o'"
                                        :size="isMuted ? '48px' : '48px'" :color="isPlaying ? 'gray' : 'gray'" /></button>
                                <button @click="nextSong"><van-icon name="arrow" size="48" color="gray"></van-icon></button>
                                <button @click="restartMusic"><van-icon name="replay" size="48"
                                        color="gray"></van-icon></button>
                            </div>
                        </div>
                    </div>
                    <div class="flex items-center w-full mr-8">
                        <input type="range" v-model="progress" @input="seekToPosition" min="0" :max="1" step="0.01"
                            class="w-full h-4">
                    </div>
                    <button class="mr-4" @click="isLoop"><van-icon :name="bgMusic.loop ? 'revoke' : 'exchange'"
                            :size="bgMusic.loop ? '48px' : '48px'" :color="bgMusic.loop ? 'gray' : 'gray'" /></button>
                    <button class="mr-2" @click="toggleMute"><van-icon :name="isMuted ? 'volume-o' : 'volume'"
                            :size="isMuted ? '48px' : '48px'" :color="isMuted ? 'gray' : 'gray'" /></button>

                    <input type="range" @input="setVolume" v-model="volume" min="0" max="1" step="0.1">
                </div>
            </div>


        </div>

    </div>
</template>

<script setup>
import { ref, onMounted, computed, watchEffect, watch, onUnmounted } from 'vue';
import { showToast } from 'vant';
const songs = [
    { url: 'src\\assets\\songs\\队长 - 哪里都是你.mp3' },
    { url: 'src\\assets\\songs\\蔡健雅 - Letting Go.mp3' },
    { url: 'src\\assets\\songs\\林俊杰 - 她说.mp3' },
    { url: 'src\\assets\\songs\\是二智呀 - 赤伶.mp3' },
    { url: 'src\\assets\\songs\\薛之谦 - 其实.mp3' },
    { url: 'src\\assets\\songs\\Adam Christopher - So Far Away (Acoustic).mp3' },
    { url: 'src\\assets\\songs\\颜人中 - 嗜好.mp3' },
    { url: 'src\\assets\\songs\\Martin Garrix,David Guetta,Jamie Scott,Romy Dya - So Far Away.mp3' },
    { url: 'src\\assets\\songs\\AGA - 孤雏.mp3' },
    { url: "src\\assets\\songs\\花粥,马雨阳 - 盗将行.mp3" },
    { url: "src\\assets\\songs\\解忧草,冰幽 - 辞.九门回忆.mp3" },
    { url: "src\\assets\\songs\\添儿呗 - 烟火人间.mp3" },
    { url: "src\\assets\\songs\\李常超 (Lao乾妈) - 盗墓笔记·十年人间.mp3" },
    { url: "src\\assets\\songs\\龍猛寺寬度 - 武家坡2021.mp3" },
    { url: "src\\assets\\songs\\七叔-叶泽浩 - 踏山河.mp3" },
    { url: "src\\assets\\songs\\双笙（陈元汐） - 我的一个道姑朋友.mp3" },
    { url: "src\\assets\\songs\\司南 - 冬眠.mp3" },
    { url: "src\\assets\\songs\\薛之谦 - 那是你离开了北京的生活.mp3" },
    { url: "src\\assets\\songs\\徐秉龙 - 千禧.mp3" },
    { url: "src\\assets\\songs\\徐秉龙,沈以诚 - 白羊.mp3" },
    { url: "src\\assets\\songs\\葛东琪 - 悬溺.mp3" },
    { url: 'src\\assets\\songs\\江语晨 - 最后一页.mp3' },
];
const currentSongIndex = ref(0);
const volume = ref(0.3);
const isMuted = ref(false);
const isPlaying = ref(true);

songs.forEach(song => {
    song.url = song.url.replace(/\\/g, '/');
    const urlParts = song.url.split('/'); // 使用正斜杠 / 拆分URL
    const fileName = urlParts[urlParts.length - 1]; // 获取URL中的文件名
    const [author, name] = fileName.split(' - '); // 根据" - "拆分作者和歌曲名称
    song.author = author; // 将作者名称存入对象
    song.name = name.replace('.mp3', ''); // 将歌曲名称存入对象，并移除文件扩展名
});





const bgMusic = new Audio(songs[currentSongIndex.value].url);


// 在数据中存储音乐名称
const musicName = ref(songs[currentSongIndex.value].name);
const author = ref(songs[currentSongIndex.value].author);

const nextmusic = ref(songs[currentSongIndex.value + 1].name);
const nextauthor = ref(songs[currentSongIndex.value + 1].author);

//获取歌词
const getSongsText = () => {
    // 获取包含歌词的文本文件
    fetch(`/src/assets/songs/songsText/${musicName.value}.txt`)
        .then(response => response.text())
        .then(data => {
            // 将歌词文本分割成行
            const lyricsArray = data.split('\n');

            // 找到用于显示歌词的HTML元素
            const lyricsContainer = document.querySelector('.lyrics');

            // 将歌词插入HTML元素中
            lyricsArray.forEach(lyric => {
                const paragraph = document.createElement('p');
                paragraph.textContent = lyric;
                lyricsContainer.appendChild(paragraph);
            });
        })
        .catch(error => {
            console.error('加载歌词失败：', error);
        });

}
let scrollInterval = null;

function autoScrollLyrics() {
    const lyricsContainer = document.querySelector('.lyrics');
    if (!lyricsContainer) {
        return;
    }

    if (isPlaying.value) {
        // 播放时滚动
        scrollInterval = setInterval(() => {
            lyricsContainer.scrollTop += 1; // 每次滚动1像素
        }, 250); // 100毫秒滚动一次，可以根据需要调整速度
    } else {
        // 暂停时停止滚动
        clearInterval(scrollInterval);
    }
}
watch(isPlaying, () => {
    clearInterval(scrollInterval); // 每次播放状态变化时都清除定时器
    autoScrollLyrics();
});
function clearLyricsContainer() {
    const lyricsContainer = document.querySelector('.lyrics');
    lyricsContainer.innerHTML = ''; // 清空 div 内容
}

// 在切换歌曲时更新音乐名称和歌词
const updateMusicName = () => {
    musicName.value = songs[currentSongIndex.value].name;
    author.value = songs[currentSongIndex.value].author;
    nextmusic.value = songs[currentSongIndex.value + 1] ? songs[currentSongIndex.value + 1].name : '';
    nextauthor.value = songs[currentSongIndex.value + 1] ? songs[currentSongIndex.value + 1].author : '';
    clearLyricsContainer();
    getSongsText()
};

const progress = ref(0);
const updateProgress = () => {
    requestAnimationFrame(() => {
        const audioElement = bgMusic;
        if (!audioElement.ended) {
            progress.value = audioElement.currentTime / audioElement.duration;
        }
    });
};

// 监听音乐播放时间更新事件
onMounted(() => {
    bgMusic.addEventListener('timeupdate', updateProgress);
});

// 拖动进度条时跳转到指定位置
const seekToPosition = () => {
    const audioElement = bgMusic;
    const newTime = progress.value * audioElement.duration;

    if (!isNaN(newTime) && isFinite(newTime) && newTime >= 0 && newTime <= audioElement.duration) {
        audioElement.currentTime = newTime;
    }
};
//是否显示音乐控件
const hideTemp = ref(true)
const previousSong = () => {
    currentSongIndex.value = (currentSongIndex.value - 1 + songs.length) % songs.length;
    bgMusic.src = songs[currentSongIndex.value].url;
    bgMusic.currentTime = 0;
    bgMusic.play();
    isPlaying.value = true;
    showToast({
        message: '上一首',
        position: "bottom"
    })
    // 更新音乐名称
    updateMusicName();
}
bgMusic.addEventListener('ended', () => {
    //单曲循环不会进入ended事件

    // 其他模式：切换到下一首歌曲
    nextSong();



    // 更新音乐名称
    updateMusicName();

    // 手动设置进度条的值为 1    
    progress.value = 1;
});

const nextSong = async () => {
    // 暂停当前歌曲
    bgMusic.pause();

    // 重置进度条为0
    progress.value = 0;

    // 设置一个延迟，例如2秒后切换到下一首歌曲
    setTimeout(async () => {
        try {
            // 切换到下一首歌曲
            currentSongIndex.value = (currentSongIndex.value + 1) % songs.length;
            const newSongUrl = songs[currentSongIndex.value].url;

            // 加载新歌曲
            bgMusic.src = newSongUrl;
            await new Promise((resolve) => {
                bgMusic.addEventListener('canplay', resolve, { once: true });
            });

            // 播放新歌曲
            bgMusic.play();
            isPlaying.value = true;

            // 更新音乐名称
            updateMusicName();

            showToast({
                message: '下一首',
                position: "bottom"
            });
        } catch (error) {
            console.error("切换歌曲时发生错误", error);
        }
    }, 100);
};



const toggleFullscreen = () => {
    const element = document.documentElement;
    if (!document.fullscreenElement) {
        if (element.requestFullscreen) {
            element.requestFullscreen();
        } else if (element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
        } else if (element.webkitRequestFullscreen) {
            element.webkitRequestFullscreen();
        } else if (element.msRequestFullscreen) {
            element.msRequestFullscreen();
        }
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }
    }
};


// 启用音乐循环播放
const isLoop = () => {
    bgMusic.loop = !bgMusic.loop; // 切换音乐的循环模式

    if (bgMusic.loop) {
        console.log("开启单曲循环了" + bgMusic.loop);
        showToast({
            message: '单曲循环',
            position: 'bottom'
        });
    } else {
        console.log("关闭单曲循环了" + bgMusic.loop);
        showToast({
            message: '列表循环',
            position: 'bottom'
        });
    }
};


const toggleMusic = () => {
    isPlaying.value = !isPlaying.value;
    if (isPlaying.value) {
        bgMusic.play();
        autoScrollLyrics()
        showToast({
            message: '播放',
            position: "bottom"
        })
    } else {
        bgMusic.pause();
        showToast({
            message: '暂停',
            position: "bottom"
        })
    }
};

const restartMusic = () => {
    bgMusic.currentTime = 0;
    isPlaying.value = true;
    bgMusic.play();
    // 清除滚动定时器并重新开始滚动
    clearInterval(scrollInterval);
    // 重置歌词滚动位置
    const lyricsContainer = document.querySelector('.lyrics');
    if (lyricsContainer) {
        lyricsContainer.scrollTop = 0;
    }
    autoScrollLyrics();
};

const setVolume = () => {
    bgMusic.volume = volume.value;
    volumeTemp.value = volume.value
    showToast({
        message: '音量:' + volumePercentage.value,
        position: "bottom"
    })
};
const volumeTemp = ref()
const toggleMute = () => {
    isMuted.value = !isMuted.value;
    if (isMuted.value) {
        bgMusic.volume = 0;
        volumeTemp.value = volume.value
        volume.value = 0
        showToast({
            message: '静音',
            position: "bottom"
        })
    } else {
        volume.value = volumeTemp.value
        bgMusic.volume = volume.value;

        showToast({
            message: '解除静音',
            position: "bottom"
        })
    }
};

function init() {
    getSongsText()
    autoScrollLyrics()
    bgMusic.volume = volume.value;
    bgMusic.play();
}

onMounted(() => {
    init();
});

const currentTime = ref('00:00');

const updateCurrentTime = () => {
    requestAnimationFrame(() => {
        const audioElement = bgMusic;
        const currentTimeInSeconds = audioElement.currentTime;
        const minutes = Math.floor(currentTimeInSeconds / 60);
        const seconds = Math.floor(currentTimeInSeconds % 60);
        currentTime.value = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    });
};

// 监听音乐播放时间更新事件
onMounted(() => {
    bgMusic.addEventListener('timeupdate', updateCurrentTime);
});

// 在组件初始化时添加 timeupdate 事件监听器
bgMusic.addEventListener('timeupdate', () => {
    const currentTime = bgMusic.currentTime;
    const totalDuration = bgMusic.duration;

    // 设置一个阈值，用于判断音乐是否接近结束
    const threshold = 0.2; // 以秒为单位，根据需要调整


    if (totalDuration - currentTime <= threshold) {
        if (bgMusic.loop) {
            restartMusic()
        }


        // 在这里执行您的逻辑
    }
});



const handleKeyPress = (event) => {
    if (event.key === 'm') {
        toggleMute(); // 按下 "m" 键时静音或取消静音
    } else if (event.key === 'ArrowLeft') {
        previousSong(); // 按下左箭头键时播放上一首歌曲
    } else if (event.key === 'ArrowRight') {
        nextSong(); // 按下右箭头键时播放下一首歌曲
    } else if (event.key === 'p' || event.key === ' ') {
        toggleMusic()
    } else if (event.key === 'r') {
        restartMusic()
    } else if (event.key === 'Enter') {
        toggleFullscreen()
    } else if (event.key === 'l') {
        isLoop() //单曲循环开关
    } else if (event.key === 'h')
        hideTemp.value = !hideTemp.value
};
onMounted(() => {
    window.addEventListener('keydown', handleKeyPress);
});





// 在 volume 变化时重新计算 volumePercentage
watch(volume, () => {
    // 计算音量百分比，并四舍五入
    volumePercentage.value = Math.round(volume.value * 100) + '%';
});

const volumePercentage = ref(Math.round(volume.value * 100) + '%');

// 移除监听器以防止内存泄漏
watchEffect(() => {
    return () => {
        window.removeEventListener('keydown', handleKeyPress);
    };
});

const maxMusicNameLength = 15; // 设置最大歌曲名称长度
const maxAuthorLength = 15; // 设置最大歌手名称长度

// 根据最大长度截取音乐名称
const truncatedMusicName = computed(() => {
    const fullMusicName = musicName.value;
    if (fullMusicName.length > maxMusicNameLength) {
        return `${fullMusicName.slice(0, maxMusicNameLength)}...`; // 超出部分用省略号表示
    } else {
        return fullMusicName;
    }
});
// 根据最大长度截取歌手名称
const truncatedAuthor = computed(() => {
    const fullAuthorName = author.value;
    if (fullAuthorName.length > maxAuthorLength) {
        return `${fullAuthorName.slice(0, maxAuthorLength)}...`; // 超出部分用省略号表示
    } else {
        return fullAuthorName;
    }
});

const nextMusicName = computed(() => {
    const nextsongname = nextmusic.value
    if (nextsongname.length > maxMusicNameLength) {
        return `${nextsongname.slice(0, maxMusicNameLength)}...`; // 超出部分用省略号表示
    } else {
        return nextsongname;
    }
});
const nextMusicAuthor = computed(() => {
    const nextauthorname = nextauthor.value;
    if (nextauthorname.length > maxAuthorLength) {
        return `${nextauthorname.slice(0, maxAuthorLength)}...`; // 超出部分用省略号表示
    } else {
        return nextauthorname;
    }
});
// 在数据中存储歌曲总时长
const totalDuration = ref(0);

// 在音频可以播放时获取歌曲总时长
bgMusic.addEventListener('canplay', () => {
    totalDuration.value = bgMusic.duration;
});

// 计算歌曲总时长的分钟和秒数
const totalDurationMinutes = computed(() => {
    const minutes = Math.floor(totalDuration.value / 60);
    return minutes < 10 ? `0${minutes}` : `${minutes}`;
});

const totalDurationSeconds = computed(() => {
    const seconds = Math.floor(totalDuration.value % 60);
    return seconds < 10 ? `0${seconds}` : `${seconds}`;
});
const cursorHidden = ref(false);
let cursorTimer;

const resetCursor = () => {
    if (cursorHidden.value) {
        cursorHidden.value = false;
        hideTemp.value = true  //控件显示
        clearTimeout(cursorTimer);
        document.body.style.cursor = 'auto'; // 重新设置光标为默认
    }
    cursorTimer = setTimeout(() => {
        cursorHidden.value = true; //光标隐藏
        hideTemp.value = false  //控件隐藏
        document.body.style.cursor = 'none'; // 设置光标隐藏
    }, 5000); // 设置光标消失的延迟时间，这里是2秒
};

// 在组件卸载时清除定时器
onUnmounted(() => {
    clearTimeout(cursorTimer);
});


</script>


<style lang="scss" scoped>
.music-name,
.author {
    margin-left: 40px;
    font-family: 'lato', sans-serif;
    font-weight: 300;
    font-size: 50px;
    letter-spacing: 10px;
    background: linear-gradient(white, #38495a);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    white-space: nowrap;
    /* 防止文本换行 */
    overflow: hidden;
    /* 隐藏超出部分 */
    text-overflow: ellipsis;
    /* 使用省略号表示超出部分 */
    /* ...其他样式... */
}

.player-container {
    height: 90px;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.7);
    opacity: 0;
    /* 设置播放器背景颜色，根据需要调整透明度 */
    padding: 10px;
    transition: 1s ease; // 渐变过渡效果

    /* 设置内边距，根据需要调整 */
    &:hover {
        opacity: 0.8; // 鼠标移入时的透明度

    }

    &:not(:hover) {
        opacity: 0; // 鼠标移开时的透明度

    }
}




.background {
    height: 100vh;
    background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);
    overflow: hidden;
}


.title {
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    color: #fff;
    text-align: center;
    font-family: 'lato', sans-serif;
    font-weight: 300;
    font-size: 50px;
    letter-spacing: 10px;
    margin-top: -60px;
    padding-left: 10px;
    background: linear-gradient(white, #38495a);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
}

.lyrics {
    max-height: 250px;
    overflow: auto;
    scrollbar-width: none;
    /* 隐藏滚动条（仅适用于部分浏览器） */
    -ms-overflow-style: none;
    /* 隐藏滚动条（仅适用于IE和Edge） */
    opacity: 0.6;
    transition: 0.5s ease;
    color: #fff;
    letter-spacing: 4px;
    font-family: 'lato', sans-serif;
    font-weight: 300;

    &:hover {
        opacity: 1;
    }
}

.lyrics::-webkit-scrollbar {
    width: 0;

    /* 隐藏滚动条（仅适用于WebKit基的浏览器，如Chrome和Safari） */
}



@function createshadow($n) {
    $shadow: '#{random(100)}vw #{random(100)}vh #fff';

    @for $i from 2 to $n {
        $shadow :'#{$shadow},#{random(100)}vw #{random(100)}vh #fff';
    }

    @return unquote($shadow);
}

$count: 1000;
$duration: 400s;

@for $i from 1 through 4 {
    $count: floor(calc($count/2));
    $duration: floor(calc($duration/2));

    .layer#{$i} {
        $size: #{$i}px;
        position: fixed;
        width: $size;
        height: $size;
        border-radius: 50%;
        left: 0;
        right: 0;
        box-shadow: createshadow($count);
        animation: moveUp $duration linear infinite;

        &::after {
            content: '';
            position: fixed;
            left: 100vw;
            top: 0;
            width: inherit;
            height: inherit;
            border-radius: inherit;
            box-shadow: inherit;
        }
    }
}



@keyframes moveUp {
    100% {
        transform: translateX(-100vw);
    }
}
</style>