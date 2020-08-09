export const setNewImages=(images) => ({
    type: 'SET_NEW_IMAGES',
    payload: images
})

export const setDownloadImageInfo=(info) => ({
    type: 'SET_DOWNLOADIMAGE_INFO',
    payload: info
})


export const setKeyword=(keyword) => ({
    type: 'SET_KEYWORD',
    payload: keyword
})

export const loadMore=() => ({
    type: 'LOAD_MORE'
})
