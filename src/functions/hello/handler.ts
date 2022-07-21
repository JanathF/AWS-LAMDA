import { formatJSONResponse } from '@libs/api-gateway';


const hello = async (event) => {
  return formatJSONResponse({
    message: `Hello welcome to the exciting Serverless world!`,
  });
};

export const main = hello;
