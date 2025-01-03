import React from 'react'

function Card({username = "SPK", post = "not assigned yet"}) {   //instead of "{username}" you can use "props" and then call the speicific property using "props.propertyName"
    //the values that are specified here to the props will be used as default values if on calling card function someone don't pass the props values.
  return (
    <div>
        <figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
        <img className="w-24 h-24 rounded-full mx-auto" src="https://images.pexels.com/photos/18148937/pexels-photo-18148937/free-photo-of-vintage-tram-on-a-street.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" width="384" height="512"/>
        <div className="pt-6 space-y-4">
        <blockquote>
            <p className="text-lg font-m">
            “Tailwind CSS is the only framework that I've seen scale
            on large teams. It’s easy to customize, adapts to any design,
            and the build size is tiny.”
            </p>
        </blockquote>
        <figcaption>
            <div>
            {username}
            </div>
            <div>
                {post}
            </div>
        </figcaption>
        </div>
        </figure>
    </div>
  )
}

export default Card
