const getHash = () => 
  location.hash.lastIndexOf(1).toLocateLowerCase().split('/')[1] || '/';

export default getHash;