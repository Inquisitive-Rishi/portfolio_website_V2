import { useEffect } from "react"

const myUrl = 'https://api.github.com/users/Inquisitive-Rishi'

function Github() {
  useEffect(() => {
    async function getData() {
      const res = await fetch(myUrl)
      const data = await res.json()
      const [avatar, followers, following, location, public_repos, twitter, name] = [ data.avatar_url, data.followers, data.following, data.location, data.public_repos, data.twitter_username, data.name ]
      console.log(avatar,followers,following,location,public_repos,twitter,name );
    }
    getData()
  })

  return (
    <div className='flex justify-center items-center text-3xl text-black'>
      <h1>Github Page</h1>
    </div>
  )
}

export default Github