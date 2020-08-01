import React from 'react'
import LinkToOutside from './link-to-outside'

function SearchInGithub(props){

  let search_list = [
    'Code','Commits','Issues','Users',
    'Discussions','RegistryPackages','Marketplace','Topics','Wikis'
  ]

  return(
    <div>

      <div>
        <LinkToOutside href={`https://github.com/search?q=casetify`} text={`search in github`} />
      </div>
      {
        search_list.map( type =>
          {
            return(
              <div>
                <LinkToOutside key={`github_search_${type}`} href={`https://github.com/search?q=casetify&type=${type}`} text={`search in github for ${type}`} />
              </div>
            )
          }
        )
      }
    </div>
  )
}

export default SearchInGithub