import React, { useEffect } from 'react';
import PropTypes from 'prop-types'
import { getProjects } from './actions/projects'
import { useDispatch } from 'react-redux'
import Nav from './components/Nav'


function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProjects())
    return () => dispatch()
  }, [dispatch])

  return (
    <Nav />
  );
}

App.propTypes = {
  getProjects: PropTypes.func.isRequired,
}

export default App;