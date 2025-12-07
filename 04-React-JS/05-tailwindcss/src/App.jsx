// import cars from './example';
// import { FaBeer , FaDisease   } from "react-icons/fa";
// import { AiFillBug  } from "react-icons/ai";



// const App = () => {
//   console.log(cars);


//   return (
//     <>
//       <h1 className='text-center bg-[#000000] text-white p-[50px] text-4xl font-bold cursor-pointer hover:bg-gray-500'>Hello world <FaBeer/> <FaDisease/> <AiFillBug/></h1>
//       {/* <div className='flex justify-center gap-10 flex-wrap'>
//         {cars.map(item => {
//           return <CarCard key={item.id} car={item} />

//         })}
//       </div> */}
//     </>
//   )
// }

// export default App


import React, { useEffect, useState } from 'react'
import { Bounce, toast, ToastContainer } from 'react-toastify';
import ProductCard from './components/ProductCard';

const App = () => {

  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);


  // toast config

  const notify = () => toast.error("Error occured");



  const url = 'https://api.freeapi.app/api/v1/public/randomproducts';
  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(res => {
        console.log(res.data.data)
        setProducts(res.data.data)
      })
      .catch(err => {
        console.log(err);
        setError(true)
        notify()

      }).finally(() => {
        setLoading(false);
      })
  }, [])

  return (
    <>
      <h1 className='text-3xl text-center m-5'>Hello world</h1>
      {loading && <div className='h-[90vh] flex justify-center items-center'>
        <span className="loading loading-spinner text-primary loading-xl"></span>
      </div>}


      {error && <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
      />}

      {products && products.map(item => {
        return <ProductCard key={item.id} description={item.description} title={item.title} image={item.images[0]} />
      })}


      <figure className="hover-gallery max-w-60">
        <img src="https://scontent.cdninstagram.com/v/t51.82787-15/589243608_18411336694190913_6174906052649189883_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=111&ig_cache_key=Mzc4MTA4NDE0MDQ4NjMzODc4OQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjExNzl4MTE3OS5zZHIuQzMifQ%3D%3D&_nc_ohc=M1zCGBoCgqUQ7kNvwG85ls5&_nc_oc=AdmV19dMBX8ASjDImUSLFWzxpXN8QXLV6oENm535ZFakDchrjPSL_RIJuA-1443a9qg&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=MvHKyil1qja6pM4mrva6nQ&oh=00_Aflc9D3D2UDS9US7sMnEDkA2PYC4iGeFzVSfEv8uWLB9eA&oe=693B32F6" />
        <img src="https://scontent.cdninstagram.com/v/t51.82787-15/589208000_18411336703190913_8878997623066553936_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=104&ig_cache_key=Mzc4MTA4NDE0MDQ5NDczODczOA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjExNzl4MTE3OS5zZHIuQzMifQ%3D%3D&_nc_ohc=zzuCzUSC6yMQ7kNvwENRcRg&_nc_oc=Adl79s4pwyBR-xYqYdRXEA_1FTJEBlIJJvLU8hiSHh5qPxjcoYperQbAFXzxn1Pja6o&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=MvHKyil1qja6pM4mrva6nQ&oh=00_Afm0-tR_tNDD-NNPDFQSOFHNZwjE_7MqVcuy-9o5S71jrQ&oe=693B6004" />
        <img src="https://scontent.cdninstagram.com/v/t51.75761-15/485700766_18375819760190913_5168518618074877187_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=109&ig_cache_key=MzU5MTk2MjY0MzE4ODI5OTk1Mw%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjExNzl4MTE3OS5zZHIuQzMifQ%3D%3D&_nc_ohc=7Ieb8bPXN3sQ7kNvwFUl5p0&_nc_oc=AdmGaF0qziCb5ZuQOKQxSrbQAaA-wewC4iIdjvWyhcyoGvX6kh9QSaj8Zte9INEviiw&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=X-xjJPHiRD6m388fBa7jpQ&oh=00_AfnBtYlx3KnZAab4p_mPpW_iLBVPKY7Gn1v4MGcH_Wjlng&oe=693B4D3F" />
        <img src="https://scontent.cdninstagram.com/v/t51.82787-15/554977903_18399967345190913_7057261225915314398_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=100&ig_cache_key=MzczMTUzNjIyMjE1NTAzOTE5OQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjExNzl4MTE3OS5zZHIuQzMifQ%3D%3D&_nc_ohc=ktNJebxxVJwQ7kNvwFEbAWl&_nc_oc=AdlVsg35H1K7YVyRnw7cLw-FPA-kFfmCVybBGwudkLOsNuFID7JUaZkIxsna7v286Wo&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=rNuS4Q-DKDjLa30Q4-YvhQ&oh=00_AfkkZAA66j3moq1LEeKIRTvS04XISS1Gnz3nKFjXbZ9GpA&oe=693B50C4" />
      </figure>
    </>
  )
}

export default App