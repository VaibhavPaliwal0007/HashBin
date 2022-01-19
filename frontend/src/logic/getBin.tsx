import axios from "axios";

export async function getBin ( binUrl: String )
{
  const response = await axios.get( `http://localhost:4000/api/v1${ binUrl }` );
  return response.data;
}
