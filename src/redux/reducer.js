const initalState={
    images: [],
    keyword: 'landscape',
    pageNum: 1,
    downloadImageInfo: {},
}

const reducer= (state= initalState, { type, payload }) => {
    switch(type){
        case 'SET_NEW_IMAGES':
            return {
                ...state,
                images: payload.images,
                keyword: payload.keyword,
                pageNum: 1
            }
        case 'LOAD_MORE_IMAGES':
            return {
                ...state,
                images: [...state.images, ...payload],
                pageNum: state.pageNum+1
            }
        case 'SET_DOWNLOADIMAGE_INFO':
            return {
                ...state,
                downloadImageInfo: payload
            }
        default:
            return  {
                ...state
            }
    }
}

export default reducer

