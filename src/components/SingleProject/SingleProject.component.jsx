import React from "react"
import "./SingleProject.styles.scss"
import { StaticImage } from "gatsby-plugin-image"

const SingleProject = ({ title, description, tags, image }) => {
  return (
    <div className="github-container">
      <div className="github-title-container">
        <svg
          class="svg"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="28"
          height="28"
        >
          <path
            fill-rule="evenodd"
            d="M15.5 11.75a3.5 3.5 0 11-7 0 3.5 3.5 0 017 0zm1.444-.75a5.001 5.001 0 00-9.888 0H2.75a.75.75 0 100 1.5h4.306a5.001 5.001 0 009.888 0h4.306a.75.75 0 100-1.5h-4.306z"
            fill="currentColor"
          ></path>
        </svg>

        <h1>{title}</h1>
        <p>{description}</p>
        <div className="tag-container">
        {tags.map(tag => {
          return(
            <p>{tag}</p>
          )
        })}
        </div>
      </div>
      <div className="github-description-container">
        {image}
        <p>Github link</p>
        <p>Hosted project link</p>
        
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas enim doloribus corrupti ratione exercitationem minus delectus modi ipsam adipisci tempora tenetur repellendus eveniet cum, eum deserunt esse possimus voluptate officiis ullam sequi dolorem. Quod eligendi, porro magnam necessitatibus debitis perferendis nulla cum in ducimus tenetur itaque non. Enim, iste unde.</p>
        <hr />
      </div>
    </div>
  )
}

export default SingleProject
