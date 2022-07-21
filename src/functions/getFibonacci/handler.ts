import { badJSONResponse, formatJSONResponse } from '@libs/api-gateway';
import axios from 'axios';


const getFibonacci = async (event) => {
  
  let url = 'https://' + event['headers']['Host'] + '/' + event['requestContext']['stage'];

  let factorialVal, fibonacciVal;
  let  getfactorialData;
  let input = event.pathParameters.fibNumber;


  if (input>=1 && input<=150){
 
    //getfactorialData =await axios.get(`http://localhost:3000/dev/getFactorial/${input}`).catch(error=>getfactorialData=error.response.data);
    //getfactorialData =await axios.get(`http://localhost:3000/dev/getFactorial/${input}`)
    getfactorialData =await axios.get(`${url}/getFactorial/${input}`)
    .then(res=>getfactorialData=res.data).catch(err=>getfactorialData=err.response.data);
    factorialVal = getfactorialData.factorial;

    let a = 0;
    let b = 1;
    for (let i = 1; i < input; ++i) {
        const c = a + b;
        a = b;
        b = c;
    }
    fibonacciVal = b;
    return formatJSONResponse({
      "input": input, 
      "factorial": factorialVal,
      "fibonacci": fibonacciVal, 
    });

  }else{
    fibonacciVal = "Error"
    return badJSONResponse({
      "input": input, 
      "factorial": "Error",
      "fibonacci": fibonacciVal, 
      message: "Input a value within the range of 1 to 150", 
    });
  }
  
  //console.log(factorialVal);

};

export const main = getFibonacci;
