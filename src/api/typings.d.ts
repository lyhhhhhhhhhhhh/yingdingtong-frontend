declare namespace API {
  type BaseResponseBoolean_ = {
    code?: number;
    data?: boolean;
    message?: string;
  };

  type BaseResponseCinemamoviescheduleVO_ = {
    code?: number;
    data?: CinemamoviescheduleVO;
    message?: string;
  };

  type BaseResponseCinemaMovieVO_ = {
    code?: number;
    data?: CinemaMovieVO;
    message?: string;
  };

  type BaseResponseCinemaVO_ = {
    code?: number;
    data?: CinemaVO;
    message?: string;
  };

  type BaseResponseLoginUserVO_ = {
    code?: number;
    data?: LoginUserVO;
    message?: string;
  };

  type BaseResponseLong_ = {
    code?: number;
    data?: number;
    message?: string;
  };

  type BaseResponseMovieorderVO_ = {
    code?: number;
    data?: MovieorderVO;
    message?: string;
  };

  type BaseResponseMovieVO_ = {
    code?: number;
    data?: MovieVO;
    message?: string;
  };

  type BaseResponsePageCinema_ = {
    code?: number;
    data?: PageCinema_;
    message?: string;
  };

  type BaseResponsePageCinemaMovie_ = {
    code?: number;
    data?: PageCinemaMovie_;
    message?: string;
  };

  type BaseResponsePageCinemamovieschedule_ = {
    code?: number;
    data?: PageCinemamovieschedule_;
    message?: string;
  };

  type BaseResponsePageCinemamoviescheduleVO_ = {
    code?: number;
    data?: PageCinemamoviescheduleVO_;
    message?: string;
  };

  type BaseResponsePageCinemaMovieVO_ = {
    code?: number;
    data?: PageCinemaMovieVO_;
    message?: string;
  };

  type BaseResponsePageCinemaVO_ = {
    code?: number;
    data?: PageCinemaVO_;
    message?: string;
  };

  type BaseResponsePageMovie_ = {
    code?: number;
    data?: PageMovie_;
    message?: string;
  };

  type BaseResponsePageMovieorder_ = {
    code?: number;
    data?: PageMovieorder_;
    message?: string;
  };

  type BaseResponsePageMovieorderVO_ = {
    code?: number;
    data?: PageMovieorderVO_;
    message?: string;
  };

  type BaseResponsePageMovieVO_ = {
    code?: number;
    data?: PageMovieVO_;
    message?: string;
  };

  type BaseResponsePageUser_ = {
    code?: number;
    data?: PageUser_;
    message?: string;
  };

  type BaseResponsePageUserVO_ = {
    code?: number;
    data?: PageUserVO_;
    message?: string;
  };

  type BaseResponseString_ = {
    code?: number;
    data?: string;
    message?: string;
  };

  type BaseResponseUser_ = {
    code?: number;
    data?: User;
    message?: string;
  };

  type BaseResponseUserVO_ = {
    code?: number;
    data?: UserVO;
    message?: string;
  };

  type checkUsingGETParams = {
    /** echostr */
    echostr?: string;
    /** nonce */
    nonce?: string;
    /** signature */
    signature?: string;
    /** timestamp */
    timestamp?: string;
  };

  type Cinema = {
    cinemaAddress?: string;
    cinemaTags?: string;
    cinemaTitle?: string;
    createTime?: string;
    editTime?: string;
    id?: number;
    isDelete?: number;
    startingPrice?: string;
    updateTime?: string;
    userId?: number;
  };

  type CinemaAddRequest = {
    cinemaAddress?: string;
    cinemaTags?: string;
    cinemaTitle?: string;
    startingPrice?: string;
    userId?: number;
  };

  type CinemaEditRequest = {
    cinemaAddress?: string;
    cinemaTags?: string;
    cinemaTitle?: string;
    id?: number;
    startingPrice?: string;
    userId?: number;
  };

  type CinemaMovie = {
    cinemaId?: number;
    createTime?: string;
    id?: number;
    movieId?: number;
    updateTime?: string;
    userId?: number;
  };

  type CinemaMovieAddRequest = {
    cinemaId?: number;
    movieId?: number;
    userId?: number;
  };

  type CinemaMovieEditRequest = {
    cinemaId?: number;
    id?: number;
    movieId?: number;
    userId?: number;
  };

  type CinemaMovieQueryRequest = {
    cinemaId?: number;
    current?: number;
    id?: number;
    movieId?: number;
    notId?: number;
    pageSize?: number;
    searchText?: string;
    sortField?: string;
    sortOrder?: string;
    userId?: number;
  };

  type Cinemamovieschedule = {
    cinemaHallName?: string;
    cinemaId?: number;
    createTime?: string;
    editTime?: string;
    id?: number;
    isDeleted?: number;
    movieId?: number;
    movieLanguage?: string;
    moviePrice?: number;
    seatInfo?: Record<string, any>;
    showTime?: string;
    updateTime?: string;
    userId?: number;
  };

  type CinemamoviescheduleAddRequest = {
    cinemaHallName?: string;
    cinemaId?: number;
    movieId?: number;
    movieLanguage?: string;
    moviePrice?: number;
    showTime?: string;
    userId?: number;
  };

  type CinemamoviescheduleEditRequest = {
    cinemaHallName?: string;
    cinemaId?: number;
    id?: number;
    movieId?: number;
    movieLanguage?: string;
    moviePrice?: number;
    showTime?: string;
    userId?: number;
  };

  type CinemamoviescheduleQueryRequest = {
    cinemaHallName?: string;
    cinemaId?: number;
    current?: number;
    id?: number;
    movieId?: number;
    movieLanguage?: string;
    moviePrice?: number;
    notId?: number;
    pageSize?: number;
    searchText?: string;
    showTime?: string;
    sortField?: string;
    sortOrder?: string;
    userId?: number;
  };

  type CinemamoviescheduleUpdateRequest = {
    cinemaHallName?: string;
    cinemaId?: number;
    id?: number;
    movieId?: number;
    movieLanguage?: string;
    moviePrice?: number;
    showTime?: string;
    userId?: number;
  };

  type CinemamoviescheduleVO = {
    cinemaHallName?: string;
    cinemaId?: number;
    createTime?: string;
    id?: number;
    movieId?: number;
    movieLanguage?: string;
    moviePrice?: number;
    seatInfo?: Record<string, any>;
    showTime?: string;
    updateTime?: string;
    user?: UserVO;
    userId?: number;
  };

  type CinemaMovieUpdateRequest = {
    cinemaId?: number;
    id?: number;
    movieId?: number;
    userId?: number;
  };

  type CinemaMovieVO = {
    cinema?: CinemaVO;
    cinemaId?: number;
    createTime?: string;
    id?: number;
    movieId?: number;
    movieVOList?: MovieVO[];
    updateTime?: string;
    user?: UserVO;
    userId?: number;
  };

  type CinemaQueryRequest = {
    cinemaAddress?: string;
    cinemaTags?: string;
    cinemaTitle?: string;
    current?: number;
    id?: number;
    notId?: number;
    pageSize?: number;
    searchText?: string;
    sortField?: string;
    sortOrder?: string;
    startingPrice?: string;
    userId?: number;
  };

  type CinemaUpdateRequest = {
    cinemaAddress?: string;
    cinemaTags?: string;
    cinemaTitle?: string;
    id?: number;
    startingPrice?: string;
    userId?: number;
  };

  type CinemaVO = {
    cinemaAddress?: string;
    cinemaTags?: string;
    cinemaTitle?: string;
    createTime?: string;
    id?: number;
    startingPrice?: string;
    updateTime?: string;
    user?: UserVO;
    userId?: number;
  };

  type DeleteRequest = {
    id?: number;
  };

  type getCinemamoviescheduleVOByIdUsingGETParams = {
    /** id */
    id?: number;
  };

  type getCinemaMovieVOByIdUsingGETParams = {
    /** id */
    id?: number;
  };

  type getCinemaVOByIdUsingGETParams = {
    /** id */
    id?: number;
  };

  type getMovieorderVOByIdUsingGETParams = {
    /** id */
    id?: number;
  };

  type getMovieVOByIdUsingGETParams = {
    /** id */
    id?: number;
  };

  type getUserByIdUsingGETParams = {
    /** id */
    id?: number;
  };

  type getUserVOByIdUsingGETParams = {
    /** id */
    id?: number;
  };

  type LoginUserVO = {
    createTime?: string;
    id?: number;
    updateTime?: string;
    userAvatar?: string;
    userName?: string;
    userProfile?: string;
    userRole?: string;
  };

  type Movie = {
    createTime?: string;
    editTime?: string;
    id?: number;
    isDelete?: number;
    movieDuration?: number;
    moviePicture?: string;
    movieRating?: number;
    movieRegion?: string;
    movieSynopsis?: string;
    movieTitle?: string;
    movieType?: string;
    updateTime?: string;
    userId?: number;
  };

  type MovieAddRequest = {
    movieDuration?: number;
    moviePicture?: string;
    movieRating?: number;
    movieRegion?: string;
    movieSynopsis?: string;
    movieTitle?: string;
    movieType?: string;
    userId?: number;
  };

  type MovieEditRequest = {
    id?: number;
    movieDuration?: number;
    moviePicture?: string;
    movieRating?: number;
    movieRegion?: string;
    movieSynopsis?: string;
    movieTitle?: string;
    movieType?: string;
    userId?: number;
  };

  type Movieorder = {
    cinemaHallName?: string;
    cinemaId?: number;
    cinemaName?: string;
    createTime?: string;
    id?: number;
    isDeleted?: number;
    isPayFor?: number;
    movieId?: number;
    movieName?: string;
    movieSessionId?: number;
    movieShowTime?: string;
    seatInfo?: Record<string, any>;
    totalPrice?: number;
    updateTime?: string;
    userId?: number;
  };

  type MovieorderAddRequest = {
    cinemaHallName?: string;
    cinemaId?: number;
    cinemaName?: string;
    id?: number;
    isPayFor?: number;
    movieId?: number;
    movieName?: string;
    movieSessionId?: number;
    movieShowTime?: string;
    seatInfo?: Record<string, any>;
    totalPrice?: number;
    userId?: number;
  };

  type MovieorderEditRequest = {
    cinemaHallName?: string;
    cinemaId?: number;
    cinemaName?: string;
    id?: number;
    isPayFor?: number;
    movieId?: number;
    movieName?: string;
    movieSessionId?: number;
    movieShowTime?: string;
    seatInfo?: Record<string, any>;
    totalPrice?: number;
    userId?: number;
  };

  type MovieorderQueryRequest = {
    cinemaHallName?: string;
    cinemaId?: number;
    cinemaName?: string;
    current?: number;
    id?: number;
    isPayFor?: number;
    movieId?: number;
    movieName?: string;
    movieSessionId?: number;
    movieShowTime?: string;
    notId?: number;
    pageSize?: number;
    searchText?: string;
    seatInfo?: Record<string, any>;
    sortField?: string;
    sortOrder?: string;
    totalPrice?: number;
    userId?: number;
  };

  type MovieorderUpdateRequest = {
    cinemaHallName?: string;
    cinemaId?: number;
    cinemaName?: string;
    id?: number;
    isPayFor?: number;
    movieId?: number;
    movieName?: string;
    movieSessionId?: number;
    movieShowTime?: string;
    seatInfo?: Record<string, any>;
    totalPrice?: number;
    userId?: number;
  };

  type MovieorderVO = {
    cinemaHallName?: string;
    cinemaId?: number;
    cinemaName?: string;
    createTime?: string;
    id?: number;
    isPayFor?: number;
    movieId?: number;
    movieName?: string;
    movieSessionId?: number;
    movieShowTime?: string;
    movieVO?: MovieVO;
    seatInfo?: Record<string, any>;
    totalPrice?: number;
    updateTime?: string;
    user?: UserVO;
    userId?: number;
  };

  type MovieQueryRequest = {
    current?: number;
    id?: number;
    movieDuration?: number;
    moviePicture?: string;
    movieRating?: number;
    movieRegion?: string;
    movieSynopsis?: string;
    movieTitle?: string;
    movieType?: string;
    movieYear?: string;
    notId?: number;
    pageSize?: number;
    searchText?: string;
    sortField?: string;
    sortOrder?: string;
    userId?: number;
  };

  type MovieUpdateRequest = {
    id?: number;
    movieDuration?: number;
    moviePicture?: string;
    movieRating?: number;
    movieRegion?: string;
    movieSynopsis?: string;
    movieTitle?: string;
    movieType?: string;
    userId?: number;
  };

  type MovieVO = {
    createTime?: string;
    id?: number;
    movieDuration?: number;
    moviePicture?: string;
    movieRating?: number;
    movieRegion?: string;
    movieSynopsis?: string;
    movieTitle?: string;
    movieType?: string;
    updateTime?: string;
    user?: UserVO;
    userId?: number;
  };

  type OrderItem = {
    asc?: boolean;
    column?: string;
  };

  type PageCinema_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: Cinema[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageCinemaMovie_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: CinemaMovie[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageCinemamovieschedule_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: Cinemamovieschedule[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageCinemamoviescheduleVO_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: CinemamoviescheduleVO[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageCinemaMovieVO_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: CinemaMovieVO[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageCinemaVO_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: CinemaVO[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageMovie_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: Movie[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageMovieorder_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: Movieorder[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageMovieorderVO_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: MovieorderVO[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageMovieVO_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: MovieVO[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageUser_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: User[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageUserVO_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: UserVO[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type uploadFileUsingPOSTParams = {
    biz?: string;
  };

  type User = {
    createTime?: string;
    editTime?: string;
    id?: number;
    isDelete?: number;
    mpOpenId?: string;
    unionId?: string;
    updateTime?: string;
    userAccount?: string;
    userAvatar?: string;
    userName?: string;
    userPassword?: string;
    userProfile?: string;
    userRole?: string;
  };

  type UserAddRequest = {
    userAccount?: string;
    userAvatar?: string;
    userName?: string;
    userRole?: string;
  };

  type userLoginByWxOpenUsingGETParams = {
    /** code */
    code: string;
  };

  type UserLoginRequest = {
    userAccount?: string;
    userPassword?: string;
  };

  type UserQueryRequest = {
    current?: number;
    id?: number;
    mpOpenId?: string;
    pageSize?: number;
    sortField?: string;
    sortOrder?: string;
    unionId?: string;
    userName?: string;
    userProfile?: string;
    userRole?: string;
  };

  type UserRegisterRequest = {
    checkPassword?: string;
    userAccount?: string;
    userPassword?: string;
  };

  type UserUpdateMyRequest = {
    userAvatar?: string;
    userName?: string;
    userProfile?: string;
  };

  type UserUpdateRequest = {
    id?: number;
    userAvatar?: string;
    userName?: string;
    userProfile?: string;
    userRole?: string;
  };

  type UserVO = {
    createTime?: string;
    id?: number;
    userAvatar?: string;
    userName?: string;
    userProfile?: string;
    userRole?: string;
  };
}
