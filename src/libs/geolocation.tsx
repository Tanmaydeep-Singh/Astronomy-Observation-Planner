export interface Coordinates {
    latitude: number;
    longitude: number;
  }
  
  export const getCurrentLocation = (): Promise<Coordinates | null> => {
    return new Promise((resolve, reject) => {
      if (!navigator.geolocation) {
        reject(new Error('Geolocation is not supported by this browser.'));
      } else {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            resolve({ latitude, longitude });
          },
          (error) => reject(error)
        );
      }
    });
  };
  