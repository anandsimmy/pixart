const initalState={
    images: [],
    keyword: 'dogs',
    pageNum: 1,
    downloadImageInfo: {},
}

const reducer= (state= initalState, action) => {
    switch(action.type){
        case 'SET_NEW_IMAGES':
            
            return {
                ...state,
                images: action.payload
            }
        case 'LOAD_MORE_IMAGES':
            return {
                ...state,
                images: [...state.images, ...action.payload]
            }
        case 'LOAD_MORE':
            return {
                ...state,
                pageNum: state.pageNum+1
            }
        case 'SET_KEYWORD':
            return {
                ...state,
                keyword: action.payload,
                pageNum: 1
            }
        case 'SET_DOWNLOADIMAGE_INFO':
            return {
                ...state,
                downloadImageInfo: action.payload
            }
        default:
            return  {
                ...state
            }
    }
}

export default reducer

