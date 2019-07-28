import React from "react"
import {StaticQuery, graphql} from "gatsby"

export default () => (
    <StaticQuery
        query={graphql`
            query {
                allPagesJson {
                    nodes {
                      ownedRepositories {
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
      <div className="row align-items-center">
        {data.allPagesJson.nodes[0].ownedRepositories.nodes.map(node => {
         return <div className="col-md-3">
            <h3><a href={node.url}>{node.name}</a></h3>
            <p>{node.description}</p>
          </div>
        })} 
        </div>                       
    )}
    />
)
