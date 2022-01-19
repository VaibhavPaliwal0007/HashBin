import axios from "axios";
import { Bin } from "./constants";

export async function saveBin ( bin: Bin )
{
  try
  {
    const response = await axios.post( "http://localhost:4000/api/v1/takeCode", bin );
    console.log( response );
    return response.status;
  }
  catch ( e )
  {
    console.log( e );
  }
  return 401;
}
