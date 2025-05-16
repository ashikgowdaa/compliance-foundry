const API_URL = process.env.API_URL;


type Props = {
    url : string,
    options?: RequestInit
}

export async function getMethod({url, options = {}}:Props) {
    try {
        const apiEndPoint = API_URL + url
        console.log(apiEndPoint,"api")
      const res = await fetch(apiEndPoint, {
        ...options,
        // You can add defaults here, e.g.:
        // headers: { 'Content-Type': 'application/json', ...options.headers },
        cache: 'force-cache', // or 'no-store' depending on your needs
      });
  
      if (!res.ok) {
        throw new Error(`Failed to fetch ${url}: ${res.status} ${res.statusText}`);
      }
  
      const data = await res.json();
      return data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
  