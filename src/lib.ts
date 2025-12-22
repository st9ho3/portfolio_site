export const getText = (id: string) => {
  if (id === 'tagline') {
    return "bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-xl text-transparent md:text-3xl"
  }
  if (id === 'aboutmeTitle') {
    return 'bg-linear-to-r from-gray-700 via-gray-400 to-white bg-clip-text text-transparent text-4xl md:text-7xl mb-10 p-5'
  }
  if (id === 'about') {
    return 'px-10 text-white text-md text-transparent md:text-2xl'
  }

}

export const getData = async(requestUrl: string) => {
  
  const res = await fetch(`${requestUrl}`, {
    headers: {
        'Content-Type': 'application/json'
    }
})

const {aboutText, aboutTitle} = await res.json()
return {aboutText, aboutTitle}
}