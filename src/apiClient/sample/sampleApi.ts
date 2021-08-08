import HttpClient from '../httpClient';
import { ApiUrl } from '../apiUrl';
import { Result } from '../models';
import { Convert, Sample } from './models';

export const GetSample = async (): Promise<Result<Sample>> => {
  const PATH: string = encodeURI(ApiUrl.Sample.GetSample);

  const response = await HttpClient.get(PATH);

  const result: Result<Sample> = {
    result: '',
    responseData: undefined,
    response: response,
  };

  if (response.statusText === 'OK') {
    result.result = 'success';
    result.responseData = Convert.toSample(Convert.sampleToJson(response.data))
  } else {
    result.result = 'fail';
  }

  return result;
};

export default GetSample;