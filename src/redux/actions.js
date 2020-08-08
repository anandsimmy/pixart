export const setNewImages=(images) => ({
    type: 'SET_NEW_IMAGES',
    payload: images
})

export const loadMoreImages=(images) => ({
    type: 'LOAD_MORE_IMAGES',
    payload: images
})

export const setDownloadImageInfo=(info) => ({
    type: 'SET_DOWNLOADIMAGE_INFO',
    payload: info
})

export const pageUp=(info) => ({
    type: 'PAGE_UP'
})

export const pageDown=(info) => ({
    type: 'PAGE_DOWN'
})

export const setKeyword=(keyword) => ({
    type: 'SET_KEYWORD',
    payload: keyword
})

export const loadMore=() => ({
    type: 'LOAD_MORE'
})
