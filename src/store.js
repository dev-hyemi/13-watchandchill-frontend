import { createAction, configureStore, createReducer } from '@reduxjs/toolkit';

const ChangeCategory = createAction('CHANGE_CATEGORY')
const CurrentMovie = createAction('CURRENT_MOVIE')
const ChangeMovieInfo = createAction('CHANGE_MOVIE_INFO')
const RatingLength = createAction('RATING_LENGTH')
const ChangeCommentWrite = createAction('CHANGE_COMMENT_WRITE')
const CommentValueChange = createAction('COMMENT_VALUE_CHANGE')

const initialState = {
  category: {
    id:0,
    genre:"모든 장르"
  },
  isMovieInfo : false,
  isCommentWrite : false,
  commentValue : '',
  ratingLength: 0,
  currentMovie: {

  },
  categories: {
    event: [
      "랜덤 영화",
      "역대 100만 관객 돌파 영화",
      "왓챠 평균별점 TOP 영화",
      "전세계 흥행 TOP 영화",
      "국내 누적관객수 TOP 영화",
      "전문가 고평점 영화",
      "저예산 독립 영화",
      "스포츠 영화"
    ],
    genres: [
      {
        id:0,
        genre:"모든 장르",
      },
      {
        id:1,
        genre:"느와르",
      },
      {
        id:2,
        genre: "슈퍼히어로",
      },
      {
        id:3,
        genre: "범죄",
      },
      {
        id:4,
        genre: "드라마",
      },
      {
        id:5,
        genre: "코미디",
      },
      {
        id:6,
        genre: "로맨스",
      },
      {
        id:7,
        genre: "스릴러",
      },
      {
        id:8,
        genre: "로맨틱코미디",
      },
      {
        id:9,
        genre: "전쟁",
      },
      {
        id:10,
        genre: "가족",
      },
      {
        id:11,
        genre: "판타지",
      },
      {
        id:12,
        genre: "액션",
      },
      {
        id:13,
        genre: "SF",
      },
      {
        id:14,
        genre: "애니메이션",
      },
      {
        id:15,
        genre: "다큐멘터리",
      },
      {
        id:16,
        genre: "공포",
      },
      {
        id:17,
        genre: "클래식",
      }
    ]
  }
}

const reducer = createReducer(initialState, {
  [ChangeCategory] : (state, action) => {
    state.category = action.payload
  },
  [ChangeMovieInfo] : (state, action) => {
    state.isMovieInfo = action.payload
  },
  [ChangeCommentWrite] : (state, action) => {
    
    state.isCommentWrite = action.payload
  },
  [CurrentMovie] : (state, action) => {
    state.currentMovie = action.payload
  },
  [CommentValueChange] : (state, action) => {
    state.commentValue = action.payload
  },
  [RatingLength] : (state, action) => {
    state.ratingLength = action.payload
  }
})


export const actionCreators = {
  ChangeCategory,
  ChangeMovieInfo,
  ChangeCommentWrite,
  CurrentMovie,
  RatingLength,
  CommentValueChange
}

const store = configureStore({
  reducer: reducer,
  // middleware: [...middlewares],
  devTools: process.env.NODE_ENV !== 'production',
})

export default store;