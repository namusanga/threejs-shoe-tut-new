export const parseRequestUrl = () => {
  const url = document.location.hash.toLowerCase();
  const request = url.split('/');
  // console.log(request[2])
  
  return {
    resource: request[1],
    id: request[2],
    action: request[3],

  };

};
