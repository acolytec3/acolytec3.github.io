import React from "react"
import {StaticQuery, graphql} from "gatsby"

export default () => (
    <StaticQuery
        query={graphql`
            query {
                allPagesJson {
                    nodes {
                      repositoriesContributedTo {
                        nodes {
                          description
                          name
                          url
                        }
                      }
                    }
                  }
                }
                
        `}
    render={data => (
            <div>
            <h2>Project Name <a href={data.allPagesJson.nodes[0].repositoriesContributedTo.nodes[0].url}>{data.allPagesJson.nodes[0].repositoriesContributedTo.nodes[0].name}</a></h2>
            {data.allPagesJson.nodes[0].repositoriesContributedTo.nodes[0].description}
             </div>
    )}
    />
)
