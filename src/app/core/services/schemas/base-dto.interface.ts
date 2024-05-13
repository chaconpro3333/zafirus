export interface IntBaseResponse<T> {
  data: IntBaseResponseApi<T>;
  headers: {};
  status: number;
  url: string;
}

export interface IntBaseResponseApi<T> {
  attributionHTML: string;
  attributionText: string;
  code: number;
  copyright: string;
  data: {
    count: number;
    limit: number;
    offset: number;
    results: T[];
    total: number;
  };
  etag: string;
  status: string;
}
