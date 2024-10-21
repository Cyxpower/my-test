import SparkMD5 from "./sparkmd5.js"
export function createChunk(file, index, chunkSize) {
    return new Promise((resolve) => {
        const start = index * chunkSize
        const end = start + chunkSize
        const fileReader = new FileReader()
        const spark = new SparkMD5.ArrayBuffer()
        fileReader.onload = (e) => {
            spark.append(e.target.result);
            resolve({
                start,
                end,
                index,
                hash: spark.end(),
            })
        };
        fileReader.readAsArrayBuffer(file.slice(start, end))
    })
}