import React from 'react'

const Layout = ({ children }) => {
  return (
    <div style={{ margin: `0 auto`, maxWidth: 960, padding: `0 1.0875rem 1.45rem` }}>
      <header style={{ marginBottom: `1.5rem` }}>
        <h1>Markdown Documentation</h1>
      </header>
      <main>{children}</main>
      <footer style={{ marginTop: `2rem` }}>
        © {new Date().getFullYear()}, Built with Gatsby
      </footer>
    </div>
  )
}

export default Layout 
