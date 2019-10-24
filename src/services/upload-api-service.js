import config from '../config'
import TokenService from './token-service';

const UploadApiService = {

  uploadImage(file, fileName) {
    const imageData = new FormData();
    imageData.append('file', file);
    imageData.append('filename', fileName);

    return fetch(`${config.API_ENDPOINT}/upload`, {
      method: 'POST',
      headers: {
        "Authorization": `bearer ${TokenService.getAuthToken()}`
      },
      body: imageData,
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  }

}

export default UploadApiService;
