/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';

const GET = 'get';
const PATCH = 'patch';
const PUT = 'put';
const POST = 'post';
const DELETE = 'delete';

interface ApiInterface {
  url: string;
  method: string;
  body?: object | null | undefined;
  headers?: object;
}

interface ApiRequestInterface {
  url: string;
  method: string;
  payload?: object;
}

interface MethodInterface {
  url: string;
  payload?: string;
}

const url = 'https://private-e6e55-anggarpe.apiary-mock.com';

export const api = (props: ApiInterface) => {
  const config = {
    url: `${url}/${props.url}`,
    method: props.method,
    data: props.body,
    headers: props.headers,
  };

  return axios(config);
};

const apiRequest = async (props: ApiRequestInterface) => {
  let body = null;
  const headers = {
    'Content-Type': 'application/json',
  };

  if (props.method !== GET) {
    body = props.payload;
  }

  try {
    const response = await api({
      url: props.url,
      method: props.method,
      body,
      headers,
    });

    return response.data;
  } catch (error: any) {
    console.log('error ', error);

    throw error?.response;
  }
};

const get = (props: MethodInterface) => apiRequest({ method: GET, url: props.url });
const post = (props: MethodInterface) => apiRequest({ method: POST, url: props.url });
const put = (props: MethodInterface) => apiRequest({ method: PUT, url: props.url });
const patch = (props: MethodInterface) => apiRequest({ method: PATCH, url: props.url });
const deleteRequest = (props: MethodInterface) => apiRequest({ method: DELETE, url: props.url });

export default { get, post, put, deleteRequest, patch };
