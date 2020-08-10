export const setNewImages=(images, keyword) => {
    console.log(images, keyword)
    return ({
    type: 'SET_NEW_IMAGES',
    payload: { images, keyword }
})}

export const loadMoreImages= (images) => ({
    type: 'LOAD_MORE_IMAGES',
    payload: images
})

export const setDownloadImageInfo=(info) => ({
    type: 'SET_DOWNLOADIMAGE_INFO',
    payload: info
})
