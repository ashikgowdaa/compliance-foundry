const API_URL = process.env.API_URL;


type Props = {
    url : string,
    options?: RequestInit
}

export async function getMethod({ url, options = {} }: Props) {
  try {
    const apiEndPoint = API_URL + url;

    const res = await fetch(apiEndPoint, {
      ...options,
    });
    if (!res ||  !res.ok) {
      return null; 
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Fetch error:", error);
    return null;
  }
}

  