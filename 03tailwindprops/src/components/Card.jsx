import React from 'react'

export function Card({username,btnText,btnext}) {
    console.log(username);
    

    return (
        <>
         <div className="flex max-w-1xl flex-col items-center rounded-md border md:flex-row">
  <div className="h-full w-full md:h-[100px] md:w-[200px]">
    <img
      src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
      alt="Laptop"
      className="h-full w-full rounded-md object-cover"
    />
  </div>
  <div>
    <div className="p-4">
      <h1 className="inline-flex items-center text-lg font-semibold">
         {username}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="ml-2 h-4 w-4"
        >
          <line x1="7" y1="17" x2="17" y2="7"></line>
          <polyline points="7 7 17 7 17 17"></polyline>
        </svg>
      </h1>
      <p className="mt-3 text-sm text-gray-600">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
        debitis?
      </p>
      <div className="mt-1">
        <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
          {btnText}
        </span>
        <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
        {btnext || "mat aao"}
        </span>
        <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
          #Laptop
        </span>
      </div>
      <div className="mt-3 flex items-center space-x-2">
        <img
          className="inline-block h-5 w-5 rounded-full"
          src="https://overreacted.io/static/profile-pic-c715447ce38098828758e525a1128b87.jpg"
          alt="Dan_Abromov"
        />
        <span className="flex flex-col">
          <span className="text-[10px] font-medium text-gray-900">Dan Abromov</span>
          <span className="text-[8px] font-medium text-gray-500">@dan_abromov</span>
        </span>
      </div>
    </div>
  </div>
</div>
        </>
    )
}
