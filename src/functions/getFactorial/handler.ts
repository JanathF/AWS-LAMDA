import { badJSONResponse, formatJSONResponse } from '@libs/api-gateway';


const getFactorial = async (event) => {

  let factorialVal;
  let responseBody;
  const input = event.pathParameters.facNumber;

if (input>=1 && input<=100)
{
  const factorialCal =  n => n <= 1 ? 1 : n * factorialCal(n - 1);
  factorialVal = factorialCal(input);
  responseBody = {"input": input, "factorial":factorialVal}

  return formatJSONResponse(responseBody);

}else{

  return badJSONResponse({
    "input": input, 
    "factorial": "Error",
    message: "Input a value within the range of 1 to 100", 
  });
}

};

export const main = getFactorial;
