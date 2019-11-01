import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Img from "gatsby-image"
import { StaticQuery, graphql } from "gatsby"

const Header = ({ siteTitle, data }) => (
  <StaticQuery
    query={graphql`
      query {
        file(relativePath: { eq: "github-logo.png" }) {
          childImageSharp {
            fixed(width: 100, height: 41) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `}
    render={data => (
      <header className="text-gray-800">
        <div className="flex items-center justify-between mx-auto px-4">
          <h1 className="flex-grow text-5xl font-bold">
            <Link
              to="/"
              style={{
                textDecoration: `none`,
              }}
            >
              {siteTitle}{" "}
            </Link>{" "}
          </h1>{" "}
          <div className="max-w-sm mx-auto flex p-1 pb-0  hover:bg-gray-100 rounded-lg border shadow-xs">
            <a href="http://github.com/tombatossals/react-chords">
              <Img
                style={{ margin: 0 }}
                fixed={data.file.childImageSharp.fixed}
              />{" "}
            </a>{" "}
          </div>{" "}
        </div>{" "}
      </header>
    )}
  />
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
