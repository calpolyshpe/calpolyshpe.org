export default function Instagram() {
    const Instagram = require('instagram-web-api')
    const username = process.env.NEXT_PUBLIC_IGUSER
    const password = process.env.NEXT_PUBLIC_IGPASS

    const client = new Instagram({ username, password })
    async function getPhotos() {
        await client.getPhotosByUsername({ username: 'shpecalpoly' }).then((response) => {
          console.log(response)
        })
      }   
    return (
        <div>
            <button onClick={getPhotos()}> Press here </button>
        </div>
    );
}