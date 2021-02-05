import React from 'react'

export const NotefulContext = React.createContext({
  folders: [],
  notes: [],
  // addFolder: () => {},
  // deleteFolder: () => {},
  // addNote: () => {},
  deleteNote: () => {}
})

// export default NotefulContext