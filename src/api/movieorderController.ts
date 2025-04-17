// @ts-ignore
/* eslint-disable */
import request from "@/lib/request";

/** addMovieorder POST /api/movieorder/add */
export async function addMovieorderUsingPost(
  body: API.MovieorderAddRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseLong_>("/api/movieorder/add", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: body,
    ...(options || {}),
  });
}

/** deleteMovieorder POST /api/movieorder/delete */
export async function deleteMovieorderUsingPost(
  body: API.DeleteRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseBoolean_>("/api/movieorder/delete", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: body,
    ...(options || {}),
  });
}

/** editMovieorder POST /api/movieorder/edit */
export async function editMovieorderUsingPost(
  body: API.MovieorderEditRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseBoolean_>("/api/movieorder/edit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: body,
    ...(options || {}),
  });
}

/** getMovieorderVOById GET /api/movieorder/get/vo */
export async function getMovieorderVoByIdUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getMovieorderVOByIdUsingGETParams,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseMovieorderVO_>("/api/movieorder/get/vo", {
    method: "GET",
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** listMovieorderByPage POST /api/movieorder/list/page */
export async function listMovieorderByPageUsingPost(
  body: API.MovieorderQueryRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponsePageMovieorder_>("/api/movieorder/list/page", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: body,
    ...(options || {}),
  });
}

/** listMovieorderVOByPage POST /api/movieorder/list/page/vo */
export async function listMovieorderVoByPageUsingPost(
  body: API.MovieorderQueryRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponsePageMovieorderVO_>(
    "/api/movieorder/list/page/vo",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      data: body,
      ...(options || {}),
    }
  );
}

/** listMyMovieorderVOByPage POST /api/movieorder/my/list/page/vo */
export async function listMyMovieorderVoByPageUsingPost(
  body: API.MovieorderQueryRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponsePageMovieorderVO_>(
    "/api/movieorder/my/list/page/vo",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      data: body,
      ...(options || {}),
    }
  );
}

/** updateMovieorder POST /api/movieorder/update */
export async function updateMovieorderUsingPost(
  body: API.MovieorderUpdateRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseBoolean_>("/api/movieorder/update", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: body,
    ...(options || {}),
  });
}
