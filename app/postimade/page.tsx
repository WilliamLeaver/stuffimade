
import * as Posts from './posts'

let pageNum : number = 0

const page = () => {
  return (
    <div className="flex 2xl:w-1/2 rounded-xl flex-col text-center text-white mb-2 p-2">
      <div className='text-3xl rounded-xl font-bold bg-base-100 mb-2'>My Blog: First Post - 1/1/2024</div>
      {Object.values(Posts).reverse().map((Post, index) => (
        <Post key={index}></Post>
      ))}
    </div>
  )
}

export default page