export default function GetImage({
  url
}:{
  url:string
}){
  const source = process.env.PUBLIC_BACKEND_URL + url;
  return source
}