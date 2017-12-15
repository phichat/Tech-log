// import React from 'react';
// import ReactDom from 'react-dom';
// import { AppContainer } from 'react-hot-loader';
// import { App } from 'Components'
// // import RootContainer from 'Containers/root';

// const render = Component => {
//     ReactDom.render(
//         <AppContainer>
//             <App />
//         </AppContainer>,
//         document.getElementById('root')
//     )
// }

// render(App)

// if (module.hot) {
//     module.hot.accept('Components', () => render(App))
// }
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { App } from 'Components'

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
)
