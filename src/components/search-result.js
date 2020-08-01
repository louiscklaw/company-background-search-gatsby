import React from 'react'

import GlobalContext from '../contexts/general-context'

import SearchInAmazon from './search-in-amazon'
import SearchInAmazonJp from './search-in-amazon-jp'
import SearchInAmazonUk from './search-in-amazon-uk'
import SearchInAppledaily from './search-in-appledaily'
import SearchInBBC from './search-in-bbc'
import SearchInBloomberg from './search-in-bloomberg'
import SearchInCpjobs from './search-in-cpjobs'
import SearchInCtgoodjobs from './search-in-ctgoodjobs'
import SearchInCarousell from './search-in-carousell'
import SearchInEzone from './search-in-ezone'
import SearchInFacebook from './search-in-facebook'
import SearchInGithub from './search-in-github'
import SearchInGlassdoor from './search-in-glassdoor'
import SearchInGoogle from './search-in-google'
import SearchInGooglePlay from './search-in-google-play'
import SearchInGoogleTrends from './search-in-google-trends'
import SearchInHackaday from './search-in-hackaday'
import SearchInHkej from './search-in-hkej'
import SearchInHkejStartupbeat from './search-in-hkej-startupbeat'
import SearchInHket from './search-in-hket'
import SearchInIndeed from './search-in-indeed'
import SearchInJobsdb from './search-in-jobsdb'
import SearchInLihkg from './search-in-lihkg'
import SearchInLinkedinJobs from './search-in-linkedin-jobs'
import SearchInRakutenJp from './search-in-rakuten-jp'
import SearchInRakutenTw from './search-in-rakuten-tw'
import SearchInScmp from './search-in-scmp'
import SearchInTaobao from './search-in-taobao'
import SearchInWalmart from './search-in-walmart'
import SearchInYoutube from './search-in-youtube'
import SearchInHkgolden from './search-in-hkgolden'

function SearchResult(props){
  let {
    hello, setHello,
    search_text
  } = React.useContext(GlobalContext)

  return(
    <>
      search keyword advisor
      <pre>
        {JSON.stringify(hello)}
      </pre>


      <SearchInFacebook search_text={search_text} />
      <SearchInYoutube search_text={search_text} />
      <SearchInHkejStartupbeat search_text={search_text} />
      <SearchInGlassdoor search_text={search_text}/>
      <SearchInBloomberg search_text={search_text} />

      <SearchInGoogle search_text={search_text} />
      <SearchInGooglePlay search_text={search_text} />
      <SearchInGoogleTrends search_text={search_text} />

      <SearchInAmazon search_text={search_text}/>
      <SearchInAmazonJp search_text={search_text}/>
      <SearchInAmazonUk search_text={search_text} />
      <SearchInRakutenTw search_text={search_text}/>
      <SearchInRakutenJp search_text={search_text}/>
      <SearchInWalmart search_text={search_text}/>
      <SearchInCarousell search_text={search_text} />


      <SearchInJobsdb search_text={search_text}/>
      <SearchInCtgoodjobs search_text={search_text} />
      <SearchInCpjobs search_text={search_text} />
      <SearchInLinkedinJobs search_text={search_text} />
      <SearchInIndeed search_text={search_text} />

      <SearchInAppledaily search_text={search_text} />
      <SearchInHkej search_text={search_text} />
      <SearchInHkejStartupbeat search_text={search_text} />
      <SearchInHket search_text={search_text} />

      <SearchInGithub search_text={search_text} />

      <SearchInLihkg search_text={search_text} />
      <SearchInHkgolden search_text={search_text} />


      <SearchInBBC search_text={search_text} />
      <SearchInHackaday search_text={search_text} />
      <SearchInScmp search_text={search_text} />
      <SearchInEzone search_text={search_text} />

      <SearchInTaobao search_text={search_text} />

    </>
  )
}

export default SearchResult