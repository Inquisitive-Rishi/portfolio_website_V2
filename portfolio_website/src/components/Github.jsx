import { useEffect, useState } from "react"
import ParagraphNormal from "./paragraphs/ParagraphNormal"
import locationImg from '../assets/map.png'

const myUrl = 'https://api.github.com/users/Inquisitive-Rishi'

function Github() {
  const [ myData, setMyData ] = useState({})
  const [ loading, setLoading ] = useState(true)

  useEffect(() => {
    async function getData() {
      try {
        const res = await fetch(myUrl, { mode: "cors" })
        const data = await res.json()
        const { avatar_url: avatar, followers, following, location, public_repos, twitter_username, name, bio, html_url: url } = data
        console.log(data);
        const allData = {
          avatar, followers, following, location, public_repos, twitter_username, name, bio, url
        }
        setMyData(allData)
        setLoading(false)
      } catch (error) {
        console.error(`Error fetching data: ${error}`);
      } 
    }
    getData()
  }, [])
  console.log(myData);
  return (
    <div className='flex justify-center items-center text-3xl p-3'>
      <div className=" p-3 shadow-lg shadow-indigo-500/40 text-black margin-auto">
        <div>
          <div className="flex gap-3">
            <div className="h-[150px] w-[150px] rounded-full border-4 border-indigo-500 overflow-hidden shrink-0">
              <img src={myData.avatar} alt="avatar" />
            </div>
            <div>
              <p className="font-bold text-5xl mb-3">{myData.name}</p>
              <ParagraphNormal text={ "Location - "+myData.location}/>

              <div className="max-w-[50%] leading-6">
                <ParagraphNormal text={myData.bio}/>
              </div>
              <div className="flex gap-3" >
                <ParagraphNormal text={"followers - "+myData.followers}/>
                <ParagraphNormal text={"following - "+myData.following}/>
              </div>
              <ParagraphNormal text={"Twitter - "+myData.twitter_username}/>
              <ParagraphNormal text={"Reach me at - "+myData.url}/>
              <ParagraphNormal text={"Repositories - "+myData.public_repos}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Github