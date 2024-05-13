import { CapacitorHttp } from '@capacitor/core';
import { IntBaseResponse, IntBaseResponseApi } from '../schemas/base-dto.interface';

export abstract class BaseApiRest {
  async get<T>(url: string, params: { [key: string]: string | string[]}): Promise<IntBaseResponseApi<T>> {
    const response = CapacitorHttp.get({url, params});
    const dataBaseResponse: IntBaseResponse<T> = await response;
    const dataRequest = dataBaseResponse.data;
    return dataRequest;
  }
}
