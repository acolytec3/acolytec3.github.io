import React from "react"
import {StaticQuery, graphql} from "gatsby"

export default () => (
    <StaticQuery
        query={graphql`
        query {
          allPagesJson {
            nodes {
              contributions {
                nodes {
                  pullRequest {
                    body
                    title
                    url
                    repository {
                      url
                      name
                    }
                  }
                }
              }
            }
          }
        }     
        `}
    
    render={data => (
      <div className="row align-items-left">
        {data.allPagesJson.nodes[0].contributions.nodes.map(node => {
         return <div>
            <h3><a href={node.pullRequest.url}>{node.pullRequest.title}</a></h3>
            <h5>on <a href={node.pullRequest.repository.url}>{node.pullRequest.repository.name}</a></h5>
            <p>{node.pullRequest.body}</p>
          </div>
        })} 
        </div>                       
    )}
    />
)
