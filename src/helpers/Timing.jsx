export const Timing = (totalSeconds) => {
    const seconds = Math.floor(totalSeconds % 60);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);

    return `${seconds < 10 ? `0${seconds}` : seconds} : ${minutes < 10 ? `0${minutes}` : minutes} : ${hours < 10 ? `0${hours}` : hours}`.replace(/,\s*$/, '');
};
export const changeTime = (time , duration) =>{
    const percent = time / duration * 100;
    return(percent);
};
export const timeChange = (percent , duration)=>{
    return percent/100 * duration ;
};